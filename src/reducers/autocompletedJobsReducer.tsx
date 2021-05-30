import { SET_AUTOCOMPLETED_JOBS_WITH_SKILLS } from "../actions/autocompleteJobsWithSkills";

export const autocompletedJobsWithSkillsReducer = (autocompletedJobsWithSkillsState: any = [], action: any) => {
    switch(action.type){
        case SET_AUTOCOMPLETED_JOBS_WITH_SKILLS: 
            return [...action.payload.autocompletedJobsWithSkills]
        default:
            return [...autocompletedJobsWithSkillsState]
    }
}