import React, { ReactNode, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import handleGetJobsWithSkillsBatch from '../../../../redux/actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';
import TwoSidedView from '../../../reusable/TwoSidedView';
import './styles.css'

interface SearchJobsViewPropsInterface{
    searchText: string;
    dispatch?: any;
    autocompletionJobsWithSkills?: any;
    autocompletionJobs?: any;
    persistedSearchQueries: string[];
}

const SearchJobsView = (props: SearchJobsViewPropsInterface) => {

    const {
        dispatch, 
        autocompletionJobsWithSkills, 
        searchText, 
        autocompletionJobs,
        persistedSearchQueries
    } = props;

    const sidebarList: ReactNode = (
        <ul>
            {persistedSearchQueries.map((searchQueryValue, index) => {
                return (
                    <li key={index}>
                        <Link target="_blank" to={`/search?query=${searchQueryValue}`} className="medium-font plainLink">
                            {searchQueryValue}
                        </Link>
                    </li>
                )
            })}
        </ul>
    );

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings">
                {`"${searchText}" jobs (${autocompletionJobs?.length})`}
            </p>

            <TwoSidedView 
                mainViewChildren={
                    // Render the Job Cards when its data is ready
                    autocompletionJobsWithSkills.length ?
                        (
                            <JobsList jobs={autocompletionJobsWithSkills} loadOnScrollEnabled={false}/> 
                        )
                    : null 
                }
                sidebarData={{
                    title:"Search History:",
                    listData: sidebarList
                }}
            />
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