const { gql } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');

const schema = fs.readFileSync(path.join(__dirname, 'server/schema.graphql'), 'utf8').toString();
const typeDefs = gql`${schema}`;

module.exports = {
	typeDefs
};
