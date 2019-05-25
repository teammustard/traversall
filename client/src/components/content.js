import React, { useState } from 'react';
import TripDetails from './tripDetails';
import ModalContainer from './modalContainer';

const Content = (props) => {
	const tourId = props.match.params.tourId;
	const NumberContext = React.createContext();

	const [ showModal, setModal ] = useState(false);
	const handleShow = () => {
		setModal(true);
	};
	const handleHide = () => {
		setModal(false);
	};

	return (
		<NumberContext.Provider value={tourId}>
			<div className="o-content">
				<div className="o-content__table">
					<div className="o-content__wrapper">
						<div className="js-prevent-no-content">
							<div className="c-trip-detail js-main-content prop-is-affiliate">
								<TripDetails handleShow={handleShow} tourId={tourId} />
							</div>
						</div>
					</div>
				</div>
				<ModalContainer showModal={showModal} handleHide={handleHide} />
			</div>
		</NumberContext.Provider>
	);
};

export default Content;
