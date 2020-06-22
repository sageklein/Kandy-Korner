import React, { useState, useEffect } from "react";
import APIManager from "../modules/APIManager";

const Register = (props) => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
		email: "",
		firstName: "",
		lastName: "",
		address: "",
		phone: "",
		locationId: 0,
		isSupervisor: false,
		img: "0.png",
	});

	const [locations, setLocations] = useState([]);

	const handleInput = (evt) => {
		const credentialsToChange = { ...credentials };
		credentialsToChange[evt.target.id] = evt.target.value;
		setCredentials(credentialsToChange);
	};

	const handleRegister = () => {
		if (
			credentials.username === "" ||
			credentials.password === "" ||
			credentials.firstName === "" ||
			credentials.lastName === "" ||
			credentials.address === "" ||
			credentials.phone === "" ||
			credentials.locationId === ""
		) {
			alert("Please complete all fields");
		} else {
			APIManager.userByUsername(credentials.username).then((res) => {
				if (res.length === 0) {
					APIManager.postResource("employees", credentials).then(
						(emp) => {
							sessionStorage.setItem("userId", emp.id);
							props.setIsAuthenticated(true);
							props.history.push("/products");
						}
					);
				} else {
					alert(
						"A user with that email already exists"
					);
				}
			});
		}
	};

	useEffect(() => {
		APIManager.getAllLocations("locations").then((res) => setLocations(res));
	}, []);

	return (
		<>
			<div className="center">
				<h1>Register</h1>
				<form>
					<fieldset>
						<label htmlFor="username">username</label>
						<input
							id="username"
							name="username"
							type="text"
							onChange={handleInput}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="password">password</label>
						<input
							id="password"
							name="password"
							type="password"
							onChange={handleInput}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="firstName">first name</label>
						<input
							id="firstName"
							name="firstName"
							type="text"
							onChange={handleInput}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="lastName">last name</label>
						<input
							id="lastName"
							name="lastName"
							type="text"
							onChange={handleInput}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="phone">phone</label>
						<input
							id="phone"
							name="phone"
							type="text"
							onChange={handleInput}
						/>
					</fieldset>
					<fieldset>
						<label htmlFor="address">address</label>
						<input
							id="address"
							name="address"
							type="text"
							onChange={handleInput}
						/>
					</fieldset>
					<fieldset>
						<select id="locationId" onChange={handleInput}>
							{locations.map((location) => (
								<option key={location.id} value={location.id}>
									{location.name}
								</option>
							))}
						</select>
					</fieldset>
				</form>
				<button onClick={handleRegister}>Register</button>
			</div>
		</>
	);
};

export default Register;
