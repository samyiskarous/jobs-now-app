import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleGetJobsWithSkills from '../../../actions/allJobsWithSkills';
import MainContainer from '../../shared/MainContainer';
import JobsList from '../../reusable/ConnectedJobsList';

const HomePage = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkills());
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