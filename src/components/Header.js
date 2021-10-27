import React from "react";
import styled from "styled-components";

const Container = styled.nav`
	overflow: hidden;
	display: flex;
	flex-direction: row;
	text-align: center;
	height: 100vh;
	justify-content: space-between;
`;

const Searchbar = styled.div`
	display: column-flex;
	text-align: center;
	overflow: hidden;
	height: 100vh;
	margin-top: 10px;
	padding-left: 10px;
	height: 3.5vh;
	border: none;
`;

const Button = styled.button`
	width: 10vh;
	margin-top: 0;
	margin-bottom: 0;
	padding: 5px;
	text-align: center;
	max-height: 10%;
	margin-left: 5px;
	border-radius: 15px;
`;
const Button1 = styled.button`
	justify-content: space-between;
`;

const LinksSection = styled.div`
	justify-content: center;
	max-height: 50px;
	margin: 0 auto;
`;



const ContainerLeft = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: row;
	text-align: center;
	height: 100vh;
	justify-content: space-around;
`;

const ContainerRight = styled.div`
	overflow: hidden;
	display: flex;
	flex-direction: row;
	text-align: center;
	height: 100vh;
	margin-left: 10px;
	justify-content: space-around;
`;

const Header = (props) => {
	return (
		<Container>
			<ContainerLeft>
				<div>
					<h1 className="app-name">Teach Me</h1>
				</div>

				<Searchbar>
					<input type="search" placeholder="Search" results="0" />
				</Searchbar>

				<LinksSection>
					<Button1>TeachMe Business</Button1>
					<Button1>Teach on TeachMe</Button1>
					{/* <div>OnDemand Courses</div> */}
					{/* <div>Resource Plans</div> */}
				</LinksSection>


			</ContainerLeft>

			<ContainerRight>
				<Button>Log In</Button>
				<Button>Sign Up</Button>
			</ContainerRight>
		</Container>
	);
};

export default Header;
