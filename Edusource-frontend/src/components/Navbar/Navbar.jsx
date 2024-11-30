import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file
import logoImg from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {

    let navigate = useNavigate()
    let isLogged=Boolean(localStorage.getItem('isLoggedIn'))

    const handleLogoutClick = ()=>{
        localStorage.removeItem('isLoggedIn')
        navigate('/login')
    }
    return (
        <header className="header-container">
            <nav className="navbar">
                <div className="navbar-inner">
                    <Link to="/" className="logo-link">
                        <img
                            src={logoImg}
                            className="logo"
                            alt="Logo"
                        />
                    </Link>
                    
                    <div className="menu" id="mobile-menu-2">
                        <ul className="menu-list">
                            <li>
                                <NavLink className="menu-item menu-item-home" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item menu-item-books" to="/books">
                                    Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="menu-item menu-item-about" to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="auth-links">
                        {
                            isLogged?
                            (<button onClick={handleLogoutClick} className="get-started-link">LogOut</button>):
                            (<>
                            <Link to="/login" className="login-link">Log in</Link>
                            <Link to="/signup" className="get-started-link">Get started</Link> 
                                </>
                            )
                        }
                        
                    </div>
                </div>
            </nav>
        </header>
    );
}
