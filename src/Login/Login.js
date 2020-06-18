import React, { useState } from "react";
import APIManager from "../modules/APIManager"

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
		const username = credentials.username;
		const password = credentials.password;
		if (username === "" || password === "") {
			alert("Please enter Name and Password");
		} else {
			APIManager.userByUsernameAndPassword(username, password).then((res) => {
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
		<>
			<div className="center">
				<h1>Log In</h1>
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