import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles.css'

const Header = () => {

    const location = useLocation();
    console.log(location.pathname === "/");
    return (
        <div className="header">
            <div className="logo">Logo</div>
            <ul className="navigation-links">
                {links.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link 
                                to={link.route} 
                                className={location.pathname === link.route ? 'selected' : ''}
                            >
                                {link.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

const links: {name: string, route: string}[] = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Search',
        route: '/search'
    },
    {
        name: 'History',
        route: '#'
    },

]

export default Header;