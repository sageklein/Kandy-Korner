import React from "react";

function LocationCard(props) {
	const location = props.Location;

	return (
		<div className="card vert">
			<h2>{location.name}</h2>
			<h3>{location.address}</h3>
			<h3>{location.phone}</h3>
		</div>
	);
}

export default LocationCard;
