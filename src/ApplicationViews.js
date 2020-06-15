import { Route, Redirect } from "react-router-dom";
import React from "react";
import ProductList from "./Product/ProductList";
import ProductForm from "./Product/ProductForm";
import ProductDetails from "./Product/ProductDetails";
import EmployeeList from "./Employee/EmployeeList";
import LocationList from "./Location/LocationList";
import Login from "./Login/Login";

const ApplicationViews = () => {
	const isAuthenticated = () =>
		sessionStorage.getItem("credentials") !== null;
	return (
		<React.Fragment>
			<Route path="/login" component={Login} />

			<Route
				exact
				path="/products"
				render={(props) => {
					if (isAuthenticated()) {
						return <ProductList {...props} />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			<Route
				path="/products/new"
				render={(props) => {
					return <ProductForm {...props} />;
				}}
			/>
			<Route
				path="/products/:productId(\d+)"
				render={(props) => {
					return (
						<ProductDetails
							productId={parseInt(props.match.params.productId)}
						/>
					);
				}}
			/>

			<Route
				exact
				path="/employees"
				render={(props) => {
					if (isAuthenticated()) {
						return <EmployeeList />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
			{/* <Route
				path="/employees/:employeeId(\d+)"
				render={(props) => {
					return (
						<EmployeeDetails
							employeeId={parseInt(props.match.params.employeeId)}
						/>
					);
				}}
			/> */}

			<Route
				exact
				path="/locations"
				render={(props) => {
					if (isAuthenticated()) {
						return <LocationList />;
					} else {
						return <Redirect to="/login" />;
					}
				}}
			/>
		</React.Fragment>
	);
};

export default ApplicationViews;
