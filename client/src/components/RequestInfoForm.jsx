import React from 'react';

const RequestInfoForm = () => {
	return (
		<div className="c-page-form__content">
			<div className="c-page-form__col">
				<div className="c-page-form__subtitle">We will contact you about European Discovery</div>
				<div className="s-wffm-async-off">
					<form action="#" className="c-fab__form text-left">
						<fieldset className="c-form__title">
							<legend>When do you want to travel?</legend>
							<p>If you don't know your travel dates, simply mark "I don't know yet"</p>
							<div className="row">
								<div className="col-md-12">
									<div className="c-form__select-dates form-group has-feedback first-field">
										<select className="form-control prop-disabled-option" defaultValue="">
											<option disabled="disabled" value="">
												Departure Date*
											</option>
											<option disabled="disabled" value="2019">
												2019 -----------------
											</option>
											<option value="07/06/2019">07/06/2019</option>
										</select>
									</div>
									<div className="form-group has-feedback">
										<div className="checkbox">
											<label htmlFor="WHAT">
												<input type="checkbox" />
												<span className="c-form__custom-checkbox">
													<span className="checkbox-ripple" />
												</span>
												<input type="hidden" />
												I don't know yet
											</label>
										</div>
									</div>
								</div>
							</div>
						</fieldset>

						<fieldset>
							<legend>Your details</legend>
							<div className="row">
								<div className="col-md-12">
									<div className="required-field halfWidthLeft form-group has-feedback">
										<input type="hidden" />
										<label className="control-label">First name*</label>
										<input className="form-control text-box single-line" type="text" />
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>

									<div className="required-field halfWidthRight form-group has-feedback">
										<input type="hidden" />
										<label className="control-label">Last name*</label>
										<input className=" form-control text-box single-line" type="text" />
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>

									<div className="c-form__country-phone form-group has-feedback c-form__field-tooltip country-drop-list-active has-success">
										<input type="hidden" />
										<label className="control-label animate">Phone</label>
										<input className="custom-phone-value" type="hidden" />
										<select
											data-type="mobile-country-drop-list"
											tabIndex="1"
											defaultValue="Australia"
											style={{ width: '61px', paddingRight: '0' }}
										>
											<option value="Australia">Australia (+61)</option>
											<option value="Australia2">Australia2 (+61)</option>
										</select>

										<div className="custom-phone-flag form-flag" data-iso="us">
											+1
										</div>
										<input
											className="custom-phone-input"
											type="number"
											tabIndex="1"
											style={{ paddingLeft: '61px' }}
										/>
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>

									<div className="required-field  form-group has-feedback c-form__field-tooltip">
										<input type="hidden" />
										<label className="control-label">Email*</label>
										<input
											className=" form-control text-box single-line"
											type="email"
											tabIndex="1"
										/>
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>
								</div>
							</div>
						</fieldset>

						<div className="required-field custom-checkbox-list c-form__multi-checkbox-vertical form-group has-feedback has-success">
							<input type="hidden" />
							<label className="control-label">What can a travel specialist help you with?*</label>
							<div className="custom-checkbox-list c-form__multi-checkbox-vertical checkbox">
								<table>
									<tbody>
										<tr>
											<td>
												<label>
													<input type="checkbox" value="I'd like to request a quote" />
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>I'd like to request a quote
												</label>
											</td>
										</tr>
										<tr>
											<td>
												<label>
													<input
														type="checkbox"
														value="I'd like more information from a travel specialist"
													/>
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>I'd like more information from a travel specialist
												</label>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="custom-checkbox-list c-form__multi-checkbox contact form-group has-feedback has-success">
							<input type="hidden" />
							<label className="control-label">How would you like us to contact you?</label>
							<div className="custom-checkbox-list c-form__multi-checkbox contact checkbox">
								<table>
									<tbody>
										<tr>
											<td>
												<label>
													<input type="checkbox" value="By email" />
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>By email
												</label>
											</td>
											<td>
												<label>
													<input type="checkbox" value="By phone" />
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>By phone
												</label>
											</td>
											<td>
												<label>
													<input type="checkbox" value="By text" />
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>By text
												</label>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>

						<div className="form-group has-feedback has-success">
							<input type="hidden" />
							<div className="checkbox">
								<label>
									<input type="checkbox" value="true" />
									<span className="c-form__custom-checkbox">
										<span className="checkbox-ripple" />
									</span>
									<input type="hidden" value="false" />Keep me updated on the latest Contiki news,
									deals and latest trips
								</label>
							</div>
						</div>

						<div className="form-submit-border c-form__button-wrap-flex">
							<input className="btn  btn-default c-fab__btn" type="submit" />
							<div className="c-form__policy-links" style={{ display: 'block' }}>
								<a href="#">Privacy Policy</a> <span>|</span> <a href="#">Cookie Policy</a>
							</div>
						</div>
					</form>

					<div className="c-form__compliant-notice">
						<span>
							Please note that unless you have requested to stay updated, the information you've provided
							here will be used for this request only.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestInfoForm;
