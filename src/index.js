import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import KandyKorner from "./modules/KandyKorner"

ReactDOM.render(
	<Router>
		<KandyKorner />
	</Router>,
	document.getElementById("root")
);
