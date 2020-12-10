import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import Pagination from "./Pagination";
import StarSystem from "./StarSystem";

const Home = () => {
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
		<div className="listing">
			{modal && <Modal planets={starDetails} />}
			{!modal && null}

			<Pagination page={page} lastPage={lastPage} loadStarSystems={loadStarSystems} />

			{starSystem.map((star, index) => {
				return <StarSystem key={index} star={star} loadStarDetails={loadStarDetails} setModal={setModal} />;
			})}
		</div>
	);
};

export default Home;
