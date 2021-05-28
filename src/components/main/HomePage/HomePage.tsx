import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleGetAllJobsWithSkills from '../../../actions/allJobsWithSkills';
import MainContainer from '../../shared/MainContainer';
import JobsList from '../../reusable/JobsList';

const HomePage = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetAllJobsWithSkills());
    }, [dispatch]);


    return (
        <MainContainer title="All Jobs">
          <JobsList jobs={allJobsWithSkills}/>
        </MainContainer>
    );
}


const mapStateToProps = (state: any) => {
    return {
      allJobsWithSkills: state.allJobsWithSkills
    }
  }
  
const ConnectedHomePage = connect(mapStateToProps)(HomePage);
  

export default ConnectedHomePage;