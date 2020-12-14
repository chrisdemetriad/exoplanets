import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import StarSystem from "./StarSystem";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Home.css";

const Home = () => {
	const sliderValues = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8 };

	const [starSystem, setStarSystems] = useState([]);
	const [planetsNumber, setPlanetsNumber] = useState(1);

	const [page, setPage] = useState(0);
	const [lastPage, setLastPage] = useState("");

	useEffect(() => {
		loadStarSystems(page, planetsNumber);
	}, [page, planetsNumber]);

	const loadStarSystems = (page, planetsNumber) => {
		fetch(process.env.REACT_APP_STARS_API + `?numberOfPlanets=${planetsNumber}&size=16&sort=numberOfPlanets,desc&page=${page}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setStarSystems(data._embedded.stars);
				setPage(data.page.number);
				setLastPage(data.page.totalPages - 1);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="listing">
			<div className="slider">
				<p>Move slider below to search for a minimum number of planets</p>
				<Slider
					min={1}
					max={8}
					defaultValue={1}
					marks={sliderValues}
					step={null}
					dotStyle
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
					return <StarSystem key={index} star={star} />;
				})}
			</div>
		</div>
	);
};

export default Home;
