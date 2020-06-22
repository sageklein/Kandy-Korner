import React, { useState, useEffect } from "react";
import APIManager from "../modules/APIManager";
import LocationCard from "./LocationCard";

function LocationList(props) {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		APIManager.getResource("locations").then(setLocations);
	}, []);

	return (
		<>
			<header>
				<h1>Locations</h1>
			</header>
			<div className="locationKardWrapper">
				{locations.map((location) => (
					<LocationCard
						key={location.id}
						Location={location}
						{...props}
					/>
				))}
			</div>
		</>
	);
}

export default LocationList;
