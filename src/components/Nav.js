import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					{" "}
					<NavLink to="/search" activeClassName="active">
						<h2>Search</h2>
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/" activeClassName="active">
						<h1>EXOPLANETS</h1>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
