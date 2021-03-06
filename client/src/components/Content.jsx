import React, { useState, useReducer } from 'react';
import TripDetails from './TripDetails';
import ModalContainer from './ModalContainer';
import VideoContainer from './VideoContainer';
import { TourContext } from './tourContext';
import { RequestInfoFormContext, defaultRequestForm, requestFormReducer } from './requestInfoFormHelpers';
import { useQuery } from 'react-apollo-hooks';
import { GET_TOUR_DETAILS } from '../graphql/queries';
import PhotoCarousel from './PhotoCarousel';
import TripDescription from './TripDescription';

const Content = (props) => {
	const tourId = props.match.params.tourId;
	const { data, error, loading } = useQuery(GET_TOUR_DETAILS, { variables: { id: tourId } });

	const [ showModal, setModal ] = useState(false);
	const [ modalContent, setModalContent ] = useState('booking');

	const [ requestForm, dispatchRequestForm ] = useReducer(requestFormReducer, defaultRequestForm);

	const handleShow = (modalName) => {
		setModalContent(modalName);
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
			<div className="c-trip-detail-info">
				<TripDetails handleShow={handleShow} />
				<VideoContainer />
				<PhotoCarousel hashtag={data.getTour.hashtag} />
			</div>
			<TripDescription />

			<RequestInfoFormContext.Provider value={{ requestForm, dispatchRequestForm }}>
				<ModalContainer showModal={showModal} handleHide={handleHide} modalContent={modalContent} />
			</RequestInfoFormContext.Provider>
		</TourContext.Provider>
	);
};

export default Content;
