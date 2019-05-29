import React, { useContext } from 'react';
import { TourContext } from './tourContext';
import { numberWithCommas, getDiscountedPrice, getMonthlyPayment } from './util';

const TripDetails = (props) => {
	const tour = useContext(TourContext);

	return (
		<React.Fragment>
			<div className="c-trip-detail-info-top__left">
				<h1>{tour.name}</h1>
			</div>
			<div className="c-trip-detail-info-top__right prop-has-discount prop-has-uplift">
				<div className="c-trip-detail-info-top__right-info-col prop-name-countries">
					<div className="c-trip-detail-info-top__right-label">COUNTRIES</div>
					<div className="c-trip-detail-info-top__right-value prop-value-countries">
						{tour.countries.length}
					</div>
				</div>
				<div className="c-trip-detail-info-top__right-info-col prop-name-duration">
					<div className="c-trip-detail-info-top__right-label">DAYS</div>
					<div className="c-trip-detail-info-top__right-value prop-value-duration">{tour.duration}</div>
				</div>
				<div className="c-trip-detail-info-top__right-info-col prop-name-price prop-discounted">
					<div className="c-trip-detail-info-top__right-label">WAS</div>
					<div className="c-trip-detail-info-top__right-value prop-value-price">
						${numberWithCommas(tour.listed_price)}
					</div>
				</div>
				<div className="c-trip-detail-info-top__right-info-col prop-name-discount">
					<div className="c-trip-detail-info-top__right-label">NOW FROM</div>
					<div className="c-trip-detail-info-top__right-value prop-value-discount">
						${numberWithCommas(getDiscountedPrice(tour))}
					</div>
				</div>
				<div className="c-trip-detail-info-top__right-info-col prop-name-uplift prop-listen-change-attr">
					<div className="c-trip-detail-info-top__right-label">FINANCING FROM</div>
					<div className="c-trip-detail-info-top__right-value prop-value-uplift">
						<span className="c-trip-cover__financing-amount">
							${numberWithCommas(getMonthlyPayment(tour.listed_price))}
							<span className="c-trip-cover__financing-text uplift-more-info">/mo</span>
						</span>
					</div>
				</div>
			</div>
			<div className="c-trip-detail-info-middle__left">
				<div className="c-trip-detail-info__style c-trip-detail-info__value-prop-modal-btn link-modal-iframe">
					Discoverer
				</div>
				<div className="c-trip-detail-info__reviews">
					<div className="c-trip-detail-info__rating">
						<div className="c-trip-detail-info__rating_1 is-active" />
						<div className="c-trip-detail-info__rating_2 is-active" />
						<div className="c-trip-detail-info__rating_3 is-active" />
						<div className="c-trip-detail-info__rating_4 is-active" />
						<div className="c-trip-detail-info__rating_5 is-active" />
					</div>
					<div className="c-trip-detail-info__rating-overall">4.7</div>
					<div className="c-trip-detail-info__rating-number-reviews">441 reviews</div>
				</div>
			</div>
			<div className="c-trip-detail-info-middle__right area-up-lift">
				<div className="c-trip-detail-info-middle__area-buttons">
					<span
						className="soleil-cta-button-pink c-trip-detail-info-middle__calendar-btn prop-has-uplift"
						onClick={props.handleShow}
					>
						BOOK TRIP
					</span>
					<span className="soleil-cta-button-black get-a-quote__request-more-info link-modal-iframe">
						REQUEST MORE INFO
					</span>
				</div>
				<div className="c-trip-detail-info-middle__down">
					<div className="c-trip-detail-cover__financing">
						<span className="c-trip-detail-cover__financing-entry uplift-is-loaded" />
					</div>
				</div>
				<div className="c-trip-detail-info-middle__right-trip-statement">
					<div className="flexi-payment-text__with-icon">
						<span style={{ fontSize: '13px' }}>Save your space with only $200 deposit</span>
					</div>
					<div className="zip-money-text" />
				</div>
			</div>
		</React.Fragment>
	);
};

export default TripDetails;
