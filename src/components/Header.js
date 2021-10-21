import React from 'react'
import styled from "styled-components";


const Header = (props) => {
    return (
        <div classNmae="logo">
        <h1 className="app-name">
            Teach Me
        </h1>
        <div className="searchbar">
            <input type="search" placeholder="Search" results="0" />
        </div>

    </div>
    )
}

export default Header