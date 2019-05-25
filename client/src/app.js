import React from 'react';
import Header from './components/header';
import Content from './components/content';
import Sidebar from './components/sidebar';

const App = () => {
	return (
		<div className="o-layout__wrap">
			<div className="o-layout">
				<div className="o-layout__row">
					<Sidebar />
					<div className="o-canvas">
						<div className="o-canvas__table">
							<Header />
							<Content />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
