import React, {useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import handleGetJobsByAutoCompletion from '../../../../redux/actions/getJobsByAutocompletion';
import useDebounce from '../../../../custom-hooks/useDebounce';
import useComponentVisible from '../../../../custom-hooks/useComponentVisible';
import './styles.css'
import { Link } from 'react-router-dom';
import SearchIcon from '../../../../assets/SVGs/SearchIcon.svg'
import updatePersistedSearchQueries from '../../../../helper-functions.tsx/updatePersistedSearchQueries';

interface SearchInputPropsInterface{
    callHandleGetJobsByAutoCompletion: (searchText: string) => void;
    updateSearchTextHandlerCallback: (searchText: string) => void,
    updatePersistedSearchQueriesStateCallback: (newPersistedSearchQueries: string[]) => void;
    autocompletionJobs?: any;
}

const SearchInput = (props: SearchInputPropsInterface) => {
    const {
        callHandleGetJobsByAutoCompletion, 
        updateSearchTextHandlerCallback, 
        updatePersistedSearchQueriesStateCallback,
        autocompletionJobs
    } = props;
    const {ref, isComponentVisible, setIsComponentVisible} = useComponentVisible(true);

    const history = useHistory();
    const location = useLocation();

    const searchInputRef = useRef<HTMLInputElement>(null);

    const initiateSearching = (searchText: string) => {
        updateSearchTextHandlerCallback(searchText);

        const newPersistedSearchQueries = updatePersistedSearchQueries(searchText);
        updatePersistedSearchQueriesStateCallback(newPersistedSearchQueries);

        callHandleGetJobsByAutoCompletion(searchText);
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

            <img src={SearchIcon} alt="Search Icon" className="svgIconForSearchInput"/>
            <input 
                type="text" 
                ref={searchInputRef}
                placeholder="Search Keyword" 
                className="searchInput"
                onChange={event => debouncedSearchJobsHandler(event.target.value)}
                onClick={() => setIsComponentVisible(true)}
            />

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

const mapDispatchToProps = (dispatch: any) => {
    return {
        callHandleGetJobsByAutoCompletion: (searchText: string) => dispatch(handleGetJobsByAutoCompletion(searchText))
    }
}

const ConnectedSearchInput = connect(mapStateToProps, mapDispatchToProps)(SearchInput);

export default ConnectedSearchInput