import React, { useContext } from 'react';
import { RequestInfoFormContext } from './requestInfoFormHelpers';
import { TourContext } from './tourContext';
import moment from 'moment';
import { useQuery } from 'react-apollo-hooks';
import { GET_ALL_COUNTRIES } from '../graphql/queries';

const RequestInfoForm = () => {
	const { requestForm, dispatchRequestForm } = useContext(RequestInfoFormContext);
	const tour = useContext(TourContext);
	const handleFormSubmit = (e) => {
		e.preventDefault();
	};
	const handleFormChange = (name, value) => {
		dispatchRequestForm({ type: name, payload: value });
	};

	const tripSortedByDate = tour.trips.sort((a, b) => {
		return new Date(a.start_time) < new Date(b.start_time) ? -1 : 1;
	});

	const tripDatesList = tripSortedByDate.map((trip, i) => {
		const tripDate = moment(trip.start_time);
		const tripDateFormatted = tripDate.format('MM/DD/YYYY');

		return (
			<option key={i} value={tripDateFormatted}>
				{tripDateFormatted}
			</option>
		);
	});

	const { data, error, loading } = useQuery(GET_ALL_COUNTRIES);

	if (loading) {
		return <div>loading</div>;
	}
	if (error) {
		console.log(error.message);
		return <div>Got an error - Please ensure that you have entered a valid URL</div>;
	}

	const countries = data.getCountries;

	const countriesList = countries.map((country) => {
		return (
			<option key={country.country_code} value={country.country_code}>
				{country.full_name}
			</option>
		);
	});

	return (
		<div className="c-page-form__content">
			<div className="c-page-form__col">
				<div className="c-page-form__subtitle">We will contact you about {tour.name}</div>
				<div className="s-wffm-async-off">
					<form action="#" className="c-fab__form text-left" onSubmit={handleFormSubmit}>
						<fieldset className="c-form__title">
							<legend>When do you want to travel?</legend>
							<p>If you don't know your travel dates, simply mark "I don't know yet"</p>
							<div className="row">
								<div className="col-md-12">
									<div
										className={
											'c-form__select-dates form-group has-feedback first-field' +
											(requestForm.dontKnowDate ? ' disabled' : '')
										}
									>
										<select
											className="form-control prop-disabled-option"
											defaultValue={requestForm.departureDate}
											onChange={(e) => {
												handleFormChange('DEPARTURE_DATE', e.target.value);
											}}
											disabled={requestForm.dontKnowDate}
										>
											<option disabled="disabled" value="">
												Departure Date*
											</option>
											<option disabled="disabled" value="2019">
												2019 -----------------
											</option>
											{tripDatesList}
										</select>
									</div>
									<div className="form-group has-feedback">
										<div className="checkbox">
											<label>
												<input
													type="checkbox"
													checked={requestForm.dontKnowDate}
													onChange={(e) => {
														handleFormChange('DONT_KNOW_DATE', !requestForm.dontKnowDate);
													}}
												/>
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
										{requestForm.firstName === '' && (
											<label className="control-label">First name*</label>
										)}
										<input
											className="form-control text-box single-line"
											type="text"
											value={requestForm.firstName}
											onChange={(e) => {
												handleFormChange('FIRST_NAME', e.target.value);
											}}
										/>
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>

									<div className="required-field halfWidthRight form-group has-feedback">
										<input type="hidden" />
										{requestForm.lastName === '' && (
											<label className="control-label">Last name*</label>
										)}
										<input
											className=" form-control text-box single-line"
											type="text"
											value={requestForm.lastName}
											onChange={(e) => {
												handleFormChange('LAST_NAME', e.target.value);
											}}
										/>
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>

									<div className="c-form__country-phone form-group has-feedback c-form__field-tooltip country-drop-list-active has-success">
										<input type="hidden" />
										<label className="control-label animate">Phone</label>
										<input className="custom-phone-value" type="hidden" />
										<select
											data-type="mobile-country-drop-list"
											defaultValue={requestForm.country}
											style={{ width: '61px', paddingRight: '0' }}
											onChange={(e) => {
												handleFormChange('COUNTRY', e.target.value);
											}}
										>
											{countriesList}
										</select>

										<div className="custom-phone-flag form-flag" data-iso="us">
											{requestForm.country}
										</div>
										<input
											className="custom-phone-input"
											type="number"
											tabIndex="1"
											style={{ paddingLeft: '61px' }}
											value={requestForm.phoneNumber}
											onChange={(e) => {
												handleFormChange('PHONE_NUMBER', e.target.value);
											}}
										/>
										<span className="c-form__input-bar c-fab__input-bar no-animate" />
									</div>

									<div className="required-field  form-group has-feedback c-form__field-tooltip">
										<input type="hidden" />
										{requestForm.email === '' && <label className="control-label">Email*</label>}
										<input
											className=" form-control text-box single-line"
											type="email"
											tabIndex="1"
											value={requestForm.email}
											onChange={(e) => {
												handleFormChange('EMAIL', e.target.value);
											}}
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
													<input
														type="checkbox"
														value="I'd like to request a quote"
														checked={requestForm.requestQuote}
														onChange={(e) => {
															handleFormChange(
																'REQUEST_QUOTE',
																!requestForm.requestQuote
															);
														}}
													/>
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
														checked={requestForm.requestMoreInfo}
														onChange={(e) => {
															handleFormChange(
																'REQUEST_MORE_INFO',
																!requestForm.requestMoreInfo
															);
														}}
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
													<input
														type="checkbox"
														value="By email"
														checked={requestForm.contactByEmail}
														onChange={(e) => {
															handleFormChange(
																'CONTACT_BY_EMAIL',
																!requestForm.contactByEmail
															);
														}}
													/>
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>By email
												</label>
											</td>
											<td>
												<label>
													<input
														type="checkbox"
														value="By phone"
														checked={requestForm.contactByPhone}
														onChange={(e) => {
															handleFormChange(
																'CONTACT_BY_PHONE',
																!requestForm.contactByPhone
															);
														}}
													/>
													<span className="c-form__custom-checkbox">
														<span className="checkbox-ripple" />
													</span>By phone
												</label>
											</td>
											<td>
												<label>
													<input
														type="checkbox"
														value="By text"
														checked={requestForm.contactByText}
														onChange={(e) => {
															handleFormChange(
																'CONTACT_BY_TEXT',
																!requestForm.contactByText
															);
														}}
													/>
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
									<input
										type="checkbox"
										value="true"
										checked={requestForm.keepMeUpdated}
										onChange={(e) => {
											handleFormChange('KEEP_ME_UPDATED', !requestForm.keepMeUpdated);
										}}
									/>
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
								<a href="">Privacy Policy</a> <span>|</span> <a href="">Cookie Policy</a>
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
