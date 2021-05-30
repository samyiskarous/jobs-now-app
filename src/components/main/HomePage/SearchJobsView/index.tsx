import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import handleGetJobsWithSkillsBatch from '../../../../actions/allJobsWithSkills';
import JobsList from '../../../reusable/JobsList';

interface SearchJobsViewPropsInterface{
    searchText: string;
    dispatch?: any;
    autocompletionJobsWithSkills?: any;
}

const SearchJobsView = (props: SearchJobsViewPropsInterface) => {

    const {dispatch, autocompletionJobsWithSkills, searchText} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkillsBatch());
    }, [dispatch]);

    return (
        <>
            <p className="xlarge-font bold mainPageTitle">
                {`"${searchText}" jobs (${autocompletionJobsWithSkills?.length})`}
            </p>

            {autocompletionJobsWithSkills?.length && 
                <JobsList jobs={autocompletionJobsWithSkills} loadOnScrollEnabled={false}/>            
            }
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        autocompletionJobsWithSkills: state.autocompletionJobsWithSkills
    }
}
  
const ConnectedSearchJobsView = connect(mapStateToProps)(SearchJobsView);

export default ConnectedSearchJobsView;