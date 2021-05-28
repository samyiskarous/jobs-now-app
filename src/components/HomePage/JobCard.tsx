import React from 'react'

interface JobCardInterface{
    job: any
}

const JobCard = (props: JobCardInterface) => {
    return <h5>{props.job.title}</h5>
}

export default JobCard;