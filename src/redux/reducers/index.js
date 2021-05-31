import { combineReducers } from "redux";
import {allJobsWithSkillsReducer} from './allJobsWithSkillsReducer'
import { autocompletionJobsReducer } from "./autocompletionJobsReducer";
import { autocompletionJobsWithSkillsReducer } from "./autocompletionJobsWithSkillsReducer";

const rootReducer = combineReducers({
    allJobsWithSkills: allJobsWithSkillsReducer,
    autocompletionJobs: autocompletionJobsReducer,
    autocompletionJobsWithSkills: autocompletionJobsWithSkillsReducer,
    // job,
    // skill
});

export default rootReducer;