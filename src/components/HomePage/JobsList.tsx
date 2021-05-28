import React from 'react'
import JobCard from './JobCard';

interface JobsListInterface{
    jobs: any
}

const JobsList = (props: JobsListInterface) => {
    console.log(props.jobs)

    return (
        props.jobs.map((job: any, index: number) => {
            return <JobCard key={index} job={job}/>
        })
    );
}

export default JobsList;