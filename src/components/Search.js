import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Search = () => {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState(localStorage.getItem("searchTerm") || "");
	// const [numberOfStarSystems, setNumberOfStarSystems] = useState("");
	const sliderValues = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

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

	const handle = (props) => {
		console.log(props.value);
	};

	return (
		<>
			<p onClick={clearSearchTerm} title="Go home and clear search">
				Exoplanets search results
			</p>

			<Slider min={1} defaultValue={1} marks={sliderValues} step={null} handle={handle} />

			{search ? <p>Search results shown for {search}</p> : <p>No search results</p>}
			{data.map((star, index) => (
				<p key={index}>{star.name}</p>
			))}

			<form onSubmit={handleSubmit}>
				{search && <p onClick={clearSearchTerm}>clear search term</p>}

				<input onChange={handleChange} type="text" placeholder={search} />

				<button>Search</button>
			</form>
		</>
	);
};

export default Search;
