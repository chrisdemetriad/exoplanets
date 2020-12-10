import "./App.css";
import React from "react";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Search from "./components/Search";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<main className="container">
				<Nav />
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
			</main>
		</Router>
	);
};

export default App;
