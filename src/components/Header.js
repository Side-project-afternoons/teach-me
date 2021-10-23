import React from 'react'
import styled from "styled-components";


const Container = styled.div`  
overflow: hidden;  
display: flex;
flex-direction: row;
text-align: center;
height: 100vh;
justify-content: space-evenly;
`;



const Searchbar = styled.div`
display: column-flex;
text-align: center;
overflow: hidden;
height: 100vh;
padding-left: 10px;
margin-top: 33px;
padding-left: 10px;
height: 3.5vh;
border: none
`;

const Button = styled.button`
display: block;
max-height: 10%;
margin-left: 10px;

     `

const Logo = styled.div`
display: flex;

`

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
margin-left:10px;
justify-content: space-around;
`;



const Header = (props) => {
    return (
<Container>
        <ContainerLeft>
            <Logo>
                <h1 className="app-name">
                    Teach Me
                </h1>
            </Logo>

            <Searchbar>
                <input type="search" placeholder="Search" results="0" />
            </Searchbar>
            <div>TeachMe Business</div>
            <div>Solutions</div> 
            <div>OnDemand Courses</div>
            <div>Resource Plans</div>
        </ContainerLeft>

            <ContainerRight>
                <Button className="Log In">Log In</Button>
                <Button className="Sign-up">Sign Up</Button>
            </ContainerRight>
</Container>

    )
}

export default Header



