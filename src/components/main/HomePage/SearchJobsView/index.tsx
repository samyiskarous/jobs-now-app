import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';

interface SearchJobsViewPropsInterface{
    searchText: string;
    dispatch?: any;
    autocompletedJobsWithSkills?: any;
}

const SearchJobsView = (props: SearchJobsViewPropsInterface) => {

    const {dispatch, autocompletedJobsWithSkills, searchText} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitle">
                {`"${searchText}" jobs (${autocompletedJobsWithSkills.length})`}
            </p>

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