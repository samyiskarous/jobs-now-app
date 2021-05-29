import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import handleGetJobsWithSkills from '../../../actions/allJobsWithSkills';
import JobsList from '../../reusable/ConnectedJobsList';
import SearchPage from '../SearchPage';
import './styles.css'

const HomePage = (props: any) => {

    const {dispatch, allJobsWithSkills} = props;

    useEffect(() => {
        dispatch(handleGetJobsWithSkills());
    }, [dispatch]);


    return (
        <>
          <p className="xlarge-font bold homePageTitle">All Jobs</p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <JobsList jobs={allJobsWithSkills}/>

            <Switch>
              <Route exact path="/search">
                <SearchPage/>
              </Route>
            </Switch>
          </div>
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