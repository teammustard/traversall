import React from 'react';
// import Header from './components/Header';
import Content from './components/Content';
// import Sidebar from './components/Sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<Switch>
			<Route exact path="/" render={() => <Redirect to="/tours/1" />} />
			<Route path="/tours/:tourId" component={Content} />
		</Switch>
	);
};

export default App;
