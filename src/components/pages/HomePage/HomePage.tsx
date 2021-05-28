import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import handleGetAllJobsWithSkills from '../../../actions/allJobsWithSkills';
import MainContainer from '../../../helpers/MainContainer';
import JobsList from '../../shared/JobsList';

const HomePage = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetAllJobsWithSkills());
    }, [dispatch]);


    return (
        <MainContainer>
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