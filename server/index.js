const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema.js');
const { resolvers } = require('./resolvers.js');
const { dbPromise } = require('../db');
const app = express();
const PORT = process.env.PORT || 3003;
const ENV = process.env.NODE_ENV;
const path = require('path');
const cors = require('cors');

const servedFolder = ENV === 'production' ? '../public' : '../dist';

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

if (require.main === module) {
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		context: async () => ({
			db: await dbPromise
		})
	});

	server.applyMiddleware({ app });

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.listen(PORT, () => console.log(`🚀 ${ENV} server ready at http://localhost:${PORT}${server.graphqlPath}`));
}

module.exports = { app };
