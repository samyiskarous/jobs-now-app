import React, {useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import handleGetJobsByAutoCompletion from '../../../../actions/getJobsByAutocompletion';
import useDebounce from '../../../../custom-hooks/useDebounce';
import useComponentVisible from '../../../../custom-hooks/useComponentVisible';
import './styles.css'
import { Link } from 'react-router-dom';

interface SearchInputPropsInterface{
    updateSearchTextHandlerCallback: (searchText: string) => void,
    dispatch?: any;
    autocompletionJobs?: any;
}

const SearchInput = (props: SearchInputPropsInterface) => {
    const {dispatch, updateSearchTextHandlerCallback, autocompletionJobs} = props;
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);

    const history = useHistory();
    const location = useLocation();

    const searchInputRef = useRef<HTMLInputElement>(null);

    const initiateSearching = (searchText: string) => {
        updateSearchTextHandlerCallback(searchText);
        dispatch(handleGetJobsByAutoCompletion(searchText))
    }
    
    const debouncedSearchJobsHandler = useDebounce((searchText: string) => {
        if(searchText.length >= 3){
            history.push(`/search?query=${searchText}`);
                initiateSearching(searchText);
        }
    }, 1500)

    useEffect(() => {
        // Only needed if we opened the query URL directly
        const queryParameter = new URLSearchParams(location.search).get('query');
        if(queryParameter !== null && queryParameter !== ""){
            if(searchInputRef.current){
                // Assigning the query parameter to the Search Input's value
                // Without causing re-renders 
                searchInputRef.current.value = queryParameter;
                initiateSearching(queryParameter);
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="searchBarContainer">
            <input 
                type="text" 
                ref={searchInputRef}
                placeholder="Search Keyword" 
                className="searchInput"
                onChange={event => debouncedSearchJobsHandler(event.target.value)}
                onClick={() => setIsComponentVisible(true)}
            />
            {/* <div className="inputContainer">
                <i className="fa fa-user icon"> </i>
                <input className="inputField" type="text" placeholder="Username" />
            </div> */}
            {autocompletionJobs.length > 0 ? (
                <div ref={ref} className="autoCompletionListContainer">
                    {/* Controls Hiding/Showing of the autocompletion list */}
                    {isComponentVisible && 
                        <div className="autocompletionList">
                            {autocompletionJobs.map((job: any, index: any) => {
                                return <Link key={index} to="#" title="Click to view the Job">{job.suggestion}</Link>
                            })}
                        </div>
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