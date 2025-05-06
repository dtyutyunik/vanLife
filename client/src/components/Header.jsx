import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "red"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink to="/host" end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Host</NavLink>
                <NavLink to="/about"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >About</NavLink>
                <NavLink to="/vans"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >Vans</NavLink>
            </nav>

        </header>
    )
}
export default Header;