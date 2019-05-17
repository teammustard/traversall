import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

import { ApolloProvider } from 'react-apollo-hooks';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
	uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache()
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('app')
);
