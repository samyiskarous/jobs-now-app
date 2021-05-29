import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles.css'

const Header = () => {
    
    const location = useLocation();
    
    return (
        <div className="header">
            <div className="logo large-font bold">JobsNow</div>
            <ul className="navigation-links">
                {links.map((link, index) => {
                    return (
                        <li key={index} className="medium-font">
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

interface LinksInterface{
    name: string; 
    route: string;
}

const links: LinksInterface[] = [
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