const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schema.js');
const { dbPromise } = require('../db');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./dist'));

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: async () => ({
		db: await dbPromise
	})
});

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
