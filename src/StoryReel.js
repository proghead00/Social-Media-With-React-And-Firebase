import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://images.unsplash.com/photo-1598929213197-a0042191f4ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
				profilesSrc="https://serving.photos.photobox.com/4089119911de48887add1332edd7192b1a9856c6eb5a7f5bcab5e53c267f0474e9b77f36.jpg"
				title="Susnata"
			/>

			<Story
				image="https://images.unsplash.com/photo-1599206614622-d7dae04bb031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80"
				profilesSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				title="Alena "
			/>

			<Story
				image="https://images.unsplash.com/photo-1599168637454-f2944229c953?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80"
				profilesSrc="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
				title="Raymond "
			/>

			<Story
				image=" https://images.unsplash.com/photo-1599164735242-5cb1a1a8b9bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
				profilesSrc="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=344&q=80"
				title="Alex "
			/>

			<Story
				image="https://images.unsplash.com/photo-1599194996655-3e32b094cbcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80"
				profilesSrc="https://images.unsplash.com/photo-1500336624523-d727130c3328?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
				title="Gal "
			/>
		</div>
	);
}

export default StoryReel;
