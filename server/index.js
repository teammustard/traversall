const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema.js');
const { resolvers } = require('./resolvers.js');
const { dbPromise } = require('../db');
const app = express();
const PORT = process.env.PORT || 3003;
const ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const cors = require('cors');

// The server serves different files depending whether it is in a production environment (as set by process.env.NODE_ENV,
// which is the default variable set by PM2 if you use PM2's ecosystem.config.js file
// The difference is: public includes files produced by parcel using "parcel build", which is the real bundling process
// whereas the standard "parcel" does not do true bundling (but is faster). Generally, you do NOT do production build
// until your component is basically completed and ready to be served in a production environment

// Note that the proxy server has the same production / dist separation, and therefore must be set accordingly
// The proxy server should be set to the same environment as the component server

const servedFolder = ENV === 'production' ? '../public' : '../dist';

app.use(cors());

app.use(express.static(path.join(__dirname, servedFolder)));

// The if(require.main === module) statement is there for certain testing purposes. You may remove if you want.

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
		res.sendFile(path.join(__dirname, servedFolder, 'index.html'));
	});

	app.listen(PORT, () => console.log(`🚀 ${ENV} server ready at http://localhost:${PORT}${server.graphqlPath}`));
}

module.exports = { app };
