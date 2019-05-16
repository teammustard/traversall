const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Query {
		info: String!
		getTours: [Tour!]!
		getTour(id: ID!): Tour
	}

	type Tour {
		id: ID!
		name: String!
		starting_loc: String!
		ending_loc: String!
		duration: Int!
		travel_style: TravelStyle!
		listed_price: Int!
		tagline: String!
		description: String!
		video: String!
		hashtag: String!
		accommodation_summary: String!
		accommodation_detail: String!
		breakfast_included: Int!
		lunch_included: Int!
		dinner_included: Int!
		meals_detail: String!
		team_summary: String!
		team_detail: String!
		transport_summary: String!
		transport_detail: String!
		experiences_included: Int!
		experiences_optional: Int!
		experiences_detail: String!
		trips: [Trip!]!
		countries: [Country!]!
	}

	type Trip {
		id: ID!
		tour_id: Int!
		start_date: String!
		end_date: String!
		start_time: String!
		end_time: String!
		capacity: Int!
		booked: Int!
	}

	type TravelStyle {
		id: ID!
		name: String!
		description: String!
		logo: String!
		video: String!
	}

	type Country {
		id: ID!
		country_code: String!
		full_name: String!
	}
`;

const resolvers = {
	Query: {
		info: () => "This is Zack's attempt at a GraphQL server",
		getTours: async (parent, args, context, info) => await context.db.all('SELECT * FROM tours'),
		getTour: async (parent, { id }, context, info) => {
			const tour = await context.db.get(`SELECT * FROM tours WHERE id=${+id}`);
			return tour;
		}
	},

	Tour: {
		trips: async (parent, args, context, info) =>
			await context.db.all(`SELECT * FROM trips WHERE tour_id=${parent.id}`),
		travel_style: async (parent, args, context, info) =>
			await context.db.get(`SELECT * FROM travel_styles WHERE id=${parent.travel_style}`),
		countries: async (parent, args, context, info) =>
			await context.db.all(
				`SELECT * FROM countries WHERE id IN (SELECT country_id FROM tour_countries WHERE tour_id=${parent.id})`
			)
	}
};

module.exports = {
	typeDefs,
	resolvers
};
