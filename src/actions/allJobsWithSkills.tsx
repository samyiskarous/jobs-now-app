import API from "../util/api-functions";

export const GET_ALL_JOBS_WITH_SKILLS = 'GET_ALL_JOBS_WITH_SKILLS';

const getAllJobsWithSkills = (allJobsWithSkills: any) => {
    return {
        type: GET_ALL_JOBS_WITH_SKILLS,
        payload: {
            allJobsWithSkills
        }
    }
}

const handleGetAllJobsWithSkills = () => {
    return (dispatch: any) => {
        API.getAllJobsWithSkills()
            .then(allJobsWithSkills => {
                console.log(allJobsWithSkills)
                dispatch(getAllJobsWithSkills(allJobsWithSkills))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetAllJobsWithSkills;