// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../navigation/nav.css'

//import { FaCode } from 'react-icons/fa';
import Logo from '../../assets/profile.jpg'

function Navigation() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };


  return (
    <nav className={isMenuOpen ? 'open' : ''}>
        <div className="max-width">
            <div className="content">

                <Link to="/" className="logo">
                    <div className="image">
                        <img src={Logo} alt="" />
                    </div>
                    <h3>Angelo dorange</h3>
                </Link>

                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`navigation ${isMenuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
  )
}

export default Navigation
