'use strict';

const fs = require('fs');
const sqlite = require('sqlite');
const request = require('supertest');
const { ApolloServer, gql } = require('apollo-server-express');

const { createTables } = require('../db/createTables');
const seedExamples = fs.readFileSync('./__tests__/exampleData.sql').toString();
const { app, PORT } = require('../server/index.js');
const schemaCode = fs.readFileSync('./server/schema.graphql', 'utf8');
const { resolvers } = require('../server/resolvers.js');

describe('GraphQL (Apollo Server), Sqlite, and ExpressJS Integration', () => {
	let db;
	let connection;

	beforeAll(async () => {
		db = await sqlite.open(':memory:', { Promise });

		const typeDefs = gql`${schemaCode}`;

		const server = new ApolloServer({
			typeDefs,
			resolvers,
			context: {
				db
			}
		});

		server.applyMiddleware({ app });

		// connection = app.listen(PORT, () => {
		// 	console.log(`Test server operational at http://localhost:${PORT}`);
		// });

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
		// connection.close();
	});

	test('Should pass if the server returns the correct data for a valid query for all trips made via the graphQL API', (
		done
	) => {
		return request(app)
			.post('/graphql')
			.send({ query: '{ getTours { name, duration, trips { capacity }, travel_style { name } } }' })
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);
				expect(res.body.data).toHaveProperty('getTours');
				expect(res.body.data.getTours[0]).toHaveProperty('name');
				expect(res.body.data.getTours[0]).toHaveProperty('duration');
				expect(res.body.data.getTours[0]).toHaveProperty('trips');
				expect(res.body.data.getTours[0]).toHaveProperty('travel_style');
				expect(res.body.data.getTours[0].trips).toHaveProperty('capacity');
				expect(res.body.data.getTours[0].travel_style).toHaveProperty('name');
				done();
			});
	});
});
