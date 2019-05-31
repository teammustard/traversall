import React, { useState } from 'react';
import Select from 'react-select';
import { GET_ALL_TOURS } from '../graphql/queries';
import { useQuery } from 'react-apollo-hooks';
import { withRouter } from 'react-router-dom';

const SearchBar = (props) => {
	const { data, error, loading } = useQuery(GET_ALL_TOURS);
	const [ searchValue, setSearchValue ] = useState('');

	const handleSearchChange = ({ value }) => {
		setSearchValue(value);
		props.history.push('/tours/' + value);
	};
	const handleInputChange = (value) => {
		setSearchValue(value);
	};

	const customStyles = {
		container: (provided) => ({
			...provided,
			paddingLeft: 45,
			paddingRight: 16
		}),
		control: (provided) => ({
			...provided,
			border: 0,
			backgroundColor: 'none',
			boxShadow: 'none'
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: '#e5e4e6'
		})
	};

	if (loading) {
		return <div>loading</div>;
	}
	if (error) {
		console.log(error.message);
		return <div>Got an error - Please ensure that you have entered a valid URL</div>;
	}

	const options = data.getTours;

	return (
		<div className="c-search__input-wrap">
			<span className="c-search__btn" />
			<Select
				styles={customStyles}
				value={searchValue}
				onChange={(value) => {
					handleSearchChange(value);
				}}
				onInputChange={(value) => {
					handleInputChange(value);
				}}
				options={options}
				placeholder="Where would you like to go?"
			/>
		</div>
	);
};

export default withRouter(SearchBar);
