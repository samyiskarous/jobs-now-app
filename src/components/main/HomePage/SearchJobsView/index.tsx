import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchQueryInterface } from '../../../../helper-functions.tsx/updatePersistedSearchQueries';
import handleGetJobsWithSkillsBatch from '../../../../redux/actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';
import './styles.css'

interface SearchJobsViewPropsInterface{
    searchText: string;
    dispatch?: any;
    autocompletionJobsWithSkills?: any;
    autocompletionJobs?: any;
    persistedSearchQueries: SearchQueryInterface[];
}

const SearchJobsView = (props: SearchJobsViewPropsInterface) => {

    const {
        dispatch, 
        autocompletionJobsWithSkills, 
        searchText, 
        autocompletionJobs,
        persistedSearchQueries
    } = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitle">
                {`"${searchText}" jobs (${autocompletionJobs?.length})`}
            </p>

            <div className="searchJobsViewContainer">
                <div className="mainViewContainer">
                    {autocompletionJobsWithSkills.length ?
                        (
                        <JobsList jobs={autocompletionJobsWithSkills} loadOnScrollEnabled={false}/> 
                        )
                        : null           
                    }
                </div>
                <div className="sidebarContainer">
                    <p className="large-font bold">Search history:</p>
                    <ul>
                        {persistedSearchQueries.map((searchQueryData, index) => {
                            return (
                                <li key={index} className="sidebarListItem">
                                    <Link target="_blank" to={`/search${searchQueryData.searchQuery}`} className="medium-font plainLink">
                                        {searchQueryData.searchText}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        autocompletionJobsWithSkills: state.autocompletionJobsWithSkills,
        autocompletionJobs: state.autocompletionJobs
    }
}
  
const ConnectedSearchJobsView = connect(mapStateToProps)(SearchJobsView);

export default ConnectedSearchJobsView;