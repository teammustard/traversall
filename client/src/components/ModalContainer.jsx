import Modal from 'react-bootstrap/Modal';
import React from 'react';
import BookingBody from './BookingBody';

const ModalContainer = (props) => {
	const { showModal, handleHide } = props;

	return (
		<Modal
			show={showModal}
			onHide={handleHide}
			dialogClassName="c-modal"
			aria-labelledby="example-custom-modal-styling-title"
		>
			<div className="c-modal__layer" />
			<div className="c-modal__outer" style={{ top: 0 }}>
				<div className="c-modal__inner">
					<div className="c-modal__header-wrapper">
						<div className="c-modal__header-cell">
							<div className="c-modal__header">
								<span className="c-modal__header-close" onClick={handleHide} />
								<span className="c-modal__header-title">TRAVEL STYLE</span>
							</div>
						</div>
					</div>

					<div className="c-modal__body-wrapper">
						<div className="c-modal__body">
							<div className="c-modal__body-content-wrapper">
								<div className="c-modal__body-content">
									<BookingBody />
								</div>
							</div>
						</div>
					</div>
					<div className="c-modal__footer-wrapper">
						<div className="c-modal__footer" />
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default ModalContainer;
