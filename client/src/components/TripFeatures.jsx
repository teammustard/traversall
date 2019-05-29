import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const TripFeatures = ({ tour }) => {
	const [ showExpandedList, setShowExpandedList ] = useState(false);

	const handleShowMoreClick = () => {
		setShowExpandedList(true);
	};

	const handleShowLessClick = () => {
		setShowExpandedList(false);
	};

	return (
		<CSSTransition in={showExpandedList} timeout={400} classNames="expandable">
			<div className={'c-trip-what-you-get' + (showExpandedList ? ' prop-expanded' : '')}>
				<div className="c-trip-what-you-get__wrapper">
					<div className="c-trip-what-you-get__heading">WHAT YOU GET</div>
					<div className="c-trip-what-you-get__list">
						<div className="c-trip-what-you-get__item c-trip-what-you-get__item--accomodation">
							<div className="c-trip-what-you-get__item-brief">
								<div className="c-trip-what-you-get__icon-accommodation" />
								<div className="c-trip-what-you-get__title">{tour.duration} nights accommodation</div>
								<div className="c-trip-what-you-get__short-description">
									{tour.accommodation_summary}
								</div>
							</div>

							<div className="c-trip-what-you-get__large-description c-free-text-box">
								{tour.accommodation_detail}
							</div>
						</div>

						<div className="c-trip-what-you-get__item c-trip-what-you-get__item--food">
							<div className="c-trip-what-you-get__item-brief">
								<div className="c-trip-what-you-get__icon-food" />
								<div className="c-trip-what-you-get__title">
									{tour.breakfast_included + tour.lunch_included + tour.dinner_included} included
									meals
								</div>
								<div className="c-trip-what-you-get__short-description">
									{tour.dinner_included > 0 ? `${tour.dinner_included} Dinner, ` : ''}
									{tour.lunch_included > 0 ? ` ${tour.lunch_included} Lunch, ` : ''}
									{tour.breakfast_included > 0 ? `${tour.breakfast_included} Breakfast` : ''}
								</div>
							</div>

							<div className="c-trip-what-you-get__large-description c-free-text-box">
								{tour.meals_detail}
							</div>
						</div>

						<div className="c-trip-what-you-get__item c-trip-what-you-get__item--team">
							<div className="c-trip-what-you-get__item-brief">
								<div className="c-trip-what-you-get__icon-team" />
								<div className="c-trip-what-you-get__title">Team</div>
								<div className="c-trip-what-you-get__short-description">{tour.team_summary}</div>
							</div>

							<div className="c-trip-what-you-get__large-description c-free-text-box">
								{tour.team_detail}
							</div>
						</div>

						<div className="c-trip-what-you-get__item c-trip-what-you-get__item--transport">
							<div className="c-trip-what-you-get__item-brief">
								<div className="c-trip-what-you-get__icon-transport" />
								<div className="c-trip-what-you-get__title">Transport</div>
								<div className="c-trip-what-you-get__short-description">{tour.transport_summary}</div>
							</div>

							<div className="c-trip-what-you-get__large-description c-free-text-box">
								{tour.transport_detail}
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

							<div className="c-trip-what-you-get__large-description c-free-text-box">
								Our trips are exclusively 18-35. This means you'll be travelling with people just like
								you, from all over the world- laughter and friendships always guaranteed.
							</div>
						</div>

						<div className="c-trip-what-you-get__item c-trip-what-you-get__item--experiences">
							<div className="c-trip-what-you-get__item-brief">
								<div className="c-trip-what-you-get__icon-experiences" />
								<div className="c-trip-what-you-get__title">Experiences</div>
								<div className="c-trip-what-you-get__short-description">
									{tour.experiences_included} included, {tour.experiences_optional} optional that you
									can add
								</div>
							</div>

							<div className="c-trip-what-you-get__large-description c-free-text-box">
								{tour.experiences_detail}
							</div>
						</div>
					</div>

					<div className="c-trip-what-you-get__cta-wrapper">
						<span className="c-trip-what-you-get__expand-cta" onClick={handleShowMoreClick}>
							<span className="c-trip-what-you-get__expand-cta-arrow" />
							Read more
						</span>
						<span className="c-trip-what-you-get__colapsse-cta" onClick={handleShowLessClick}>
							Read less
						</span>
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export default TripFeatures;
