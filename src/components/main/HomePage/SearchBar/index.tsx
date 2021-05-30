import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import handleGetJobsByAutoCompletion from '../../../../actions/getJobsByAutocompletion';
import useDebounce from '../../../../helpers/debounce';
import ConnectedAutocompletionList from './AutocompletionList';
import './styles.css'

interface SearchInputPropsInterface{
    updateSearchTextHandlerCallback: (searchText: string) => void,
    dispatch?: any;
    autocompletionJobs?: any;
}

const SearchInput = (props: SearchInputPropsInterface) => {
    const {dispatch, updateSearchTextHandlerCallback, autocompletionJobs} = props;

    const history = useHistory();
    
    const debouncedSearchJobsHandler = useDebounce((searchText: string) => {
        if(searchText.length >= 3){
            updateSearchTextHandlerCallback(searchText);

            history.push('/search');

            dispatch(handleGetJobsByAutoCompletion(searchText))
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
            {autocompletionJobs.length > 0 ? <ConnectedAutocompletionList/> : null}
            
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        autocompletionJobs: state.autocompletionJobs
    };
}

const ConnectedSearchInput = connect(mapStateToProps)(SearchInput);

export default ConnectedSearchInput