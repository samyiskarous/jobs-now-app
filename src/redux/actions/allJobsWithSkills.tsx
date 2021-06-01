import API from "../../util/api-functions";

export const SET_JOBS_WITH_SKILLS_BATCH = 'SET_JOBS_WITH_SKILLS_BATCH';

const getJobsWithSkillsBatch = (jobsWithSkillsBatch: any) => {
    return {
        type: SET_JOBS_WITH_SKILLS_BATCH,
        payload: {
            jobsWithSkillsBatch
        }
    }
}

const handleGetJobsWithSkillsBatch = (nextPage: number = 0, jobsCount: number = 12) => {
    return (dispatch: any) => {
        API.getJobsWithSkills(nextPage, jobsCount)
            .then(jobsWithSkillsBatch => {
                dispatch(getJobsWithSkillsBatch(jobsWithSkillsBatch))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetJobsWithSkillsBatch;