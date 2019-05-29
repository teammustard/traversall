import React, { useState } from 'react';

const TripFeatures = ({ tour }) => {
	const [ showExpandedList, setShowExpandedList ] = useState(false);

	const handleArrowClick = () => {
		setShowExpandedList(true);
	};

	return (
		<div className="c-trip-what-you-get">
			<div className="c-trip-what-you-get__wrapper">
				<div className="c-trip-what-you-get__heading">WHAT YOU GET</div>
				<div className="c-trip-what-you-get__list">
					<div className="c-trip-what-you-get__item c-trip-what-you-get__item--accomodation">
						<div className="c-trip-what-you-get__item-brief">
							<div className="c-trip-what-you-get__icon-accommodation" />
							<div className="c-trip-what-you-get__title">{tour.duration} nights accommodation</div>
							<div className="c-trip-what-you-get__short-description">{tour.accommodation_summary}</div>
						</div>
					</div>

					<div className="c-trip-what-you-get__item c-trip-what-you-get__item--food">
						<div className="c-trip-what-you-get__item-brief">
							<div className="c-trip-what-you-get__icon-food" />
							<div className="c-trip-what-you-get__title">
								{tour.breakfast_included + tour.lunch_included + tour.dinner_included} included meals
							</div>
							<div className="c-trip-what-you-get__short-description">
								{tour.dinner_included > 0 ? `${tour.dinner_included} Dinner, ` : ''}
								{tour.lunch_included > 0 ? ` ${tour.lunch_included} Lunch, ` : ''}
								{tour.breakfast_included > 0 ? `${tour.breakfast_included} Breakfast` : ''}
							</div>
						</div>
					</div>

					<div className="c-trip-what-you-get__item c-trip-what-you-get__item--team">
						<div className="c-trip-what-you-get__item-brief">
							<div className="c-trip-what-you-get__icon-team" />
							<div className="c-trip-what-you-get__title">Team</div>
							<div className="c-trip-what-you-get__short-description">{tour.team_summary}</div>
						</div>
					</div>

					<div className="c-trip-what-you-get__item c-trip-what-you-get__item--transport">
						<div className="c-trip-what-you-get__item-brief">
							<div className="c-trip-what-you-get__icon-transport" />
							<div className="c-trip-what-you-get__title">Transport</div>
							<div className="c-trip-what-you-get__short-description">{tour.transport_summary}</div>
						</div>
					</div>

					<div className="c-trip-what-you-get__item c-trip-what-you-get__item--group">
						<div className="c-trip-what-you-get__item-brief">
							<div className="c-trip-what-you-get__icon-group" />
							<div className="c-trip-what-you-get__title">Your group</div>
							<div className="c-trip-what-you-get__short-description">
								Travel with other 18-35 year olds from around the world
							</div>
						</div>
					</div>

					<div className="c-trip-what-you-get__item c-trip-what-you-get__item--experiences">
						<div className="c-trip-what-you-get__item-brief">
							<div className="c-trip-what-you-get__icon-experiences" />
							<div className="c-trip-what-you-get__title">Experiences</div>
							<div className="c-trip-what-you-get__short-description">
								{tour.experiences_included} included, {tour.experiences_optional} optional that you can
								add
							</div>
						</div>
					</div>
				</div>

				<div className="c-trip-what-you-get__cta-wrapper">
					<span className="c-trip-what-you-get__expand-cta">
						<span className="c-trip-what-you-get__expand-cta-arrow" />
						Read more
					</span>
				</div>
			</div>
		</div>
	);
};

export default TripFeatures;
