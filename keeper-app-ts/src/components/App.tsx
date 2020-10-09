import React, { useState } from 'react';
import Footer from './Footer';
import Note from './Note';
import Header from './Header';
import CreateArea from './CreateArea';

export interface Notes {
	title: string,
	content: string
}

const App: React.FC = (): JSX.Element => {
	const [ notes, setNotes ] = useState<Notes[]>([]);

	function addNote(newNote: Notes): void{
		setNotes((prevNotes): Notes[] => {
			return [ ...prevNotes, newNote ];
		});
	}

	function deleteNote(id: number) {
		setNotes((prevNotes: Notes[]): Notes[] => {
			return prevNotes.filter((noteItem: Notes, index?:number) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem: Notes, index: number) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
