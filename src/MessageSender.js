import React, { useState } from 'react';
import './MessageSender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
	const [ { user }, dispatch ] = useStateValue();

	const [ input, setInput ] = useState('');
	const [ ImageUrl, setImageUrl ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault(); //preventing for a refresh

		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: ImageUrl
		});

		// DB stuff

		//resetting them
		setInput('');
		setImageUrl('');
	};

	return (
		<div className="messageSender">
			<div className="messageSender__top ">
				<Avatar src={user.photoURL} />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="messageSender__input"
						placeholder={`What's popping, ${user.displayName} ?`}
					/>

					<input
						className="imgholder"
						value={ImageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
						placeholder={'Image URL (optional)'}
					/>

					<button onClick={handleSubmit} type="submit">
						Hidden Submit
					</button>
				</form>
			</div>

			<div className="messageSender__bottom ">
				<div className="messageSender__option">
					<VideocamIcon style={{ color: 'red' }} />
					<h3>Live Video</h3>
				</div>

				<div className="messageSender__option">
					<PhotoLibraryIcon style={{ color: '#27ae60' }} />
					<h3>Photo/Video</h3>
				</div>

				<div className="messageSender__option">
					<InsertEmoticonIcon style={{ color: 'orange' }} />
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
