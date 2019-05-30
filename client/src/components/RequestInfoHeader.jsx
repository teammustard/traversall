import React, { useContext } from 'react';
import { TourContext } from './tourContext';
import { numberWithCommas, getDiscountedPrice } from './util';

const RequestInfoHeader = () => {
	const tour = useContext(TourContext);
	const randomImageLink = 'https://picsum.photos/157/157';

	return (
		<div className="trip-cover-m theme-dark image-position-above display-style1 hide-promo-false">
			<a href="#" className="trip-cover-m-link prop-close-iframe-modal" />
			<div className="trip-cover-raq-content">
				<div className="trip-cover-raq-left" style={{ backgroundImage: `url(${randomImageLink})` }} />
				<div className="trip-cover-raq-right">
					<div className="trip-cover-raq-top-right">
						<a href="#" className="trip-cover-m-tour-name prop-close-iframe-modal">
							{tour.name}
						</a>
					</div>
					<div className="trip-cover-raq-bottom-right">
						<div className="country-days__part">
							<div className="trip-cover-m-item-info item-countries">
								<div className="trip-cover-m-item-info-title">COUNTRIES</div>
								<div className="trip-cover-m-item-info-value">{tour.countries.length}</div>
							</div>

							<div className="trip-cover-m-item-info item-days">
								<div className="trip-cover-m-item-info-title">DAYS</div>
								<div className="trip-cover-m-item-info-value">{tour.duration}</div>
							</div>
						</div>

						<div className="original-discount-price__part">
							<div className="trip-cover-m-item-info item-was-from__left item-fromtrip-cover-m-old-price">
								<div className="trip-cover-m-item-info-title">WAS</div>
								<div
									className="trip-cover-m-item-info-value"
									style={{ textDecoration: 'line-through' }}
								>
									${numberWithCommas(tour.listed_price)}
								</div>
							</div>
							<div className="trip-cover-m-item-info item-from trip-cover-m-discount">
								<div className="trip-cover-m-item-info-title">FROM</div>
								<div className="trip-cover-m-item-info-value">
									<span className="value-cont">${numberWithCommas(getDiscountedPrice(tour))}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestInfoHeader;
