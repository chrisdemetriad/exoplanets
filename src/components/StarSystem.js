const StarSystem = ({ star, loadStarDetails, setModal }) => {
	const getRandomNumber = (maximum) => {
		return Math.floor(Math.random() * Math.floor(maximum));
	};

	return (
		<div
			style={{
				backgroundImage: `url(exoplanets/img${getRandomNumber(138)}.jpg`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			className="star-system"
			onClick={() => {
				loadStarDetails(star._links.planets.href);
				setModal(true);
			}}
		>
			<p className="star-system-name">
				<span>Star System</span> <span>{star.name}</span>
			</p>
			<p>
				<span>Planets</span> <span>{star.numberOfPlanets}</span>
			</p>
			<p>
				<span>Distance from Earth</span> <span>{star.distance}</span>
			</p>
			{/* <p>{star._links.planets.href}</p> */}
		</div>
	);
};

export default StarSystem;
