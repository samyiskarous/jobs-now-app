import API from "../util/api-functions";

export const GET_JOBS_WITH_SKILLS_BATCH = 'GET_JOBS_WITH_SKILLS_BATCH';
export const GET_MORE_JOBS_WITH_SKILLS = 'GET_MORE_JOBS_WITH_SKILLS';

const getJobsWithSkillsBatch = (jobsWithSkillsBatch: any) => {
    return {
        type: GET_JOBS_WITH_SKILLS_BATCH,
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