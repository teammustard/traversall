const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Query {
		info: String!
		tours: [Tour!]!
		tour(id: ID!): Tour
	}

	type Mutation {
		post(name: String!, duration: Int!): Tour!
	}

	type Tour {
		id: ID!
		name: String!
		duration: Int!
	}
`;

let tours = [ { id: 1, name: 'Stupid Tour', duration: 4 }, { id: 2, name: 'Smart Tour', duration: 5 } ];
let tourId = tours.length;

const resolvers = {
	Query: {
		info: () => "This is Zack's attempt at a GraphQL server",
		tours: async (obj, args, context, info) => await context.db.all('SELECT * FROM tours'),
		tour: (obj, { id }) => {
			return tours.filter((tour) => tour.id === +id)[0];
		}
	},

	Mutation: {
		post: (parent, args) => {
			const tour = {
				id: tourId++,
				name: args.name,
				duration: args.duration
			};
			tours.push(tour);
			return tour;
		}
	}
};

module.exports = {
	typeDefs,
	resolvers
};
