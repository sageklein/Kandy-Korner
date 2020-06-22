
import React from "react";

function EmployeeCard(props) {
	const employee = props.employee;
	return (
		<div className="card vert">
			<div>
				<img
					// src={`/images/employees/${employee.img}`}
					alt={`${employee.firstName} ${employee.lastName}`}
				/>
			</div>
			<h2>
				{employee.firstName} {employee.lastName}
			</h2>
			<button
				onClick={() => props.history.push(`/employees/${employee.id}`)}
			>
				details
			</button>
		</div>
	);
}

export default EmployeeCard;
