import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import handleGetJobsWithSkills from '../../../actions/allJobsWithSkills';
import JobCard from './JobCard';
import './styles.css'

interface JobsListPropsInterface{
    jobs: any
    dispatch?: any
    loadOnScrollEnabled?: boolean
}

// This component is used mutually for Viewing All-Jobs or Searched-for-Jobs

const JobsList = (props: JobsListPropsInterface) => {
    const {dispatch, jobs, loadOnScrollEnabled = true} = props;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const jobsLimit = 12;

    const dispatchHandleGetJobsWithSkills = () => {
        dispatch(handleGetJobsWithSkills((currentPage + 1), jobsLimit));
        setCurrentPage(currentPage => currentPage + 1);
    }

    return (
        <div className="jobsListContainer">
            {loadOnScrollEnabled ? (
                <InfiniteScroll
                    dataLength={jobs.length}
                    next={dispatchHandleGetJobsWithSkills}
                    // Only start getting more on-scrolling after the first render
                    hasMore={jobs.length ? true : false}
                    loader={<h4>Loading...</h4>}
                >
                    {jobs.map((job: any, index: number) => {
                        return <JobCard key={index} job={job}/>
                    })}
                </InfiniteScroll>
            ) : (
                jobs.map((job: any, index: number) => {
                    return <JobCard key={index} job={job}/>
                })
            )}
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedJobsList = connect(mapStateToProps)(JobsList);

export default ConnectedJobsList;
