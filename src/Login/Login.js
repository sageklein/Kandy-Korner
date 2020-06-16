import React, { useState } from "react";
import APIManager from "../ApplicationViews"

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

  const handleLogin = () => {
		const user = credentials.username;
		const pass = credentials.password;
		if (user === "" || pass === "") {
			alert("Please enter Name and Password");
		} else {
			APIManager.userByUsernameAndPassword(user, pass).then((res) => {
				if (res.length > 0) {
					sessionStorage.setItem("userId", res[0].id);
					props.setIsAuthenticated(true);
					props.history.push("/products");
				} else {
					alert("Please try again");
				}
			});
		}
  };
	return (
		<form onSubmit={handleLogin}>
			<fieldset>
				<h3>Sign In</h3>
				<div className="loginForm">
					<label htmlFor="inputUsername">Username: </label>
					<input
						onChange={handleFieldChange}
						type="username"
						id="username"
						placeholder="Username"
						required=""
						autoFocus=""
					/>

					<label htmlFor="inputPassword"> Password: </label>
					<input
						onChange={handleFieldChange}
						type="password"
						id="password"
						placeholder="Password"
						required=""
					/>
				</div>
				<button className="loginButton" type="submit">Sign In</button>
			</fieldset>
		</form>
	);
};

export default Login;
