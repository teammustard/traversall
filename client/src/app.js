import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<div className="o-layout__wrap">
			<div className="o-layout">
				<div className="o-layout__row">
					<Sidebar />
					<div className="o-canvas">
						<div className="o-canvas__table">
							<Header />
							<Switch>
								<Route exact path="/" render={() => <Redirect to="/tours/1" />} />
								<Route path="/tours/:tourId" component={Content} />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
