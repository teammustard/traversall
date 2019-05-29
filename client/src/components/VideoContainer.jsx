import React from 'react';
const VideoContainer = () => {
	return (
		<div className="c-trip-detail-info__main-image-cont">
			<div className="mbt-video- mbt-video-overlay- mbt-video-text-false mbt-player-ready">
				<div className="mbt-video-container mbt-video-" style={{ maxHeight: '650px' }}>
					<iframe
						src="https://www.youtube.com/embed/hT6cSxtYv0M"
						width="100%"
						height="430px"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					/>
				</div>
			</div>
		</div>
	);
};

export default VideoContainer;
