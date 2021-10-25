import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import BlueBanner from "./components/BlueBanner/BlueBanner";

function App() {
	return (
		<div className="App">
			<header>{/* Placeholder for Header component */}</header>
			<Hero />
			<BlueBanner />
			<footer>{/* Placeholder for Footer component */}</footer>
		</div>
	);
}
export default App;
