import React from 'react';
import DatePicker from './datePicker';

const CalendarBody = () => {
	return (
		<div className="c-trip-detail-calendar prop-has-dicount prop-currency-dollar">
			<div className="c-trip-detail-calendar__outer">
				<div className="c-trip-detail-calendar-booking">
					<div className="c-trip-detail-calendar-booking-outer">
						<div className="c-trip-detail-calendar-booking-inner">
							<div className="c-trip-detail-calendar-booking__body-top-text">
								<div className="c-trip-detail-calendar-booking__body-title">
									<span className="c-trip-detail-calendar-booking-step">step 1</span>
									<h4 className="c-trip-detail-calendar-booking-title">CHOOSE DEPARTURE DATE</h4>
									<div className="c-trip-detail-top-notification-box">
										<p className="c-trip-detail-calendar-booking-notice" />
										<p>
											Can't find the date you are looking for? Check out the Winter version of
											this trip
										</p>
										<br />
										<p />
									</div>
								</div>

								<div className="c-trip-detail-calendar-booking-title-outer">
									<div className="c-trip-detail-calendar-booking__body-top-icons">
										<span className="c-trip-detail-calendar-booking__body-top-icons-calendar c-trip-detail-calendar-booking__body-top-icons-selected" />
										<span className="c-trip-detail-calendar-booking__body-top-icons-list" />
									</div>

									<div className="c-trip-detail-calendar-booking__calendar-icons clearfix">
										<div className="c-trip-detail-calendar-booking__calendar-icons-outer">
											<div className="c-trip-detail-calendar-booking__calendar-icons-ph">
												<span className="c-trip-detail-calendar-booking__calendar-icons-da  prop-currency-dollar" />
												Deals Available
											</div>
										</div>
										<div className="c-trip-detail-calendar-booking__calendar-icons-outer">
											<div className="c-trip-detail-calendar-booking__calendar-icons-ph fr">
												<span className="c-trip-detail-calendar-booking__calendar-icons-af" />
												Almost Full
											</div>
										</div>
										<div className="c-trip-detail-calendar-booking__calendar-icons-outer">
											<div className="c-trip-detail-calendar-booking__calendar-icons-ph fr">
												<span className="c-trip-detail-calendar-booking__calendar-icons-dd" />
												Definite Departure
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="c-trip-detail-calendar-booking__body">
								<div className="c-trip-detail-calendar-booking__calendar-wrapper">
									<DatePicker />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalendarBody;
