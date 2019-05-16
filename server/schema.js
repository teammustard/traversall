const { gql } = require('apollo-server-express');
const fs = require('fs');
const schema = fs.readFileSync('./server/schema.graphql', 'utf8').toString();
const typeDefs = gql`${schema}`;

module.exports = {
	typeDefs
};
