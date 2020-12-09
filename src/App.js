import "./App.css";
import React, { useState, useEffect } from "react";

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

	const [data, setData] = useState([]);
	const [search, setSearch] = useState(localStorage.getItem("searchTerm") || "");

	const handleChange = (event) => {
		setSearch(event.target.value);
		localStorage.setItem("searchTerm", event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getData();
	};

	const clearSearchTerm = () => {
		localStorage.removeItem("searchTerm");
		setSearch("");
		getData();
	};

	const getData = async () => {
		try {
			const data = await fetch(process.env.REACT_APP_ALTERNATENAME_API + `?name=%25${search}%25`);
			const response = await data.json();
			setData(response._embedded.alternateNames);
		} catch (error) {
			console.log(error);
		}
	};

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
	console.log(data);
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
			<p onClick={clearSearchTerm} title="Go home and clear search">
				Exoplanets search results
			</p>

			<form onSubmit={handleSubmit}>
				{search && <p onClick={clearSearchTerm}>clear search term</p>}

				<input onChange={handleChange} type="text" placeholder={search} />

				<button>Search</button>
			</form>
			{search ? <p>Search results shown for {search}</p> : <p>No search results</p>}
			{data.map((star, index) => (
				<p key={index}>{star.name}</p>
			))}
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
