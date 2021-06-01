import { JobInterface } from "../../util/api-functions";
import { GET_AUTOCOMPLETION_JOBS_WITH_SKILLS, SET_AUTOCOMPLETION_JOBS_WITH_SKILLS } from "../actions/attachSkillsToAutocompletionJobs";

// COMMON
interface InitialStateInterface{
    loading: boolean;
    error: object;
}

export interface AutocompletionJobsWithSkillsStateInterface extends InitialStateInterface{
    data: JobInterface[];
}

const initialState = {
    loading: true,
    error: {},
    data: [],
}

export const autocompletionJobsWithSkillsReducer = (autocompletionJobsWithSkillsState: any = initialState, action: any) => {
    switch(action.type){
        case GET_AUTOCOMPLETION_JOBS_WITH_SKILLS:
            return {
                loading: true,
                error: {},
                data: []
            }
        case SET_AUTOCOMPLETION_JOBS_WITH_SKILLS:
            return {
                loading: false,
                error: {},
                data: [...action.payload.autocompletionJobsWithSkills],
            }
        default:
            return autocompletionJobsWithSkillsState
    }
}