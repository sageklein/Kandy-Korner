import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ApplicationViews from "./ApplicationViews"

ReactDOM.render(
	<Router>
		<NavBar/>
		<ApplicationViews />
	</Router>,
	document.getElementById("root")
);
