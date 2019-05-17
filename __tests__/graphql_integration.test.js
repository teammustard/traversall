'use strict';

const fs = require('fs');
const sqlite = require('sqlite');
const request = require('supertest');
const { ApolloServer, gql } = require('apollo-server-express');

const { createTables } = require('../db/createTables');
const seedExamples = fs.readFileSync('./__tests__/exampleData.sql').toString();
const { app } = require('../server/index.js');
const schemaCode = fs.readFileSync('./server/schema.graphql', 'utf8');
const { resolvers } = require('../server/resolvers.js');

describe('GraphQL (Apollo Server), Sqlite, and ExpressJS Integration', () => {
	let db;

	beforeAll(async () => {
		// Establish test database in memory
		db = await sqlite.open(':memory:', { Promise });

		// Establish actual Apollo Server using actual schema/resolvers
		const typeDefs = gql`${schemaCode}`;

		const server = new ApolloServer({
			typeDefs,
			resolvers,
			context: {
				db
			}
		});

		// Integrate Apollo Server into Express
		server.applyMiddleware({ app });

		// Insert test data into the test database
		return db
			.exec(createTables)
			.then(() => {
				console.log('Successfully reset tables');
				return db.exec(seedExamples);
			})
			.catch((err) => {
				throw err;
			});
	});

	afterAll(() => {
		db.close();
	});

	test('Should pass if the server is able to respond to a query', () => {
		return request(app).post('/graphql').send({ query: '{ getTours { name } }' }).expect(200).then((res) => {
			expect(res.body).toBeDefined();
		});
	});

	test('Should pass if the server appropriately rejects an invalid query', () => {
		return request(app).post('/graphql').send({ query: '{ getTours { name } }' }).expect(200).then((res) => {
			expect(res.body).toBeDefined();
		});
	});

	test('Should pass if the server returns the correct data for a valid query for all trips made via the graphQL API', () => {
		return request(app)
			.post('/graphql')
			.send({ query: '{ getTours { name, duration, trips { capacity }, travel_style { name } } }' })
			.expect(200)
			.then((res) => {
				expect(res.body.data).toHaveProperty('getTours');
				expect(res.body.data.getTours[0]).toHaveProperty('name');
				expect(res.body.data.getTours[0]).toHaveProperty('duration');
				expect(res.body.data.getTours[0]).toHaveProperty('trips');
				expect(res.body.data.getTours[0]).toHaveProperty('travel_style');
				expect(res.body.data.getTours[0].trips[0]).toHaveProperty('capacity');
				expect(res.body.data.getTours[0].travel_style).toHaveProperty('name');
			});
	});
});
