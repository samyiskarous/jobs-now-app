import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import handleGetAutocompletedJobsWithSkills from '../../../../actions/autocompleteJobsWithSkills';
import useDebounce from '../../../../helpers/debounce';
import './styles.css'

const SearchInput = (props: any) => {
    const {dispatch} = props;

    const history = useHistory();
    
    const debouncedSearchJobsHandler = useDebounce((searchText: string) => {
        if(searchText.length > 3){
            history.push('/search');
        
            dispatch(handleGetAutocompletedJobsWithSkills(searchText))
        }
    }, 1500)
    
    return (
        <div className="searchBarContainer">
            <input 
                type="text" 
                placeholder="Search Keyword" 
                className="searchInput"
                onChange={event => debouncedSearchJobsHandler(event.target.value)}
                />
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedSearchInput = connect(mapStateToProps)(SearchInput);

export default ConnectedSearchInput