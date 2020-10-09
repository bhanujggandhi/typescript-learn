import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOption';
import OptionModal from './OptionModal';
// import { render } from '@testing-library/react';

class Indecision extends Component {
	state = {
		option: [],
		selectedOption: undefined
	};
	componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const option = JSON.parse(json);
			if (option) {
				this.setState(() => ({ option }));
			}
		} catch (error) {
			//do nothing
		}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.option.length !== this.state.option.length) {
			const json = JSON.stringify(this.state.option);
			localStorage.setItem('options', json);
		}
	}
	handlePick = () => {
		let randomNum = Math.floor(Math.random() * this.state.option.length);
		const ranOption = this.state.option[randomNum];
		this.setState(() => ({
			selectedOption: ranOption
		}));
	};
	handleRemoveOption = (optionToRemove) => {
		this.setState((prevValue) => ({
			option: prevValue.option.filter((option) => optionToRemove !== option)
		}));
	};
	handleDeleteOption = () => {
		this.setState(() => ({ option: [] }));
	};
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.option.indexOf(option) > -1) {
			return 'This option already exists';
		}
		this.setState((prevValue) => ({ option: [ ...prevValue.option, option ] }));
	};
	handleOkay = () => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	};
	render() {
		const subtitle = 'Put your life in the hands of computer.';
		return (
			<div className="App">
				<Header subtitle={subtitle} />
				<div className="container">
					<Action handlePick={this.handlePick} hasOptions={this.state.option.length > 0} />
					<div className="widget">
						<Options
							options={this.state.option}
							handleRemoveOption={this.handleRemoveOption}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOptions handleAddOption={this.handleAddOption} />
					</div>
				</div>
				<OptionModal selectedOption={this.state.selectedOption} handleOkay={this.handleOkay} />
			</div>
		);
	}
}

export default Indecision;
