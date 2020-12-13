import React, { useState, useEffect, useCallback } from "react";
import Modal from "./Modal";
import usePortal from "react-cool-portal";

const StarSystem = ({ star }) => {
	const [loading, setLoading] = useState(false);
	const { Portal, isShow, toggle } = usePortal({ defaultShow: false });

	const getRandomNumber = (maximum) => {
		return Math.floor(Math.random() * Math.floor(maximum));
	};
	const buttonCallback = useCallback(() => {
		loadStarDetails(star._links.planets.href);
		setModal(true);
		toggle();
	}, [toggle]);
	const toggleModal = () => {
		setModal(!setModal);
	};
	const [starDetails, setStarDetails] = useState([]);

	const loadStarDetails = (url) => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log("xxxxxxxxx", data);
				setStarDetails(data._embedded.planets);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const [modal, setModal] = useState(false);

	return (
		<div
			style={{
				backgroundImage: `url(exoplanets/img${getRandomNumber(138)}.jpg`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="star-system"
			onClick={() => {
				buttonCallback();
			}}
		>
			<Portal>{modal && <Modal planets={starDetails} onClose={toggleModal} />}</Portal>

			<p className="star-system-name">
				<span>Star System</span> <span>{star.name}</span>
			</p>
			{star.numberOfPlanets && (
				<p>
					<span>Planets</span> <span>{star.numberOfPlanets}</span>
				</p>
			)}

			{star.distance && (
				<p>
					<span>Distance from Earth</span> <span>{star.distance}</span>
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
						{star.age} <span className="lowercase">light years</span>
					</span>
				</p>
			)}
			{star.radius && (
				<p>
					<span>Radius</span> <span>{star.radius}</span>
				</p>
			)}
		</div>
	);
};

export default StarSystem;
