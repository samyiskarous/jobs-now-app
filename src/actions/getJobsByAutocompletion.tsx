import API from "../util/api-functions";

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
    return (dispatch: any) => {
        API.getJobsByAutocompletion(searchText)
            .then(autocompletionJobs => {
                dispatch(setAutocompletionJobs(autocompletionJobs))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetJobsByAutoCompletion;