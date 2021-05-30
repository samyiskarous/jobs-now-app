import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

interface JobCardInterface{
    job?: any,
}

const JobCard = (props: JobCardInterface) => {
    const {job} = props;

    return (
        <div className="jobCard">
            {/* Card Title */}
            <p className="large-font bold">{job.title || job.suggestion}</p>
            
            {/* Required Skills */}

            <div className="requiredSkillsSection">
                <p className="medium-font">Required Skills:</p>
                <div className="skillsBadgesContainer">
                    {job?.skills === undefined ? 'None' : (

                        job?.skills?.map((skill: any, index: number) => {
                            return (
                                <span key={index} className="skillBadge">
                                    <Link to="#" className="skillBadgeLink">
                                        {skill.skill_name}
                                    </Link>
                                </span>
                            )
                        })
                    )}
                </div>
            </div>

            <Link to="#" className="plainLink"><span className="medium-font">View Job Details</span></Link>
        </div>
    );
}

export default JobCard;