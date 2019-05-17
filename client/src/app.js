import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

const GET_TOUR_DETAILS = gql`
	{
		getTour(id: 4) {
			name
			duration
			description
		}
	}
`;

const App = () => {
	const { data, error, loading } = useQuery(GET_TOUR_DETAILS);
	if (loading) {
		return <div>loading</div>;
	}
	if (error) {
		return <div>Got an error: {error.message}</div>;
	}

	return (
		// <div>
		// 	<h1>Name: {data.getTour.name}</h1>
		// 	<h2>Duration: {data.getTour.duration}</h2>
		// 	<h2>Description: {data.getTour.description}</h2>
		// </div>
		<div className="o-layout__wrap">
			<div className="o-layout">
				<div className="o-layout__row">
					<div className="c-menu prop-has-secondary-items" />
					<div className="o-canvas">
						<div className="o-canvas__table">
							<header className="o-header">
								<div className="o-header__wrapper">
									<div className="o-header__search">
										<div className="c-search__input-wrap">
											<form action="" id="search-form">
												<span className="c-search__btn" />
												<input type="text" className="c-search__input" placeholder="go away" />
											</form>
										</div>
									</div>
								</div>
							</header>
							<div className="o-content">
								<div className="o-content__table">
									<div className="o-content__wrapper">
										<div className="js-prevent-no-content">
											<div className="c-trip-detail js-main-content prop-is-affiliate">
												<div class="c-trip-detail-info">
													<div className="c-trip-detail-info-top__left">
														<h1>European Discovery</h1>
													</div>
													<div className="c-trip-detail-info-top__right" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
