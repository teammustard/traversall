import React from 'react';

export const RequestInfoFormContext = React.createContext();

export const defaultRequestForm = {
	departureDate: '',
	dontKnowDate: false,
	firstName: '',
	lastName: '',
	country: '',
	phoneNumber: '',
	email: '',
	requestQuote: false,
	requestMoreInfo: false,
	contactByEmail: false,
	contactByPhone: false,
	contactByText: false,
	keepMeUpdated: false
};

export const requestFormReducer = (state, action) => {
	switch (action.type) {
		case 'DEPARTURE_DATE':
			return { ...state, departureDate: action.payload };
		case 'DONT_KNOW_DATE':
			return { ...state, dontKnowDate: action.payload };
		case 'FIRST_NAME':
			return { ...state, firstName: action.payload };
		case 'LAST_NAME':
			return { ...state, lastName: action.payload };
		case 'COUNTRY':
			return { ...state, country: action.payload };
		case 'PHONE_NUMBER':
			return { ...state, phoneNumber: action.payload };
		case 'EMAIL':
			return { ...state, email: action.payload };
		case 'REQUEST_QUOTE':
			return { ...state, requestQuote: action.payload };
		case 'REQUEST_MORE_INFO':
			return { ...state, requestMoreInfo: action.payload };
		case 'CONTACT_BY_EMAIL':
			return { ...state, contactByEmail: action.payload };
		case 'CONTACT_BY_PHONE':
			return { ...state, contactByPhone: action.payload };
		case 'CONTACT_BY_TEXT':
			return { ...state, contactByText: action.payload };
		case 'KEEP_ME_UPDATED':
			return { ...state, keepMeUpdated: action.payload };

		default:
			return state;
	}
};
