const StarSystem = ({ star, loadStarDetails, setModal }) => {
	return (
		<p
			onClick={() => {
				loadStarDetails(star._links.planets.href);
				setModal(true);
			}}
		>
			<span>Star system name: {star.name}</span>, <span>{star.numberOfPlanets} planets</span>, <span>{star.distance} years from Earth.</span>, <span>{star._links.planets.href}</span>
		</p>
	);
};

export default StarSystem;
