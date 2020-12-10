import "./App.css";
import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Search from "./components/Search";
const App = () => {
	const [starSystem, setStarSystems] = useState([]);
	const [starDetails, setStarDetails] = useState([]);
	const [modal, setModal] = useState(false);

	const [page, setPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	useEffect(() => {
		loadStarSystems(page);
	}, [page]);

	const loadStarSystems = (page) => {
		fetch(process.env.REACT_APP_STARS_API + `?size=100&sort=numberOfPlanets,desc&page=${page}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStarSystems(data._embedded.stars);

				setPage(data.page.number);
				setLastPage(data.page.totalPages);
			})
			.catch((error) => {
				console.log(error);
			});
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
		<div className="App">
			<Search />

			{modal && <Modal planets={starDetails} />}
			{!modal && null}

			<div>
				<button disabled={page === 1} onClick={() => loadStarSystems(1)}>
					First
				</button>
				<button disabled={page === 1} onClick={() => loadStarSystems(page - 1)}>
					Previous
				</button>
				<span>
					Page {page} from {lastPage}
				</span>
				<button disabled={page === lastPage} onClick={() => loadStarSystems(page + 1)}>
					Next
				</button>
				<button disabled={page === lastPage} onClick={() => loadStarSystems(lastPage)}>
					Last
				</button>
			</div>

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
