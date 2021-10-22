import React from 'react'
import styled from "styled-components";


const Container = styled.div`  
overflow: hidden;  
display: flex;
flex-direction: row;
text-align: center;
height: 100vh;
margin-left:10px;
align-items: space-between;
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
border: 2px solid black;
`;


const Header = (props) => {
    return (
  <Container>        
    <logo>
        <h1 className="app-name">
            Teach Me
        </h1>
    </logo>
        <Searchbar>
            <input type="search" placeholder="Search" results="0" />
        </Searchbar>

    </Container>
    )
}

export default Header



