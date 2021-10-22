import React from 'react'
import styled from "styled-components";


const Container = styled.div`  
overflow: hidden;  
display: flex;
flex-direction: row;
text-align: center;
height: 100vh;
margin-left:10px;
align-items: space-evenly;
`;



const Searchbar = styled.div`
display: column-flex;
text-align: center;
overflow: hidden;
height: 100vh
padding-left: 10px;
margin-top: 33px;
padding-left: 10px;
height: 3.5vh;
border: none
`;


const Logo = styled.div`
display: flex;

`

const Header = (props) => {
    return (
  <Container>        
    <Logo>
        <h1 className="app-name">
            Teach Me
        </h1>
    </Logo>

        <Searchbar>
            <input type="text" placeholder="Search" results="0" />
        </Searchbar>

    </Container>
    )
}

export default Header



