import React, { useState } from 'react';
import TripDetails from './TripDetails';
import ModalContainer from './ModalContainer';
import VideoContainer from './VideoContainer';
import { TourContext } from './tourContext';
import { useQuery } from 'react-apollo-hooks';
import { GET_TOUR_DETAILS } from '../graphql/queries';
import PhotoCarousel from './PhotoCarousel';
import TripDescription from './TripDescription';

const Content = (props) => {
	const tourId = props.match.params.tourId;
	const { data, error, loading } = useQuery(GET_TOUR_DETAILS, { variables: { id: tourId } });

	const [ showModal, setModal ] = useState(false);
	const handleShow = () => {
		setModal(true);
	};
	const handleHide = () => {
		setModal(false);
	};

	if (loading) {
		return <div>loading</div>;
	}
	if (error) {
		console.log(error.message);
		return <div>Got an error - Please ensure that you have entered a valid URL</div>;
	}

	return (
		<TourContext.Provider value={data.getTour}>
			<div className="o-content">
				<div className="o-content__table">
					<div className="o-content__wrapper">
						<div className="js-prevent-no-content">
							<div className="c-trip-detail js-main-content prop-is-affiliate">
								<div className="c-trip-detail-info">
									<TripDetails handleShow={handleShow} />
									<VideoContainer />
									<PhotoCarousel />
								</div>
								<TripDescription />
							</div>
						</div>
					</div>
				</div>
				<ModalContainer showModal={showModal} handleHide={handleHide} />
			</div>
		</TourContext.Provider>
	);
};

export default Content;
