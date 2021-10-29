import React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ui/Theme";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

import "./App.css";
import SignupPage from "./pages/SignupPage";
import BusinessPage from "./pages/BusinessPage";
import TeachmePage from "./pages/TeachmePage";

    
function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<Navbar />{" "}
					{/* the other header is for the other two pages, waiting on merge */}
					<HomePage />
				</Route>

				<Route exact path="/login">
					<Navbar />
					<LoginPage />
				</Route>

				<Route exact path="/register">
					<Navbar />
					<SignupPage />
				</Route>

				<Route exact path="/business">
					<Header />
					<BusinessPage />
				</Route>

				<Route exact path="/teach">
					<Header />
					<TeachmePage />
				</Route>
			</Switch>
			<footer>{/* Placeholder for Footer component */}</footer>
		</div>
	);
}
export default App;
