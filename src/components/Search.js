import React, { useState } from "react";

import "./Search.css";
import AlternateStar from "./AlternateStar";

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

	// const clearSearchTerm = () => {
	// 	localStorage.removeItem("searchTerm");
	// 	setSearch("");
	// 	// getData();
	// };

	const getData = async () => {
		try {
			const data = await fetch(process.env.REACT_APP_ALTERNATENAME_API + `?name=%25${search.charAt(0).toUpperCase() + search.slice(1)}%25`);
			const response = await data.json();
			setData(response._embedded.alternateNames);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="listing">
			<form onSubmit={handleSubmit}>
				{/* {search && <span onClick={clearSearchTerm}>clear search term</span>} */}

				<input onChange={handleChange} type="text" placeholder={search} />

				<button>Search</button>
			</form>

			{/* <p onClick={clearSearchTerm} title="Go home and clear search">
				Exoplanets search results
			</p> */}

			<div className={data.length && "star-systems"}>
				{data.length
					? data.map((star, index) => {
							return <AlternateStar key={index} star={star} />;
					  })
					: search !== "" && (
							<div>
								<p>No results for {search}. Did you press Search?</p>
								<p>Alternatively, try Ursae?</p>
							</div>
					  )}
			</div>
		</div>
	);
};

export default Search;
