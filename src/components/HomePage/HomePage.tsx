import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleGetAllJobsWithSkills from '../../actions/allJobsWithSkills';
import JobsList from './JobsList';

const HomePage = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetAllJobsWithSkills());
    }, [dispatch]);


    return (
        <JobsList jobs={allJobsWithSkills}/>
    );
}


const mapStateToProps = (state: any) => {
    return {
      allJobsWithSkills: state.allJobsWithSkills
    }
  }
  
const ConnectedHomePage = connect(mapStateToProps)(HomePage);
  

export default ConnectedHomePage;