import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
	const [stars, setStars] = useState([]);
	console.log(process.env.REACT_APP_STARS_API);
	const loadSystems = () => {
		fetch(process.env.REACT_APP_STARS_API)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStars(data._embedded.stars);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		loadSystems();
	}, []);

	return (
		<div className="App">
			{stars.map((star, index) => {
				return <p key={index}>{star.name}</p>;
			})}
		</div>
	);
}

export default App;
