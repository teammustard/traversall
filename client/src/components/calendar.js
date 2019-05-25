import React from 'react';

const Calendar = () => {
	const weekdays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
	const headerRow = weekdays.map((day) => {
		return (
			<th scope="col" key={day}>
				<span title={day}>{day.substring(0, 2)}</span>
			</th>
		);
	});

	const daysInMonth = (month, year) => {
		return 32 - new Date(year, month, 32).getDate();
	};

	const generateCalendar = (month, year) => {
		const firstDay = new Date(year, month).getDay();
		const calendarRows = [];

		let date = 1;
		for (let row = 0; row < 6; row++) {
			let currentRow = [];

			for (let col = 0; col < 7; col++) {
				if (row === 0 && col < firstDay) {
					currentRow.push(
						<td className="ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled" />
					);
				} else if (date > daysInMonth(month, year)) {
					break;
				} else {
					currentRow.push(
						<td className="ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled undefined">
							<span className="ui-state-default">{date}</span>
						</td>
					);
					date++;
				}
			}
			calendarRows.push(<tr>{currentRow}</tr>);
		}

		return calendarRows;
	};

	return (
		<table className="ui-datepicker-calendar" style={{ opacity: '1' }}>
			<thead>
				<tr>{headerRow}</tr>
			</thead>
			<tbody>{generateCalendar(5, 2019)}</tbody>
		</table>
	);
};

export default Calendar;
