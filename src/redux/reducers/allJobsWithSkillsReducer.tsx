import { JobInterface } from "../../util/api-functions";
import { SET_JOBS_WITH_SKILLS_BATCH } from "../actions/allJobsWithSkills";

// COMMON
interface InitialStateInterface{
    loading: boolean;
    error: object;
}

export interface AllJobsWithSkillsStateInterface extends InitialStateInterface{
    data: JobInterface[];
}

const initialState = {
    loading: true,
    error: {},
    data: [],
}

export const allJobsWithSkillsReducer = (allJobsWithSkillsState: any = initialState, action: any) => {
    switch(action.type){
        case SET_JOBS_WITH_SKILLS_BATCH:
            return {
                loading: false,
                error: {},
                data: [
                    ...allJobsWithSkillsState.data,
                    ...action.payload.jobsWithSkillsBatch
                ],
            }
        default:
            return allJobsWithSkillsState
    }
}