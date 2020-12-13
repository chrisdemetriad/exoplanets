import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import StarSystem from "./StarSystem";
import Modal from "./Modal";

const Home = () => {
	const sliderValues = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

	const [modal, setModal] = useState(false);

	const [starSystem, setStarSystems] = useState([]);
	const [planetsNumber, setPlanetsNumber] = useState(1);
	const [starDetails, setStarDetails] = useState([]);

	const [page, setPage] = useState(0);
	const [lastPage, setLastPage] = useState("");

	useEffect(() => {
		console.clear();
		console.log(`useEffect, page is ${page} and planetsNumber is ${planetsNumber}`);
		loadStarSystems(page, planetsNumber);
	}, [page, planetsNumber]);

	const toggleModal = () => {
		setModal(!setModal);
	};

	const loadStarSystems = (page, planetsNumber) => {
		console.log(`loadStarSystems, page is ${page} and planetsNumber is ${planetsNumber}`);
		fetch(process.env.REACT_APP_STARS_API + `?numberOfPlanets=${planetsNumber}&size=25&sort=numberOfPlanets,desc&page=${page}`)
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
				console.log("xxxxxxxxx", data);
				setStarDetails(data._embedded.planets);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// const [currentStar, setCurrentStar] = useState([]);
	// console.log(currentStar);

	// const onClickHandle = (star) => {
	// 	console.log("xxxxxxx", star);
	// };

	return (
		<>
			<div className="listing">
				<div>
					<Slider
						min={1}
						defaultValue={1}
						marks={sliderValues}
						step={null}
						onChange={(e) => {
							setPlanetsNumber(e);
							setPage(0);
						}}
					/>
				</div>
				<br />

				<Pagination page={page} lastPage={lastPage} loadStarSystems={loadStarSystems} planetsNumber={planetsNumber} />

				<div className="star-systems">
					{starSystem.map((star, index) => {
						return <StarSystem key={index} star={star} loadStarDetails={loadStarDetails} setModal={setModal} />;
					})}
				</div>

				{modal && <Modal planets={starDetails} onClose={toggleModal} />}
			</div>
		</>
	);
};

export default Home;
