import React, { useState } from 'react';
import TripDetails from './tripdetails';
import ModalContainer from './modal';

const Content = () => {
	const [ showModal, setModal ] = useState(false);
	const handleShow = () => {
		setModal(true);
	};
	const handleHide = () => {
		setModal(false);
	};

	return (
		<div className="o-content">
			<div className="o-content__table">
				<div className="o-content__wrapper">
					<div className="js-prevent-no-content">
						<div className="c-trip-detail js-main-content prop-is-affiliate">
							<TripDetails handleShow={handleShow} />
						</div>
					</div>
				</div>
			</div>
			<ModalContainer showModal={showModal} handleHide={handleHide} />
		</div>
	);
};

export default Content;
