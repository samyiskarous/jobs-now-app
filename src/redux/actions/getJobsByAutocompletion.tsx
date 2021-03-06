import API from "../../util/api-functions";
import handleGetAndAttachSkillsToAutocompletionJobs from "./attachSkillsToAutocompletionJobs";

export const SET_AUTOCOMPLETION_JOBS = 'SET_AUTOCOMPLETION_JOBS';
export const GET_AUTOCOMPLETION_JOBS = 'GET_AUTOCOMPLETION_JOBS';

const setAutocompletionJobs = (autocompletionJobs: any) => {
    return {
        type: SET_AUTOCOMPLETION_JOBS,
        payload: {
            autocompletionJobs
        }
    }
}

const handleGetJobsByAutoCompletion = (searchText: string) => {
    return (dispatch: any, getState: any) => {
        dispatch({type: GET_AUTOCOMPLETION_JOBS})

        API.getJobsByAutocompletion(searchText)
            .then(autocompletionJobs => {
                // Save Jobs without skills to use for counting
                dispatch(setAutocompletionJobs(autocompletionJobs))
                // Use the Jobs without skills to get their Skills.
                dispatch(handleGetAndAttachSkillsToAutocompletionJobs(getState().autocompletionJobsState.data))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetJobsByAutoCompletion;