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
			<p>Star system name: {star.name}</p>
			<p>{star.numberOfPlanets} planets</p>
			<p>{star.distance} years from Earth.</p>
			{/* <p>{star._links.planets.href}</p> */}
		</div>
	);
};

export default StarSystem;
