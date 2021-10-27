import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import BlueBanner from "./components/BlueBanner/BlueBanner";
import Hero from "./components/Hero.js";

function App() {
	return (
		<div className="App">
			<Header>{/* Placeholder for Header component */}</Header>
			<Hero />
			<BlueBanner />
			<footer>{/* Placeholder for Footer component */}</footer>
		</div>
	);
}
export default App;
