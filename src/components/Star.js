import React from "react";
import "./Star.css";

const Star = ({ star }) => {
	return (
		<>
			<div className="planet-details planet-star">
				{star.name && (
					<p className="star-system-name">
						<span>Star System</span> <span>{star.name}</span>
					</p>
				)}

				{star.numberOfPlanets && (
					<p>
						<span>Planets</span> <span>{star.numberOfPlanets}</span>
					</p>
				)}

				{star.distance && (
					<p>
						<span>Distance from Earth</span>{" "}
						<span>
							{star.distance} <span className="lowercase">light years</span>
						</span>
					</p>
				)}

				{star.temperature && (
					<p>
						<span>Temperature</span> <span>{star.temperature}</span>
					</p>
				)}

				{star.mass && (
					<p>
						<span>Mass</span> <span>{star.mass}</span>
					</p>
				)}

				{star.age && (
					<p>
						<span>Age</span>{" "}
						<span>
							{star.age} <span className="lowercase">million years</span>
						</span>
					</p>
				)}
				{star.radius && (
					<p>
						<span>Radius</span> <span>{star.radius}</span>
					</p>
				)}
			</div>
		</>
	);
};

export default Star;
