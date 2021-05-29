import React from 'react'
import { connect } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router';
import './styles.css'

const SearchInput = (props: any) => {

    const history = useHistory();

    const searchHandler = (searchText: string) => {
        if(searchText.length > 3){
            history.push('/search');
        }
    }

    return (
        <div className="searchBarContainer">
            <input 
                type="text" 
                placeholder="Search Keyword" 
                className="searchInput"
                onChange={event => searchHandler(event.target.value)}
                />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedSearchInput = connect(mapStateToProps)(SearchInput);

export default ConnectedSearchInput