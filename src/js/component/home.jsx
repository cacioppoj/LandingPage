import React from "react";
import Card from "./card.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
//include images into your bundle

import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar></Navbar>
			<div className="container"> 
				<Jumbotron></Jumbotron>
				<div className="cardSection d-sm-flex">
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</div>
				<Footer></Footer>
			</div>
		</>
	);
};

export default Home;
