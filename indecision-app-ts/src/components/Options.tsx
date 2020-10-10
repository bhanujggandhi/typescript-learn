import React from 'react';
import Option from './Option';

interface IProps {
	handleDeleteOption: () => void,
	handleRemoveOption: (optionToRemove: string) => void,
	options: string[]
}

const Options = (props: IProps): JSX.Element => (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__title">Your Options</h3>
			<button className="button button--link" onClick={props.handleDeleteOption}>Remove All</button>
		</div>
		{props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
		{props.options.map((option, index) => {
			return <Option key={index} optionText={option} handleRemoveOption={props.handleRemoveOption} count={index+1} />;
		})}
	</div>
);

export default Options;