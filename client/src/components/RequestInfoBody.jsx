import React from 'react';
import RequestInfoHeader from './RequestInfoHeader';
import RequestInfoForm from './RequestInfoForm';

const RequestInfoBody = () => {
	return (
		<div className="o-layout__wrap prop-without-header">
			<div className="o-layout">
				<div className="o-layout__row">
					<div className="o-canvas">
						<div className="o-canvas__table">
							<div className="o-content">
								<div className="o-content__table">
									<div className="o-content__wrapper">
										<div className="js-prevent-no-content">
											<div className="c-page-form c-page-form-gaq">
												<div className="c-page-form__title c-page-form__first-title">
													Request More Info
												</div>
												<RequestInfoHeader />
												<RequestInfoForm />
											</div>
										</div>
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

export default RequestInfoBody;
