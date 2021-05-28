import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import handleGetJobsWithSkills from '../../../actions/allJobsWithSkills';
import JobCard from './JobCard';
import './styles.css'

interface JobsListPropsInterface{
    jobs: any
    dispatch?: any
}

const JobsList = (props: JobsListPropsInterface) => {
    const {dispatch, jobs} = props;
    const [currentPage, setCurrentPage] = useState<number>(0);
    const jobsLimit = 50;

    const callHandleGetJobsWithSkills = () => {
        dispatch(handleGetJobsWithSkills(currentPage+1, jobsLimit, false));
        setCurrentPage(currentPage => currentPage + 1);
    }

    return (
        <div className="jobsListContainer">
            <InfiniteScroll
                dataLength={jobs.length}
                next={callHandleGetJobsWithSkills}
                hasMore={jobs.length ? true : false}
                loader={<h4>Loading...</h4>}
            >
                {jobs.map((job: any, index: number) => {
                    return <JobCard key={index} job={job}/>
                })}
            </InfiniteScroll>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return state;
}

const ConnectedJobsList = connect(mapStateToProps)(JobsList);

export default ConnectedJobsList;
