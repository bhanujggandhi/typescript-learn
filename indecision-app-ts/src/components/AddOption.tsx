import React, { Component } from 'react'

interface IState {
	error?: string
}

interface IProps {
	handleAddOption: (option: string) => string | undefined
}

class AddOption extends Component<IProps, IState> {
	state: IState = {
		error: undefined
	}
	handleAddOption = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const target: any = event.target;
		const value: string = target.elements.option.value;
		const newValue: string = value.trim();
		const error = this.props.handleAddOption(newValue);
		this.setState(() => ({ error }));
		if (!error) {
			target.elements.option.value = '';
		}
	};
	render(): JSX.Element {
		return (
			<div>
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option" />
					<button className="button">Add Option</button>
				</form>
			</div>
		);
	}
}

export default AddOption;
