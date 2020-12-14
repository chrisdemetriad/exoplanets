import React, { useEffect } from "react";
import Planet from "./Planet";
import Star from "./Star";
import "./Modal.css";

const Modal = ({ star, planets, onClose }) => {
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
				<div className="close" onClick={onClose}></div>
				<Star star={star} />
				<Planet planets={planets} />
			</div>
		</div>
	);
};

export default Modal;
