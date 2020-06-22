import React, { useState } from "react";
import APIManager from "../modules/APIManager"


const Login = (props) => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const handleFieldChange = (evt) => {
		const credentialsToChange = { ...credentials };
		credentialsToChange[evt.target.id] = evt.target.value;
		setCredentials(credentialsToChange);
	};

	const handleLogin = () => {
		const username = credentials.username;
		const password = credentials.password;
		if (username === "" || password === "") {
			alert("Please complete both login fields");
		} else {
			APIManager.userByUsernameAndPassword(username, password).then((res) => {
				if (res.length > 0) {
					sessionStorage.setItem("userId", res[0].id);
					props.setIsAuthenticated(true);
					props.history.push("/products");
				} else {
					alert("There was a problem logging in. Please try again");
				}
			});
		}
	};
	return (
		<>
			<div className="center">
				<h1>Log In </h1>
				<form>
					<fieldset>
						<label htmlFor="username">username</label>
						<input
							id="username"
							name="username"
							type="text"
							onChange={handleFieldChange}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="password">password</label>
						<input
							id="password"
							name="password"
							type="password"
							onChange={handleFieldChange}
						/>
					</fieldset>
				</form>
				<button onClick={handleLogin}>Log In</button>
			</div>
		</>
	);
};

export default Login;