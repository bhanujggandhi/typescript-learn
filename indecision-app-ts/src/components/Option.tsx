import React from 'react';

interface IProps {
	count: number,
	optionText: string,
	handleRemoveOption: (optionToRemove: string) => void
}

const Option = (props: IProps): JSX.Element => (
	<div className="option">
	<p className="option__text">{props.count}. {props.optionText}</p>
		<button className = "button button--link"
			onClick={() => {
				props.handleRemoveOption(props.optionText);
			}}
		>
			Remove
		</button>
	</div>
);

export default Option;
