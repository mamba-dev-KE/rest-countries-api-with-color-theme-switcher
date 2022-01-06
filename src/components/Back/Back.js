import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import "./Back.css";

const Back = ({ isDark }) => {
	return (
		<Link to="/">
			<button className={isDark ? `dark-back back` : `back`}>
				<BsArrowLeft className="back-icon" /> Back
			</button>
		</Link>
	);
};

export default Back;
