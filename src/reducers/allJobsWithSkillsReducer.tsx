import { GET_JOBS_WITH_SKILLS, GET_MORE_JOBS_WITH_SKILLS } from "../actions/allJobsWithSkills";

export const allJobsWithSkillsReducer = (state: any = [], action: any) => {
    switch(action.type){
        // Called on first render
        case GET_JOBS_WITH_SKILLS: 
            return action.payload.jobsWithSkills
        // Called upon scrolling
        case GET_MORE_JOBS_WITH_SKILLS:{
            // console.log(action.payload.moreJobsWithSkills)
            return [
                    ...state,
                    ...action.payload.moreJobsWithSkills
                ]
        }
        default:
            return state
    }
}