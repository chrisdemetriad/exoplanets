import "./App.css";
import React, { useEffect, useState } from "react";

const Modal = ({ planets }) => {
	return (
		<div>
			{planets.map((planet, index) => {
				return <p key={index}>{planet.name}</p>;
			})}
		</div>
	);
};

const App = () => {
	const [starSystem, setStarSystems] = useState([]);
	const [starDetails, setStarDetails] = useState([]);
	const [modal, setModal] = useState(false);

	console.log(process.env.REACT_APP_STARS_API);
	const loadStarSystems = () => {
		fetch(process.env.REACT_APP_STARS_API + "?size=40&sort=numberOfPlanets,desc")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStarSystems(data._embedded.stars);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		loadStarSystems();
	}, []);

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
		<div className="App">
			{modal && <Modal planets={starDetails} />}
			{!modal && null}
			{starSystem.map((star, index) => {
				return (
					<p
						key={index}
						onClick={() => {
							loadStarDetails(star._links.planets.href);
							setModal(true);
						}}
					>
						<span>
							[{index}] Star system name: {star.name}
						</span>
						, <span>{star.numberOfPlanets} planets</span>, <span>{star.distance} years from Earth.</span>, <span>{star._links.planets.href}</span>
					</p>
				);
			})}
		</div>
	);
};

export default App;
