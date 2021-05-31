import { GET_JOBS_WITH_SKILLS_BATCH } from "../actions/allJobsWithSkills";

export const allJobsWithSkillsReducer = (allJobsWithSkillsState: any = [], action: any) => {
    switch(action.type){
        case GET_JOBS_WITH_SKILLS_BATCH: 
            return [
                ...allJobsWithSkillsState,
                ...action.payload.jobsWithSkillsBatch
            ]
        default:
            return allJobsWithSkillsState
    }
}