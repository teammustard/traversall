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

  app.listen(PORT, () =>
    console.log(`🚀 ${ENV} server ready at http://localhost:${PORT}`)
  );
}

module.exports = { app };
