import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import ApplicationViews from "../ApplicationViews";
import APIManager from "./APIManager";

function KandyKorner() {
	const checkisAuthenticated = () =>
		sessionStorage.getItem("userId") !== null;
	const [isAuthenticated, setIsAuthenticated] = useState(
		checkisAuthenticated()
	);

	const [user, setUser] = useState({
		id: 0,
		username: "",
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		address: "",
		phone: "",
		locationId: 0,
		isSupervisor: false,
	});

	const clearUserData = () => {
		setUser({
			id: 0,
			username: "",
			email: "",
			password: "",
			firstName: "",
			lastName: "",
			address: "",
			phone: "",
			locationId: 0,
			isSupervisor: false,
		});
	};

	useEffect(() => {
		checkisAuthenticated();
	}, []);

	useEffect(() => {
		const getUserData = () => {
			const userId = sessionStorage.getItem("userId");
			if (!userId) {
				clearUserData();
				return;
			}
			return APIManager.getResourceById("employees", userId).then(
				(user) => {
					setUser(user);
					return user;
				}
			);
		};
		getUserData();
	}, [isAuthenticated]);

	return (
		<>
			<NavBar
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
			/>
			<ApplicationViews
				isAuthenticated={isAuthenticated}
				setIsAuthenticated={setIsAuthenticated}
				userIsSupervisor={user.isSupervisor}
			/>
		</>
	);
}
export default KandyKorner;
