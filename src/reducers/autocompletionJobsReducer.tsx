import { SET_AUTOCOMPLETION_JOBS } from "../actions/getJobsByAutocompletion";

export const autocompletionJobsReducer = (autocompletionJobsState: any = [], action: any) => {
    switch(action.type){
        case SET_AUTOCOMPLETION_JOBS: 
            return [...action.payload.autocompletionJobs]
        default:
            return [...autocompletionJobsState]
    }
}