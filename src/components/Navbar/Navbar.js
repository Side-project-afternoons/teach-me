import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import teachme  from '../../assets/teachme-logo.png'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LanguageIcon from '@mui/icons-material/Language';

function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <div className="header">
            <nav className="navbar">
                <Link to="/"><img className="nav-logo" src={teachme} alt='teachme logo'/></Link>
                
                <div className="container">
                    <div className="searchInputWrapper">
                        <input className="searchInput" type="text" placeholder='Search...'>
                        </input>
                    </div>
                </div>

                <div className="nav-menu-cont">
                    <ul className="nav-menu">

                        <li className="nav-item">
                            <Link to="/business" className="nav-link">Teachme Business</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/teach" className="nav-link">Teach on teachme</Link>
                        </li>

                        <ShoppingCartOutlinedIcon className="nav-cart" />

                        <li className="nav-item">
                            <Link to="/login" className="nav-link-login">Login</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/register" className="nav-link-register">Sign up</Link>
                        </li>

                        <div className="nav-language-cont">
                            <LanguageIcon className="nav-language"/>
                        </div>

                    </ul>
                </div>
                
                <button onClick={() => setOpen(!open)}  className={`${open ? 'hamburger2' : 'hamburger'}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button> 
            </nav>
        </div>
    )
}
export default Navbar