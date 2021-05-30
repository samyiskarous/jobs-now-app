import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';

const SearchJobsView = (props: any) => {

    const {dispatch, autocompletedJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitle">Found Jobs</p>

            <JobsList jobs={autocompletedJobsWithSkills} loadOnScrollEnabled={false}/>            
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        autocompletedJobsWithSkills: state.autocompletedJobsWithSkills
    }
}
  
const ConnectedSearchJobsView = connect(mapStateToProps)(SearchJobsView);

export default ConnectedSearchJobsView;