import React, { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import APIManager from "../modules/APIManager";

const EmployeeList = () => {
	const [employees, setEmployees] = useState([]);

	const getEmployees = () => {
		return APIManager.getAllUsers().then((employeesFromAPI) => {
			setEmployees(employeesFromAPI);
		});
	};
	const deleteEmployee = (id) => {
		APIManager.delete(id).then(() =>
			APIManager.getAllUsers().then(setEmployees)
		);
	};

	useEffect(() => {
		getEmployees();
	}, []);

	return (
		<div className="employeeKardWrapper">
			{employees.map((employee) => (
				<EmployeeCard
					key={employee.id}
					employee={employee}
					deleteEmployee={deleteEmployee}
				/>
			))}
		</div>
	);
};

export default EmployeeList;
