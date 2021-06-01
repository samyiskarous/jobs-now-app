import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import {useMediaQuery} from 'react-responsive'

interface JobCardInterface{
    job?: any,
}

const JobCard = (props: JobCardInterface) => {
    const {job} = props;

    let isTabletOrMobile = useMediaQuery({maxWidth: '1300px'})
    const skillsBadgesCount = isTabletOrMobile ? 3 : job?.skills?.length;
    return (
        <div className="jobCard">
            {/* Card Title */}
            <p className="large-font bold jobCardTitle">{job.title || job.suggestion}</p>
            
            {/* Required Skills */}

            <div className="requiredSkillsSection">
                <p className="medium-font">Required Skills:</p>
                <div className="skillsBadgesContainer">
                    {job?.skills === undefined ? 'None' : (

                        job?.skills?.slice(0, skillsBadgesCount).map((skill: any, index: number) => {
                            return (
                                <span key={index} className="skillBadge">
                                    <Link to={`skills/${skill.skill_uuid}`} className="skillBadgeLink">
                                        {skill.skill_name}
                                    </Link>
                                </span>
                            )
                        })
                    )}
                </div>
            </div>

            <Link to={`jobs/${job.uuid}`} className="plainLink"><span className="medium-font">View Job Details</span></Link>
        </div>
    );
}

export default JobCard;