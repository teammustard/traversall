import React from 'react';
import Calendar from './Calendar';

const DatePicker = (props) => {
	return (
		<div className="c-trip-detail-calendar-booking__calendar-outer">
			<div
				id="c-trip-detail-calendar-booking__calendar-from"
				className="datepicker c-trip-detail-calendar-booking__calendar js-filter-item hasDatepicker"
			>
				<div
					className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2"
					style={{ display: 'block', width: '100%' }}
				>
					<Calendar
						position={0}
						setTripHover={props.setTripHover}
						setTripHoverData={props.setTripHoverData}
						setBookingMessage={props.setBookingMessage}
						setSelectedTrip={props.setSelectedTrip}
					/>
					<Calendar
						position={1}
						setTripHover={props.setTripHover}
						setTripHoverData={props.setTripHoverData}
						setBookingMessage={props.setBookingMessage}
						setSelectedTrip={props.setSelectedTrip}
					/>
					<div className="ui-datepicker-row-break" />
				</div>
			</div>
		</div>
	);
};

export default DatePicker;
