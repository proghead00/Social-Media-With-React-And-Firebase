import React from 'react';

function Widgets() {
	return (
		<div className="widgets">
			<iframe
				src="https://open.spotify.com/embed/playlist/1EtpOzSuCXq0m15xZfWAie"
				width="310"
				height="1500"
				frameborder="0"
				allowtransparency="true"
				allow="encrypted-media"
				height="100%"
				style={{ border: ' none ', overflow: 'hidden' }}
			/>

			{/* <iframe
				width="340"
				height="400"
				src="https://www.youtube.com/embed/videoseries?list=PL5acbh0uU7dlVki__4rWw5Xh9oK56ULMG"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/> */}

			{/* <iframe
				width="340"
				height="400"
				src="https://www.youtube.com/embed/l7TxwBhtTUY"
				frameborder="0"
				allow="accelerometer; 
            autoplay; encrypted-media; 
            gyroscope; picture-in-picture"
				allowfullscreen
				style={{ border: ' none ', overflow: 'hidden' }}
			/>
			<iframe
				width="340"
				height="400"
				src="https://www.youtube.com/embed/o9Phw-cJqBQ"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				style={{ border: ' none ', overflow: 'hidden' }}
			/> */}
		</div>
	);
}

export default Widgets;
