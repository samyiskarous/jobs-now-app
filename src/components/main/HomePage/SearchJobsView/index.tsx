import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../redux/actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';

interface SearchJobsViewPropsInterface{
    searchText: string;
    dispatch?: any;
    autocompletionJobsWithSkills?: any;
    autocompletionJobs?: any;
}

const SearchJobsView = (props: SearchJobsViewPropsInterface) => {

    const {dispatch, autocompletionJobsWithSkills, searchText, autocompletionJobs} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitle">
                {`"${searchText}" jobs (${autocompletionJobs?.length})`}
            </p>

            {autocompletionJobsWithSkills?.length ?
                <JobsList jobs={autocompletionJobsWithSkills} loadOnScrollEnabled={false}/> 
                : null           
            }
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