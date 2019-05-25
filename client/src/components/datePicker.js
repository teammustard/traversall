import React from 'react';
import Calendar from './calendar';

const DatePicker = () => {
	return (
		<div className="c-trip-detail-calendar-booking__calendar-outer">
			<div
				id="c-trip-detail-calendar-booking__calendar-from"
				className="datepicker c-trip-detail-calendar-booking__calendar js-filter-item hasDatepicker"
			>
				<div
					className="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2"
					style={{ display: 'block', width: '100%', height: '454px' }}
				>
					<div className="ui-datepicker-group ui-datepicker-group-first">
						<div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left">
							<div className="ui-datepicker-title">
								<span className="ui-datepicker-month">May </span>
								<span className="ui-datepicker-year">2019</span>
							</div>
						</div>
						<a className="ui-datepicker-prev ui-corner-all ui-state-disabled">
							<span className="ui-icon ui-icon-circle-triangle-w" />
						</a>
						<Calendar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DatePicker;
