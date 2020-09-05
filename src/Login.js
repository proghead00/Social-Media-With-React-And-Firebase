import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
	//dispatching; pulling info from data layer
	const [ state, dispatch ] = useStateValue();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					//pushing data into the data layer

					type: actionTypes.SET_USER,
					user: result.user
				});

				// console.log(result)
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__logo">
				<img
					className="logo1"
					src="https://serving.photos.photobox.com/61203057d9e6c95528bd1560e33d3a28f80dc67e4e26de3409a295b82f1d67e30e5fe766.jpg"
					alt=""
				/>

				<img
					className="logo2"
					src="https://serving.photos.photobox.com/049257451b9461c0fa18980126f4aa29a1c1850d4b008073d322e95c7ac58ba2a83d48c6.jpg"
					alt=""
				/>
			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
