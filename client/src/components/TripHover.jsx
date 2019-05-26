import React from 'react';
import { numberWithCommas } from './util';

const TripHover = (props) => {
	const { tripHoverData } = props;

	const tripHoverPosition = {
		top: tripHoverData.top,
		left: tripHoverData.left
	};

	const tripOverlaySize = {
		width: '48px',
		height: '48px'
	};

	return (
		<div
			className={'c-trip-hover-discount' + (props.showTripHover ? ' prop-is-visible' : '')}
			style={tripHoverPosition}
		>
			<div className="c-trip-hover-discount__cont">
				<div className="c-trip-hover-discount__background" />
				<div className="c-trip-hover-discount__wrapper">
					<div className="c-trip-hover-discount__left" style={tripOverlaySize} />
					<div className="c-trip-hover-discount__right">
						<div className="c-trip-hover-discount__right-background" />
						<div className="c-trip-hover-discount__right-wrapper">
							<div className="c-trip-hover-discount__right-top">
								<div className="c-trip-hover-discount__right-top-title">Last Minute Deal</div>
							</div>
							<div className="c-trip-hover-discount__right-bottom">
								<div className="c-trip-hover-discount__right-bottom-left">
									<div className="c-trip-hover-discount__right-bottom-left-label">WAS</div>
									<div className="c-trip-hover-discount__right-bottom-left-text">
										${numberWithCommas(tripHoverData.listPrice)}
									</div>
								</div>
								<div className="c-trip-hover-discount__right-bottom-right">
									<div className="c-trip-hover-discount__right-bottom-right-label">SAVE</div>
									<div className="c-trip-hover-discount__right-bottom-right-text">
										${numberWithCommas(tripHoverData.discountAmount)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TripHover;
