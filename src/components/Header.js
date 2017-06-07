import React from 'react';

import '../styles/Header.css';

const Header = (props) => {
	return (
		<div className={`header ${props.className}`}>
			{props.children}
		</div>
	);
}

export default Header;
