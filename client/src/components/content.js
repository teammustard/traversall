import React from 'react';
import TripDetails from './tripdetails';

const Content = () => {
	return (
		<div className="o-content">
			<div className="o-content__table">
				<div className="o-content__wrapper">
					<div className="js-prevent-no-content">
						<div className="c-trip-detail js-main-content prop-is-affiliate">
							<TripDetails />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Content;
