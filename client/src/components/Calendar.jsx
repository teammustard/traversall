import React, { useContext } from 'react';
import { TourContext } from './tourContext';
import { numberWithCommas } from './util';

const Calendar = (props) => {
	const tour = useContext(TourContext);

	const weekdays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
	const headerRow = weekdays.map((day) => {
		return (
			<th scope="col" key={day}>
				<span title={day}>{day.substring(0, 2)}</span>
			</th>
		);
	});

	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const daysInMonth = (month, year) => {
		return 32 - new Date(year, month, 32).getDate();
	};

	const priceIndicator = (trip) => {
		const discountedPrice = Math.round(tour.listed_price * ((100 - trip.discount) / 100));

		return (
			<p className={'c-trip-detail-calendar-booking__calendar-span-p' + (trip.discount > 0 ? ' pRed' : '')}>
				${numberWithCommas(discountedPrice)}
			</p>
		);
	};

	const { setTripHover, setTripHoverData, setBookingMessage, setSelectedTrip } = props;
	const handleTripHover = (trip, col, row) => {
		const topOffset = 105 + 53 * row;
		let leftOffset;
		if (props.position === 0) {
			leftOffset = 53 + 48 * col;
		} else {
			leftOffset = 430 + 48 * col;
		}
		const listPrice = tour.listed_price;
		const discountAmount = listPrice - Math.round(listPrice * ((100 - trip.discount) / 100));
		if (trip.discount > 0) {
			setTripHover(true);
			setTripHoverData({
				top: `${topOffset}px`,
				left: `${leftOffset}px`,
				listPrice,
				discountAmount
			});
		}
	};

	const handleTripUnhover = () => {
		setTripHover(false);
	};

	const handleTripClick = (trip) => {
		setSelectedTrip(trip);
		setBookingMessage(true);
	};

	const generateCalendar = (month, year) => {
		const firstDay = new Date(year, month).getDay() - 1;
		const calendarRows = [];

		let date = 1;
		for (let row = 0; row < 6; row++) {
			let currentRow = [];

			for (let col = 0; col < 7; col++) {
				const calendarDate = new Date(year, month, date);

				const tripForThisDate = tour.trips.filter((trip) => {
					const tripDate = new Date(trip.start_time);
					return tripDate.toDateString() === calendarDate.toDateString();
				})[0];

				if (row === 0 && col < firstDay) {
					currentRow.push(
						<td
							key={row + ' ' + col}
							className="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled"
						/>
					);
				} else if (date > daysInMonth(month, year)) {
					break;
				} else if (tripForThisDate && calendarDate >= currentDate) {
					currentRow.push(
						<td
							key={row + ' ' + col}
							className={'depart definite' + (tripForThisDate.discount > 0 ? ' has_discount' : '')}
							onMouseEnter={() => {
								handleTripHover(tripForThisDate, col, row);
							}}
							onMouseLeave={handleTripUnhover}
							onClick={() => {
								handleTripClick(tripForThisDate);
							}}
						>
							<div className="c-trip-detail-calendar-booking__calendar-span" />
							<a href="#" className="ui-state-default">
								{date}
							</a>
							{priceIndicator(tripForThisDate)}
						</td>
					);
					date++;
				} else {
					currentRow.push(
						<td
							key={row + ' ' + col}
							className="ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined"
						>
							<span className="ui-state-default">{date}</span>
						</td>
					);
					date++;
				}
			}
			calendarRows.push(<tr key={calendarRows.length}>{currentRow}</tr>);
		}

		return calendarRows;
	};

	return (
		<div
			className={
				'ui-datepicker-group ' +
				(props.position === 0 ? 'ui-datepicker-group-first' : 'ui-datepicker-group-last')
			}
		>
			<div className="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-left">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{months[currentDate.getMonth() + props.position]} </span>
					<span className="ui-datepicker-year">{currentDate.getFullYear()}</span>
				</div>
			</div>
			{props.position === 0 && (
				<a className="ui-datepicker-prev ui-corner-all ui-state-disabled">
					<span className="ui-icon ui-icon-circle-triangle-w" />
				</a>
			)}
			<table className="ui-datepicker-calendar" style={{ opacity: '1' }}>
				<thead>
					<tr>{headerRow}</tr>
				</thead>
				<tbody>
					{generateCalendar(currentDate.getMonth() + props.position + 1, currentDate.getFullYear())}
				</tbody>
			</table>
			{props.position === 1 && (
				<a className="ui-datepicker-next ui-corner-all">
					<span className="ui-icon ui-icon-circle-triangle-e" />
				</a>
			)}
		</div>
	);
};

export default Calendar;
