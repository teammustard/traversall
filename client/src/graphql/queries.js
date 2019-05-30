import gql from 'graphql-tag';

export const GET_TOUR_DETAILS = gql`
	query GetTour($id: ID!) {
		getTour(id: $id) {
			name
			duration
			listed_price
			tagline
			description
			hashtag
			starting_loc
			ending_loc
			accommodation_summary
			accommodation_detail
			breakfast_included
			lunch_included
			dinner_included
			meals_detail
			team_summary
			team_detail
			transport_summary
			transport_detail
			experiences_included
			experiences_optional
			experiences_detail
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

export const GET_ALL_COUNTRIES = gql`
	{
		getCountries {
			country_code
			full_name
		}
	}
`;
