import React from 'react'
import JobCard from './JobCard';
import './styles.css'

interface JobsListInterface{
    jobs: any
}

const JobsList = (props: JobsListInterface) => {
    return (
        <div className="jobsListContainer">
            {props.jobs.map((job: any, index: number) => {
                return <JobCard key={index} job={job}/>
            })}
        </div>
    );
}

export default JobsList;