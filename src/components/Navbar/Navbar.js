import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import shoppingCart from "../../images/shoppingCart.svg";
import globe from "../../images/globe.svg";

const NavBar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
`;

const Wrapper = styled.div`
  width: 1023px;
  display: flex;
  gap: 20px;
`;

const Logo = styled.h3`
  font-family: "Pacifico", cursive;
  font-size: 25px;
  color: #424242;
  font-weight: 300;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

const searchStyle = {
  position: "absolute",
  fontSize: "12px",
  left: "10px",
};

const SearchBox = styled.input`
  width: 243px;
  height: 32px;
  border-radius: 30px;
  font-size: 12px;
  padding: 0px 20px 0px 28px;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-family: "Manrope", sans-serif;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      font-size: 16px;

      a:visited {
        color: inherit;
      }
    }
  }
`;

const iconStyle = {
  width: "22px",
  height: "28px",
};

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "76px",
  height: "33px",
  fontSize: "14px",
  fontWeight: "600",
  fontStyle: "normal",
  textDecoration: "none",
  textAlign: "center",
  background: "#ffffff",
  border: "2px solid #000000",
  borderRadius: "0px",
  cursor: "pointer",
};

const invertedButtonStyle = {
  color: "white",
  background: "black",
};

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
      <Wrapper>
        <Link to="/">
          <Logo className="logo">Teachme</Logo>
        </Link>
        <SearchBarWrapper>
          <FontAwesomeIcon icon={faSearch} style={searchStyle} />
          <SearchBox type="text"></SearchBox>
        </SearchBarWrapper>
        <NavLinks>
          <ul>
            <li>
              <Link to="/business">Teachme Business</Link>
            </li>
            <li>
              <Link to="/teach">Teach on teachme</Link>
            </li>
            <li>
              <a href="/">
                <img
                  src={shoppingCart}
                  className="cart"
                  alt="shopping cart icon"
                  style={iconStyle}
                />
              </a>
            </li>
            <li>
              <Link to="/login" className="nav-link-login">
                <button style={buttonStyle}>Login</button>
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link-register">
                <button style={{ ...buttonStyle, ...invertedButtonStyle }}>
                  Sign up
                </button>
              </Link>
            </li>
            <li className="nav-language-cont">
              <button style={{ ...buttonStyle, width: "33px" }}>
                <img
                  src={globe}
                  className="globe"
                  alt="globe icon"
                  style={{
                    ...iconStyle,
                    width: "26px",
                    height: "18px",
                  }}
                />
              </button>
            </li>
          </ul>
        </NavLinks>
        <button
          onClick={() => setOpen(!open)}
          className={`${open ? "hamburger2" : "hamburger"}`}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </Wrapper>
    </NavBar>
  );
}
export default Navbar;
