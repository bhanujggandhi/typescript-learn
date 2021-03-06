import React from 'react';
import Modal from 'react-modal';

interface IProps {
	selectedOption?: string,
	handleOkay: () => void
}

const OptionModal = (props: IProps): JSX.Element => (
	<Modal
		isOpen={!!props.selectedOption}
		contentLabel="Selected Option"
		onRequestClose={props.handleOkay}
		ariaHideApp={false}
		closeTimeoutMS={200}
		className="modal"
	>
		<h3 className="modal__title">Selected Option</h3>
		{props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
		<button className="button" onClick={props.handleOkay}>Okay</button>
	</Modal>
);

export default OptionModal;
