import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../redux/actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';

const AllJobsView = (props: any) => {

    const {callHandleGetJobsWithSkillsBatch, allJobsWithSkills} = props;

    useEffect(() => {
        callHandleGetJobsWithSkillsBatch();
    }, [callHandleGetJobsWithSkillsBatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings alignTextCenterResponsive">All Jobs</p>

            <JobsList jobs={allJobsWithSkills}/>            
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        allJobsWithSkills: state.allJobsWithSkills
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        callHandleGetJobsWithSkillsBatch: () => {
            dispatch(handleGetJobsWithSkillsBatch())
        }
    }
}
  
const ConnectedAllJobsView = connect(mapStateToProps, mapDispatchToProps)(AllJobsView);

export default ConnectedAllJobsView;