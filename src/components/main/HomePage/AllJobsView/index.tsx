import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';
import './styles.css'

const AllJobsView = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitle">All Jobs</p>

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