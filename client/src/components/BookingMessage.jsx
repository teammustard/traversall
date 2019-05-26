import React, { useContext } from 'react';
import moment from 'moment';
import { TourContext } from './tourContext';

const BookingMessage = (props) => {
	const tour = useContext(TourContext);
	const tripEnd = moment(props.selectedTrip.start_time);
	tripEnd.add(tour.duration, 'days');

	return (
		<div className="c-trip-detail-calendar-main-messages c-trip-detail-calendar-messages">
			<div className="c-trip-detail-calendar-booking__calendar-warning c-trip-detail-calendar-booking__calendar-warning-mobile">
				<p>This trip is a definite departure.</p>
			</div>
			<div className="c-trip-detail-calendar-booking__calendar-messages-outer">
				<p className="c-trip-detail-calendar-booking__calendar-messages" />
			</div>
			<div className="c-trip-detail-calendar-booking__calendar-ending-outer">
				<div className="c-trip-detail-calendar-booking__calendar-ending">
					<p>
						This trip ends on the {tripEnd.format('Do')} of {tripEnd.format('MMMM')}
					</p>
				</div>
			</div>
		</div>
	);
};

export default BookingMessage;
