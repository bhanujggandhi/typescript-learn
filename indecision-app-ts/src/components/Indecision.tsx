import React, { Component } from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOptions from './AddOption';
import OptionModal from './OptionModal';


interface IState {
	option: string[],
	selectedOption?: string
}

class Indecision extends Component {
	state: IState = {
		option: [],
		selectedOption: undefined
	};

	componentDidMount(): void {
		try {
			const json : string | null= localStorage.getItem('options');
			const option: Array<string> = JSON.parse(json!);
			if (option) {
				this.setState(() => ({ option }));
			}
		} catch (error) {
			//do nothing
		}
	}

	componentDidUpdate(prevProps: any, prevState: IState) {
		if (prevState.option.length !== this.state.option.length) {
			const json = JSON.stringify(this.state.option);
			localStorage.setItem('options', json);
		}
	}

	handlePick = (): void => {
		let randomNum: number = Math.floor(Math.random() * this.state.option.length);
		const ranOption: string = this.state.option[randomNum];
		this.setState(() => ({
			selectedOption: ranOption
		}));
	};

	handleRemoveOption = (optionToRemove: string) => {
		this.setState((prevValue: IState) => ({
			option: prevValue.option.filter((option) => optionToRemove !== option)
		}));
	};

	handleDeleteOption = (): void => {
		this.setState(() => ({ option: [] }));
	};

	handleAddOption = (option: string) => {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.option.indexOf(option) > -1) {
			return 'This option already exists';
		}
		this.setState((prevValue: IState) => ({ option: [...prevValue.option, option] }));
	};

	handleOkay = (): void => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	};

	render(): JSX.Element {
		const subtitle: string = 'Put your life in the hands of computer.';
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
