const Modal = ({ planets }) => {
	return (
		<div>
			{planets.map((planet, index) => {
				return <p key={index}>{planet.name}</p>;
			})}
		</div>
	);
};

export default Modal;
