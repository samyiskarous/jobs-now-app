import React from 'react'
import '../reusable/JobsList/JobCard/styles.css'

const JobCardSkeleton = () => {

    return (
        <div className="jobCard">
            {/* Job Title .............*/}
            
            {/* Required Skills */}
            <div className="requiredSkillsSection">
                <p className="medium-font">Required Skills:</p>
                <div className="skillsBadgesContainer">
                    {/* Skills Badges .......*/}
                </div>
            </div>

            {/* Link ..........*/}
        </div>
    );
}

export default JobCardSkeleton;