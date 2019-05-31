import React from 'react';
import ReactDOM from 'react-dom';

const SearchBarContainer = ({ children }) => {
	return ReactDOM.createPortal(children, document.getElementById('searchBar'));
};

export default SearchBarContainer;
