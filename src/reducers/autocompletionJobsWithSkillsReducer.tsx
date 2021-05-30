import { SET_AUTOCOMPLETION_JOBS_WITH_SKILLS } from "../actions/attachSkillsToAutocompletionJobs";

export const autocompletionJobsWithSkillsReducer = (autocompletionJobsWithSkillsState: any = [], action: any) => {
    switch(action.type){
        case SET_AUTOCOMPLETION_JOBS_WITH_SKILLS: 
            return [...action.payload.autocompletionJobsWithSkills]
        default:
            return [...autocompletionJobsWithSkillsState]
    }
}