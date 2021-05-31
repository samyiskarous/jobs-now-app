import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../redux/actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';

const AllJobsView = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings">All Jobs</p>

            <JobsList jobs={allJobsWithSkills}/>            
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        allJobsWithSkills: state.allJobsWithSkills
    }
}
  
const ConnectedAllJobsView = connect(mapStateToProps)(AllJobsView);

export default ConnectedAllJobsView;