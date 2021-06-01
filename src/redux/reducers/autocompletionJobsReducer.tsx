import { JobInterface } from "../../util/api-functions";
import { SET_AUTOCOMPLETION_JOBS, GET_AUTOCOMPLETION_JOBS } from "../actions/getJobsByAutocompletion";

// COMMON
interface InitialStateInterface{
    loading: boolean;
    error: object;
}

export interface AutocompletionJobsStateInterface extends InitialStateInterface{
    data: JobInterface[];
}

const initialState = {
    loading: true,
    error: {},
    data: [],
}

export const autocompletionJobsReducer = (autocompletionJobsState: any = initialState, action: any) => {
    switch(action.type){
        case GET_AUTOCOMPLETION_JOBS:
            return {
                loading: true,
                error: {},
                data: []
            }
        case SET_AUTOCOMPLETION_JOBS:
            return {
                loading: false,
                error: {},
                data: [...action.payload.autocompletionJobs]
            }
        default:
            return autocompletionJobsState
    }
}