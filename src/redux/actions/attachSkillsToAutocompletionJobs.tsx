import API from "../../util/api-functions";

export const SET_AUTOCOMPLETION_JOBS_WITH_SKILLS = 'SET_AUTOCOMPLETION_JOBS_WITH_SKILLS';
export const GET_AUTOCOMPLETION_JOBS_WITH_SKILLS = 'GET_AUTOCOMPLETION_JOBS_WITH_SKILLS';

const setAutoCompletionJobsWithSkills = (autocompletionJobsWithSkills: any) => {
    return {
        type: SET_AUTOCOMPLETION_JOBS_WITH_SKILLS,
        payload: {
            autocompletionJobsWithSkills
        }
    }
}

const handleGetAndAttachSkillsToAutocompletionJobs = (autoCompletionJobs: any) => {
    return (dispatch: any) => {
        dispatch({type: GET_AUTOCOMPLETION_JOBS_WITH_SKILLS})

        API.getAndAttachSkillsToAutocompletionJobs(autoCompletionJobs)
            .then(autocompletionJobsWithSkills => {
                dispatch(setAutoCompletionJobsWithSkills(autocompletionJobsWithSkills))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}


export default handleGetAndAttachSkillsToAutocompletionJobs;