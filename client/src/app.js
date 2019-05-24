import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';

// const GET_TOUR_DETAILS = gql`
// 	{
// 		getTour(id: 4) {
// 			name
// 			duration
// 			description
// 		}
// 	}
// `;

const App = () => {
	// const { data, error, loading } = useQuery(GET_TOUR_DETAILS);
	// if (loading) {
	// 	return <div>loading</div>;
	// }
	// if (error) {
	// 	return <div>Got an error: {error.message}</div>;
	// }

	return (
		// <div>
		// 	<h1>Name: {data.getTour.name}</h1>
		// 	<h2>Duration: {data.getTour.duration}</h2>
		// 	<h2>Description: {data.getTour.description}</h2>
		// </div>
		<div className="o-layout__wrap">
			<div className="o-layout">
				<div className="o-layout__row">
					<Sidebar />
					<div className="o-canvas">
						<div className="o-canvas__table">
							<Header />
							<Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
