import { Route, Redirect } from "react-router-dom";
import React from "react";
import ProductList from "./Product/ProductList";
import ProductForm from "./Product/ProductForm";
import ProductDetails from "./Product/ProductDetails";
import EmployeeList from "./Employee/EmployeeList";
import EmployeeDetails from "./Employee/EmployeeDetails"
import LocationList from "./Location/LocationList";
import Register from "./Login/Register"
import Login from "./Login/Login"


const ApplicationViews = (props) => {
	const setIsAuthenticated = props.setIsAuthenticated;
	const isAuthenticated = props.isAuthenticated;
	const userIsSupervisor = props.userIsSupervisor;

	return (
		<>
			<Route
				path="/login"
				render={(props) => {
					return (
						<Login
							setIsAuthenticated={setIsAuthenticated}
							{...props}
						/>
					);
				}}
			/>
			<Route
				path="/register"
				render={(props) => {
					return (
						<Register
							setIsAuthenticated={setIsAuthenticated}
							{...props}
						/>
					);
				}}
			/>

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
				render={(props) =>
					isAuthenticated ? (
						<EmployeeList {...props} />
					) : (
						props.history.push("/login")
					)
				}
			/>
			<Route
				path="/employees/:employeeId(\d+)"
				render={(props) =>
					isAuthenticated ? (
						<EmployeeDetails
							userIsSupervisor={userIsSupervisor}
							employeeId={parseInt(props.match.params.employeeId)}
							{...props}
						/>
					) : (
						props.history.push("/login")
					)
				}
			/>

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
		</>
	);
};

export default ApplicationViews;
