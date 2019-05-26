import React from 'react';

const Header = () => {
	return (
		<header className="o-header">
			<div className="o-header__wrapper">
				<div className="o-header__search">
					<div className="c-search__input-wrap">
						<form action="" id="search-form">
							<span className="c-search__btn" />
							<input type="text" className="c-search__input" placeholder="go away" />
						</form>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
