'use strict';

const fs = require('fs');
const EasyGraphQLTester = require('easygraphql-tester');
const schemaCode = fs.readFileSync('./server/schema.graphql', 'utf8');
const { resolvers } = require('../server/resolvers.js');

const sqlite = require('sqlite');
const { createTables } = require('../db/createTables');
const seedExamples = fs.readFileSync('./__tests__/exampleData.sql').toString();

describe('GraphQL Query Database', () => {
	let tester;
	let db;
	let context;

	beforeAll(async () => {
		// Establish EasyGraphQLTester using actual schema/resolvers
		tester = new EasyGraphQLTester(schemaCode, resolvers);

		// Establish test database in memory
		db = await sqlite.open(':memory:', { Promise });

		// Insert test data into the test database
		return db
			.exec(createTables)
			.then(() => {
				console.log('Successfully reset tables');
				return db.exec(seedExamples);
			})
			.then(() => {
				context = {
					db
				};
			})
			.catch((err) => {
				throw err;
			});
	});

	afterAll(() => {
		db.close();
	});

	test('Should pass if a valid query for all trips returns the correct data from sqlite', () => {
		const query = `
      query TEST {
        getTours {
          id
          name
        }
      }
    `;

		expect.assertions(3);

		return tester.graphql(query, undefined, context, undefined).then((result) => {
			expect(result.data).toBeDefined();
			expect(result.data.getTours).toHaveLength(2);
			expect(result.data.getTours[0].name).toEqual('augue vel');
		});
	});

	test('Should pass if a valid query for a single trip returns the correct data from sqlite', () => {
		const query = `
      query TEST {
        getTour(id: 2) {
          id
          name
          trips {
            capacity
          }
        }
      }
    `;

		expect.assertions(4);

		return tester.graphql(query, undefined, context, undefined).then((result) => {
			expect(result.data.getTour).toBeDefined();
			expect(result.data.getTour.id).toBe('2');
			expect(result.data.getTour.name).toBe('ut volutpat sapien');
			expect(result.data.getTour.trips[0].capacity).toEqual(16);
		});
	});

	test('Should pass if an invalid query format appropriately results in an error', () => {
		const query = `
      query TEST {
        getTour(id: 2) {
          id
          name
          trips {
						capacity
						invalidField
          }
        }
      }
    `;

		expect.assertions(1);

		return tester.graphql(query, undefined, context, undefined).then((result) => {
			expect(result.errors).toBeDefined();
		});
	});

	test('Should pass if querying for a nonexistent, non-nullable entry appropriately results in an error', () => {
		const query = `
      query TEST {
        getTour(id: 100) {
          id
          name
          trips {
						capacity
          }
        }
      }
    `;

		expect.assertions(1);

		return tester.graphql(query, undefined, context, undefined).then((result) => {
			expect(result.errors).toBeDefined();
		});
	});
});
