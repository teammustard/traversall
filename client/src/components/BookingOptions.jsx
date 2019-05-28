import React, { useState, useContext } from 'react';
import moment from 'moment';
import { TourContext } from './tourContext';

const BookingOptions = (props) => {
	const [ selectedOption, setSelectedOption ] = useState(0);
	const { selectedTrip } = props;
	const tour = useContext(TourContext);

	const tripEnd = moment(selectedTrip.end_time);
	tripEnd.add(tour.duration, 'days');

	const handleClickOption = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className="c-trip-detail-calendar-booking__options">
			<h4 className="c-trip-detail-calendar-booking-title">Your Options</h4>
			<div className="c-trip-detail-calendar-booking__options-item">
				<div className="c-trip-detail-calendar-booking__options-item-header-outer">
					<span className="c-trip-detail-calendar-booking__options-item-icon-location" />
					<div className="c-trip-detail-calendar-booking__options-item-header">
						<h4>Ends on</h4>
						<p>Pick your end location</p>
					</div>
				</div>
				<div className="c-trip-detail-calendar-booking__options-item-wrapper-elements">
					<div className="c-trip-detail-calendar-booking__options-item-outer">
						<div
							className={
								'c-trip-detail-calendar-booking__options-item-inner c-trip-detail-calendar-booking__options-item-inner-end' +
								(selectedOption === 0
									? ' c-trip-detail-calendar-booking__options-item-inner-selected'
									: '')
							}
							onClick={() => {
								handleClickOption(0);
							}}
						>
							<div className="c-trip-detail-calendar-booking__options-item-inner-p">
								<p>{tour.starting_loc}</p>
								<p>AT {tripEnd.format('hh:mm A')}</p>
								<p className="day">
									{tripEnd.format('dddd')} {tripEnd.format('do')}
								</p>
							</div>
							<div className="c-trip-detail-calendar-booking__options-icon-wrapper">
								<div className="c-trip-detail-calendar-booking__options-item-inner-icon" />
							</div>
						</div>
					</div>

					<div className="c-trip-detail-calendar-booking__options-item-outer">
						<div
							className={
								'c-trip-detail-calendar-booking__options-item-inner c-trip-detail-calendar-booking__options-item-inner-end' +
								(selectedOption === 1
									? ' c-trip-detail-calendar-booking__options-item-inner-selected'
									: '')
							}
							onClick={() => {
								handleClickOption(1);
							}}
						>
							<div className="c-trip-detail-calendar-booking__options-item-inner-p">
								<p>{tour.ending_loc}</p>
								<p>AT {tripEnd.format('hh:mm A')}</p>
								<p className="day">
									{tripEnd.format('dddd')} {tripEnd.format('do')}
								</p>
							</div>
							<div className="c-trip-detail-calendar-booking__options-icon-wrapper">
								<div className="c-trip-detail-calendar-booking__options-item-inner-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookingOptions;
