import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleGetJobsWithSkills from '../../../actions/allJobsWithSkills';
import JobsList from '../../reusable/ConnectedJobsList';

const HomePage = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkills());
    }, [dispatch]);


    return (
        <>
          <p className="xlarge-font bold homePageTitle">All Jobs</p>

          <JobsList jobs={allJobsWithSkills}/>
        </>
    );
}


const mapStateToProps = (state: any) => {
    return {
      allJobsWithSkills: state.allJobsWithSkills
    }
  }
  
const ConnectedHomePage = connect(mapStateToProps)(HomePage);
  

export default ConnectedHomePage;