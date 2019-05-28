import gql from 'graphql-tag';

export const GET_TOUR_DETAILS = gql`
	query GetTour($id: ID!) {
		getTour(id: $id) {
			name
			duration
			listed_price
			starting_loc
			ending_loc
			countries {
				full_name
			}
			trips {
				discount
				start_time
				end_time
				capacity
				booked
			}
		}
	}
`;
