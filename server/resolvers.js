const resolvers = {
	Query: {
		getTours: async (parent, args, context, info) => await context.db.all('SELECT * FROM tours'),
		getTour: async (parent, { id }, context, info) => {
			const tour = await context.db.get(`SELECT * FROM tours WHERE id=${+id}`);
			return tour;
		},
		getCountries: async (parent, args, context, info) => await context.db.all('SELECT * FROM countries')
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
	resolvers
};
