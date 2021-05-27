import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import API from '../../util/api-functions';
import './styles.css'

const Header = () => {
    
    const location = useLocation();
    API.getAutocompleteListForJobs('ESL Teacher').then(test => console.log(test));
    return (
        <div className="header">
            <div className="logo">JobsNow</div>
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