import React from "react";

const Planet = ({ planets }) => {
	return (
		<>
			{planets.map(({ name, radius, age, temperature, mass, discoveryMethod, description, discoveryDate }, index) => {
				return (
					<div className="planet">
						{name && (
							<p>
								<span>{name}</span>
							</p>
						)}
						{radius && (
							<p>
								<span>{radius}</span>
							</p>
						)}
						{age && (
							<p>
								<span>{age}</span>
							</p>
						)}
						{temperature && (
							<p>
								<span>{temperature}</span>
							</p>
						)}

						{discoveryMethod && (
							<p>
								<span>{discoveryMethod}</span>
							</p>
						)}

						{mass && (
							<p>
								<span>{mass}</span>
							</p>
						)}

						{description && (
							<p>
								<span>{description}</span>
							</p>
						)}

						{discoveryDate && (
							<p>
								<span>{discoveryDate}</span>
							</p>
						)}
					</div>
				);
			})}
		</>
	);
};

export default Planet;
