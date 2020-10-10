import React from 'react';

interface IProps {
	title: string,
	subtitle: string
}

const Header = (props: IProps): JSX.Element => (
	<div className="header">
		<div className="container">
			<h1 className="header__title">{props.title}</h1>
			{props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
		</div>
	</div>
);

Header.defaultProps = {
	title: 'Indecision'
};

export default Header;
