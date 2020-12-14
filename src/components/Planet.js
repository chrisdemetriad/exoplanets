import React from "react";
import "./Planet.css";

const Planet = ({ planets }) => {
	return (
		<>
			{planets.map(({ name, radius, age, temperature, mass, discoveryMethod, description, discoveryDate }, index) => {
				return (
					<div className="planet-details" key={index}>
						{name && (
							<p className="name">
								<span>Planet {index + 1}</span> <span>{name}</span>
							</p>
						)}

						<div className="flex">
							<div>
								{radius && (
									<p>
										<span>Radius: {radius}</span>
									</p>
								)}
								{age && (
									<p>
										<span>Age: {age}</span>
									</p>
								)}
								{temperature && (
									<p>
										<span>Temperature: {temperature}</span>
									</p>
								)}

								{mass && (
									<p>
										<span>Mass: {mass}</span>
									</p>
								)}
								{discoveryMethod && (
									<p>
										<span>Discovery method: {discoveryMethod}</span>
									</p>
								)}

								{discoveryDate && (
									<p>
										<span>Discovery date: {discoveryDate}</span>
									</p>
								)}
							</div>
							<div>
								{description && (
									<p>
										<span>Description: {description}</span>
									</p>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Planet;
