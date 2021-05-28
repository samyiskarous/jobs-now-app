import { GET_ALL_JOBS_WITH_SKILLS } from "../actions/allJobsWithSkills";

export const allJobsWithSkillsReducer = (state: any = [], action: any) => {
    switch(action.type){
        case GET_ALL_JOBS_WITH_SKILLS: 
            return action.payload.allJobsWithSkills
        default:
            return state
    }
}