import React from 'react';

const BookingDetails = () => {
	return (
		<div className="c-trip-detail-calendar-booking__details">
			<div className="c-trip-detail-calendar-booking__details-main">
				<div className="c-trip-detail-calendar-booking__details-item-main">
					<div className="c-trip-detail-calendar-booking__details-item-outer">
						<div className="c-trip-detail-calendar-booking__details-item-wrapper">
							<h4 className="c-trip-detail-calendar-booking-title-inner">EUROPEAN DISCOVERY</h4>
							<span className="c-trip-detail-calendar-booking-title-overview">
								<div>
									Only $200 deposit to book. <br />
								</div>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="c-trip-detail-calendar-booking__guarantees">
				<div className="c-trip-detail-calendar-booking__guarantees-wrapper">
					<div className="c-trip-detail-calendar-booking__guarantees-item" data-guarantee-type="freedom">
						<div className="c-trip-detail-calendar-booking__guarantees-item-wrapper">
							<div className="c-trip-detail-calendar-booking__guarantees-item-left">
								<div className="c-trip-detail-calendar-booking__guarantees-item-icon" />
							</div>
							<div className="c-trip-detail-calendar-booking__guarantees-item-right">
								<div className="c-trip-detail-calendar-booking__guarantees-item-right-title">
									FREEDOM GUARANTEE
								</div>
								<div className="c-trip-detail-calendar-booking__guarantees-item-right-body prop-header-body">
									Change travel dates of trip for FREE. <br /> More <span className="more-icon" />
								</div>
							</div>
						</div>
					</div>
					<div className="c-trip-detail-calendar-booking__guarantees-item">
						<div className="c-trip-detail-calendar-booking__guarantees-item-wrapper">
							<div className="c-trip-detail-calendar-booking__guarantees-item-left">
								<div className="c-trip-detail-calendar-booking__guarantees-item-icon" />
							</div>
							<div className="c-trip-detail-calendar-booking__guarantees-item-right">
								<div className="c-trip-detail-calendar-booking__guarantees-item-right-title">
									FLEX DEPOSIT
								</div>
								<div className="c-trip-detail-calendar-booking__guarantees-item-right-body prop-header-body">
									Can't travel? Save your deposit for later.<br />More <span className="more-icon" />
								</div>
							</div>
						</div>
					</div>
					<div className="c-trip-detail-calendar__uplift-finance uplift-is-loaded">
						<div className="uplift-logo">
							<img src="/up-lift-logo.svg" className="c-trip-cover__financing-logo" />
						</div>
						<div className="uplift-finance-message">
							<span>
								Financing available! Spread the cost of your trip over 12 months. Choose it on checkout.
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingDetails;
