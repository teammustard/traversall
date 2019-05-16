const fs = require('fs');
const EasyGraphQLTester = require('easygraphql-tester');
const schemaCode = fs.readFileSync('./server/schema.graphql', 'utf8');
const { resolvers } = require('../server/resolvers.js');

describe('GraphQL Schema', () => {
	let tester;
	beforeAll(() => {
		tester = new EasyGraphQLTester(schemaCode);
	});

	test('Should evaluate valid query', () => {
		const validQuery = `{
      getTour(id: 8) {
        name
        tagline
        hashtag
        trips {
          tour_id
          capacity
        }
        countries {
          full_name
        }
        travel_style {
          logo
        }
      }
    }`;

		tester.test(true, validQuery);
	});

	test('Should not evaluate query that does not provide required type', () => {
		const invalidQuery = `{
      getTour {
        name
        tagline
        hashtag
      }
    }`;

		tester.test(false, invalidQuery);
	});

	test('Should not evaluate an invalid query', () => {
		const invalidQuery = `{
      getTour {
        name
        tagline
        nonexistentField
      }
    }`;

		tester.test(false, invalidQuery);
	});
});

describe('GraphQL Resolvers', () => {
	let tester;
	let context;

	beforeAll(() => {
		tester = new EasyGraphQLTester(schemaCode, resolvers);
		context = {
			db: {
				all: () => [ { id: '1', name: 'Test Tour or Trip', capacity: 100 } ],
				get: () => ({ id: '5', name: 'Test Tour 5' })
			}
		};
	});

	test('Should resolve a valid query for all trips', () => {
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
			expect(result.data.getTours).toHaveLength(1);
			expect(result.data.getTours).toEqual([ { id: '1', name: 'Test Tour or Trip' } ]);
		});
	});

	test('Should resolve a valid query for single tour', () => {
		const query = `
      query TEST {
        getTour(id: 5) {
          id
          name
          trips {
            capacity
          }
        }
      }
    `;

		expect.assertions(4);

		return tester.graphql(query, undefined, context, { id: 5 }).then((result) => {
			expect(result.data.getTour).toBeDefined();
			expect(result.data.getTour.id).toBe('5');
			expect(result.data.getTour.name).toBe('Test Tour 5');
			expect(result.data.getTour.trips[0].capacity).toEqual(100);
		});
	});
});
