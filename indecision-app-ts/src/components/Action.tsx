import React from 'react';

interface IProps {
	handlePick: () => void,
	hasOptions: boolean
}

const Action = (props: IProps): JSX.Element => (
	<div>
		<button className="big-button" onClick={props.handlePick} disabled={!props.hasOptions}>
			What should I do?
		</button>
	</div>
);

export default Action;
