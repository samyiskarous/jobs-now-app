import API from "../util/api-functions";

export const GET_JOBS_WITH_SKILLS = 'GET_JOBS_WITH_SKILLS';
export const GET_MORE_JOBS_WITH_SKILLS = 'GET_MORE_JOBS_WITH_SKILLS';

const getJobsWithSkills = (jobsWithSkills: any) => {
    return {
        type: GET_JOBS_WITH_SKILLS,
        payload: {
            jobsWithSkills
        }
    }
}

const getMoreJobsWithSkills = (moreJobsWithSkills: any) => {
    return {
        type: GET_MORE_JOBS_WITH_SKILLS,
        payload: {
            moreJobsWithSkills
        }
    }
}

const handleGetJobsWithSkills = (nextPage: number = 0, jobsCount: number = 12, firstFetch: boolean = true) => {
    return (dispatch: any) => {
        API.getJobsWithSkills(nextPage, jobsCount)
            .then(jobsWithSkills => {
                if(firstFetch)
                    dispatch(getJobsWithSkills(jobsWithSkills))
                else{
                    dispatch(getMoreJobsWithSkills(jobsWithSkills))
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetJobsWithSkills;