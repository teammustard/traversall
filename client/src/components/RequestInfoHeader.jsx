import React from 'react';

const RequestInfoHeader = () => {
	return (
		<div className="trip-cover-m theme-dark image-position-above display-style1 hide-promo-false">
			<a href="#" className="trip-cover-m-link prop-close-iframe-modal" />
			<div className="trip-cover-raq-content">
				<div className="trip-cover-raq-left">BACKGROUND HERE</div>
				<div className="trip-cover-raq-right">
					<div className="trip-cover-raq-top-right">
						<a href="#" className="trip-cover-m-tour-name prop-close-iframe-modal">
							European Discovery
						</a>
					</div>
					<div className="trip-cover-raq-bottom-right">
						<div className="country-days__part">
							<div className="trip-cover-m-item-info item-countries">
								<div className="trip-cover-m-item-info-title">COUNTRIES</div>
								<div className="trip-cover-m-item-info-value">9</div>
							</div>

							<div className="trip-cover-m-item-info item-days">
								<div className="trip-cover-m-item-info-title">DAYS</div>
								<div className="trip-cover-m-item-info-value">13</div>
							</div>
						</div>

						<div className="original-discount-price__part">
							<div className="trip-cover-m-item-info item-was-from__left item-fromtrip-cover-m-old-price">
								<div className="trip-cover-m-item-info-title">WAS</div>
								<div
									className="trip-cover-m-item-info-value"
									style={{ textDecoration: 'line-through' }}
								>
									$3,125
								</div>
							</div>
							<div className="trip-cover-m-item-info item-from trip-cover-m-discount">
								<div className="trip-cover-m-item-info-title">FROM</div>
								<div className="trip-cover-m-item-info-value">
									<span className="value-cont">$2,500</span>
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
