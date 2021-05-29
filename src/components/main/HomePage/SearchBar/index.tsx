import React from 'react'
import { connect } from 'react-redux';
import './styles.css'

const SearchInput = (props: any) => {
    return (
        <div className="searchBarContainer">
            <input type="text" placeholder="Search Keyword" className="searchInput"/>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedSearchInput = connect(mapStateToProps)(SearchInput);

export default ConnectedSearchInput