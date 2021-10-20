import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="nav-logo">Teachme</Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/business" className="nav-link">Teachme Business</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/teach" className="nav-link">Teach on teachme</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register" className="nav-link">Sign up</Link>
                    </li>
                </ul>
                <div class="hamburger">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
