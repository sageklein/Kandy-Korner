import React, { useState } from "react";

const Login = (props) => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const handleFieldChange = (evt) => {
		const stateToChange = { ...credentials };
		stateToChange[evt.target.id] = evt.target.value;
		setCredentials(stateToChange);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		sessionStorage.setItem("credentials", JSON.stringify(credentials));
		props.history.push("/products");
	};

	return (
		<form onSubmit={handleLogin}>
			<fieldset>
				<h3>Please Sign In!</h3>
				<div className="loginForm">
					<input
						onChange={handleFieldChange}
						type="username"
						id="username"
						placeholder="Username"
						required=""
						autoFocus=""
					/>
					<label htmlFor="inputUsername">Username</label>

					<input
						onChange={handleFieldChange}
						type="password"
						id="password"
						placeholder="Password"
						required=""
					/>
					<label htmlFor="inputPassword">Password</label>
				</div>
				<button className="loginButton" type="submit">Sign In</button>
			</fieldset>
		</form>
	);
};

export default Login;
