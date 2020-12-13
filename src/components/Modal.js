import React, { useEffect } from "react";
import Planet from "./Planet";

const Modal = ({ planets, onClose }) => {
	useEffect(() => {
		function onEscape(event) {
			if (event.keyCode === 27) {
				onClose();
			}
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", onEscape);

		return () => {
			document.body.style.overflow = "visible";
			document.removeEventListener("keydown", onEscape);
		};
	});

	return (
		<div className="modal-container">
			<div className="modal">
				<Planet planets={planets} />
				<button type="button" onClick={onClose}>
					Close this modal
				</button>
			</div>
		</div>
	);
};

export default Modal;
