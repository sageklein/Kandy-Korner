const remoteURL = "http://localhost:5002";

export default {
	// get(id) {
	// 	return fetch(`${remoteURL}/products/${id}`).then((result) =>
	// 		result.json()
	// 	);
	// },
	getAllProducts() {
		return fetch(`${remoteURL}/products`).then((result) => result.json());
	},
	getAllLocations() {
		return fetch(`${remoteURL}/locations`).then((result) => result.json());
	},
	// post(newProduct) {
	// 	return fetch(`${remoteURL}/products`, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(newProduct),
	// 	}).then((data) => data.json());
	// },
	getResource(resource) {
		return fetch(`${remoteURL}/${resource}`).then((res) => res.json());
	},
	getResourceById(resource, id) {
		return fetch(`${remoteURL}/${resource}/${id}`).then((res) => res.json());
	},
	getResourceByIdWithExpand(resource, id, related) {
		return fetch(
			`${remoteURL}/${resource}/${id}?_expand=${related}`
		).then((res) => res.json());
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
			`${remoteURL}/employees?username=${username}&password=${password}`
		).then((res) => res.json());
	},
	userByUsername(username) {
		return fetch(`${remoteURL}/employees?username=${username}`).then((res) =>
			res.json()
		);
	},
	getProductLocations(productId) {
		return fetch(
			`${remoteURL}/productLocations?productId=${productId}&_expand=location`
		).then((res) => res.json());
	},
	postResource(resource, newItem) {
		return fetch(`${remoteURL}/${resource}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		}).then((data) => data.json());
	},
	updateResource(resource, newItem) {
		return fetch(`${remoteURL}/${resource}/${newItem.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		}).then((data) => data.json());
	},
};