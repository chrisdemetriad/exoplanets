import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
	const [starSystem, setStarSystems] = useState([]);
	const [starDetails, setStarDetails] = useState([]);

	console.log(process.env.REACT_APP_STARS_API);
	const loadStarSystems = () => {
		fetch(process.env.REACT_APP_STARS_API + "?size=40")
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
			{starDetails.length > 0 && <p>{starDetails[0].name}</p>}
			{starSystem
				.sort((a, b) => (a.numberOfPlanets < b.numberOfPlanets ? 1 : -1))
				.map((star, index) => {
					return (
						<p
							key={index}
							onClick={() => {
								loadStarDetails(star._links.planets.href);
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
}

export default App;
