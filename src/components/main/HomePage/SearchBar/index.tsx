import React from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import handleGetJobsByAutoCompletion from '../../../../actions/getJobsByAutocompletion';
import useDebounce from '../../../../custom-hooks/useDebounce';
import useComponentVisible from '../../../../custom-hooks/useComponentVisible';
import ConnectedAutocompletionList from './AutocompletionList';
import './styles.css'

interface SearchInputPropsInterface{
    updateSearchTextHandlerCallback: (searchText: string) => void,
    dispatch?: any;
    autocompletionJobs?: any;
}

const SearchInput = (props: SearchInputPropsInterface) => {
    const {dispatch, updateSearchTextHandlerCallback, autocompletionJobs} = props;
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);

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
                onClick={() => setIsComponentVisible(true)}
            />
            {autocompletionJobs.length > 0 ? (
                <div ref={ref} className="autoCompletionListContainer">
                    {isComponentVisible && 
                        <ConnectedAutocompletionList/>
                    }
                </div>
            ) : null}
            
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