import React, { useContext } from 'react';
import { TourContext } from './tourContext';
import TripFeatures from './TripFeatures';
import { withRouter } from 'react-router-dom';

const TripDescription = (props) => {
	const tour = useContext(TourContext);
	const randomPhoto = 'https://loremflickr.com/320/150/travel?random=' + props.history.length;

	return (
		<React.Fragment>
			<div className="c-trip-detail-info-bottom-description">
				<div className="c-trip-detail-info-bottom-description__wrapper">
					<div className="c-trip-detail-info__title-text">
						<h2>{tour.tagline}</h2>
					</div>
					<div className="c-trip-detail-info__description-text">{tour.description}</div>
				</div>
			</div>

			<div className="c-trip-detail-info__wrapper-affiliate">
				<div className="c-trip-detail-info__title-body-affiliate">
					<div className="c-trip-detail-info__title-body-affiliate-left">
						<div className="c-trip-detail-info__title-body-affiliate-img-cont">
							<span
								className="c-trip-detail-info__title-body-affiliate-photo"
								style={{ backgroundImage: `url(${randomPhoto})` }}
							/>
						</div>
					</div>
					<div className="c-trip-detail-info__title-body-affiliate-right">
						<div className="c-trip-detail-info__title-body-affiliate-desc-cont">
							<div className="c-trip-detail-info__title-body-affiliate-desc">
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
								dolore eu fugiat nulla pariatur.
							</div>
						</div>
					</div>
				</div>
			</div>

			<TripFeatures tour={tour} />
		</React.Fragment>
	);
};

export default withRouter(TripDescription);
