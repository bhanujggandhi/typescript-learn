import React from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

function Header(): JSX.Element {
	return (
		<header>
			<h1>
				<EmojiObjectsOutlinedIcon fontSize = "large"/>
				Keeper
			</h1>
		</header>
	);
}

export default Header;
