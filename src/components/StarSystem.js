import React, { useState, useCallback } from "react";
import Modal from "./Modal";
import usePortal from "react-cool-portal";
import "./StarSystem.css";

const StarSystem = ({ star }) => {
	const url = star._links.planets.href;
	const { Portal, toggle } = usePortal({ defaultShow: false });
	const [modal, setModal] = useState(false);
	const [starDetails, setStarDetails] = useState([]);

	const getRandomNumber = () => {
		return Math.floor(Math.random() * Math.floor(138));
	};

	const [randomValue] = useState(getRandomNumber);

	const buttonCallback = useCallback(() => {
		loadStarDetails(url);
		setModal(true);
		toggle();
	}, [toggle, url]);

	const toggleModal = () => {
		setModal(!setModal);
	};

	const loadStarDetails = (url) => {
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStarDetails(data._embedded.planets);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div
			style={{
				backgroundImage: `url(exoplanets/img${randomValue}.jpg`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="star-system"
			onClick={() => {
				buttonCallback();
			}}
		>
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
					<span>Distance from Earth</span>
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

			{star.mass != null ? (
				<p>
					<span>Mass</span> <span>{star.mass}</span>
				</p>
			) : (
				<p>
					<span>Mass</span> <span>unknown</span>
				</p>
			)}

			{star.age && (
				<p>
					<span>Age</span>
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

			<Portal>{modal && <Modal planets={starDetails} star={star} onClose={toggleModal} />}</Portal>
		</div>
	);
};

export default StarSystem;
