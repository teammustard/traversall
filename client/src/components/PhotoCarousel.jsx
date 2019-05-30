import React from 'react';

const PhotoCarousel = (props) => {
	const generatePhotos = () => {
		const photos = [];
		const randomPhoto = 'https://loremflickr.com/213/215/travel?random=';

		for (let i = 5; i--; ) {
			photos.push(
				<li
					key={i}
					className="c-trip-detail-olapic-item grid-item c-trip-detail-olapic-box c-olapic-trigger-item-js"
					style={{ backgroundImage: `url(${randomPhoto}${i})` }}
				/>
			);
		}

		return photos;
	};
	return (
		<div className="c-trip-detail-info-bottom media-carousel prop-has-ugc-images">
			<div className="c-trip-detail-ugccarousel__cover">
				<div className="c-trip-detail-info__title-body-info-images">
					<div className="c-trip-detail-info__title-body-info-images-wrapper">
						<div className="c-trip-detail-info__olapic-wrapper">
							<div className="olapic-widget-content-wrapper">
								<ul className="c-trip-detail-olapic-wall-widget">
									<li className="c-trip-detail-olapic-item grid-item c-trip-detail-olapic-box c-olapic-trigger-item-js">
										<div className="c-trip-detail-olapic-cta-wrapper">
											<div className="c-trip-detail-olapic-hashtag">
												<span className="c-trip-detail-olapic-hashtag-icon" />
												<span className="c-trip-detail-olapic-hashtag-text">
													#{props.hashtag}
												</span>
												<div className="c-trip-detail-olapic-description">
													Through the eyes of our travellers
												</div>
											</div>
										</div>
									</li>
									{generatePhotos()}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoCarousel;
