import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../redux/actions/allJobsWithSkills';
import { AllJobsWithSkillsStateInterface } from '../../../../redux/reducers/allJobsWithSkillsReducer';
import JobsList from '../../../reusable/JobsList';

interface AllJobsViewPropsInterface{
    allJobsWithSkillsState: AllJobsWithSkillsStateInterface;
    callHandleGetJobsWithSkillsBatch: () => void
}

const AllJobsView = (props: AllJobsViewPropsInterface) => {

    const {callHandleGetJobsWithSkillsBatch, allJobsWithSkillsState} = props;

    useEffect(() => {
        callHandleGetJobsWithSkillsBatch();
    }, [callHandleGetJobsWithSkillsBatch]);

    if(allJobsWithSkillsState.loading)
        return null;

    return (
        <>
            <p className="xlarge-font bold mainPageTitleSpacings alignTextCenterResponsive">All Jobs</p>

            <JobsList jobs={allJobsWithSkillsState.data}/>            
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        allJobsWithSkillsState: state.allJobsWithSkillsState
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