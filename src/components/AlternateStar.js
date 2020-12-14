import React, { useState } from "react";
import "./Star.css";

const AlternateStar = ({ star }) => {
	const getRandomNumber = () => {
		return Math.floor(Math.random() * Math.floor(138));
	};

	const [randomValue] = useState(getRandomNumber);

	return (
		<div
			style={{
				backgroundImage: `url(exoplanets/img${randomValue}.jpg`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="star-system"
		>
			{star.name && (
				<p className="star-system-name">
					<span>Star System</span> <span>{star.name}</span>
				</p>
			)}
		</div>
	);
};

export default AlternateStar;
