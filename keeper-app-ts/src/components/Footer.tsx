import React from 'react';

const year: number = new Date().getFullYear();

function Footer() {
	return (
		<footer>
			<p>© {year} Bhanuj Gandhi. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
