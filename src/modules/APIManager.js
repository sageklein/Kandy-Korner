const remoteURL = "http://localhost:5002";

export default {
	get(id) {
		return fetch(`${remoteURL}/products/${id}`).then((result) =>
			result.json()
		);
	},
	getAll() {
		return fetch(`${remoteURL}/products`).then((result) => result.json());
	},
	getAllLocations() {
		return fetch(`${remoteURL}/locations`).then((result) => result.json());
	},
	post(newProduct) {
		return fetch(`${remoteURL}/products`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		}).then((data) => data.json());
	},
	getUserData(id) {
		return fetch(`${remoteURL}/employees/${id}`).then((result) =>
			result.json()
		);
	},
	getAllUsers() {
		return fetch(`${remoteURL}/employees`).then((result) => result.json());
	},
	userByUsernameAndPassword(username, password) {
		return fetch(
			`${remoteURL}employees?username=${username}&password=${password}`
		).then((res) => res.json());
	},
	userByEmail(email) {
		return fetch(`${remoteURL}employees?email=${email}`).then((res) =>
			res.json()
		);
	},
};
