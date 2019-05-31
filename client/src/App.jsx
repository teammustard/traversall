import React from 'react';
import Content from './components/Content';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchBarContainer from './components/SearchBarContainer';
import SearchBar from './components/SearchBar';

const App = () => {
	return (
		<React.Fragment>
			<SearchBarContainer>
				<SearchBar />
			</SearchBarContainer>
			<Switch>
				<Route exact path="/" render={() => <Redirect to="/tours/1" />} />
				<Route path="/tours/:tourId" component={Content} />
			</Switch>
		</React.Fragment>
	);
};

export default App;
