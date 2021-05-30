import API from "../util/api-functions";
import handleGetAndAttachSkillsToAutocompletionJobs from "./attachSkillsToAutocompletionJobs";

export const SET_AUTOCOMPLETION_JOBS = 'SET_AUTOCOMPLETION_JOBS';

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
        API.getJobsByAutocompletion(searchText)
            .then(autocompletionJobs => {
                dispatch(setAutocompletionJobs(autocompletionJobs))
                dispatch(handleGetAndAttachSkillsToAutocompletionJobs(getState().autocompletionJobs))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetJobsByAutoCompletion;