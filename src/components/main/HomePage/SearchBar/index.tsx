import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import handleGetAutocompletedJobsWithSkills from '../../../../actions/autocompleteJobsWithSkills';
import useDebounce from '../../../../helpers/debounce';
import './styles.css'

interface SearchInputPropsInterface{
    updateSearchTextHandlerCallback: (searchText: string) => void,
    dispatch?: any;
}

const SearchInput = (props: SearchInputPropsInterface) => {
    const {dispatch, updateSearchTextHandlerCallback} = props;

    const history = useHistory();
    
    const debouncedSearchJobsHandler = useDebounce((searchText: string) => {
        if(searchText.length >= 3){
            updateSearchTextHandlerCallback(searchText);

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
            <div className="autocompleteList">
                
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedSearchInput = connect(mapStateToProps)(SearchInput);

export default ConnectedSearchInput