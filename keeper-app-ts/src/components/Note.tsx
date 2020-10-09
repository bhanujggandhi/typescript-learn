import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


interface Props {
	title: string,
	content: string,
	onDelete: (id: number) => void,
	id: number
}

const Note = (props: Props): JSX.Element => {
	
	function handleClick(): void {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<h1>{props.title}</h1>
			<p>{props.content}</p>
			<button onClick={handleClick}><DeleteForeverIcon /></button>
		</div>
	);
};

export default Note;
