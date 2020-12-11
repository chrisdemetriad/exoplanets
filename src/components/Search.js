import React, { useState } from "react";

const Search = () => {
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

	return (
		<>
			<p onClick={clearSearchTerm} title="Go home and clear search">
				Exoplanets search results
			</p>

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
