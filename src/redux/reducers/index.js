import { combineReducers } from "redux";
import {allJobsWithSkillsReducer} from './allJobsWithSkillsReducer'
import { autocompletionJobsReducer } from "./autocompletionJobsReducer";
import { autocompletionJobsWithSkillsReducer } from "./autocompletionJobsWithSkillsReducer";
import { jobPageDataReducer } from "./jobPageDataReducer";
import { skillPageDataReducer } from "./skillPageReducer";

const rootReducer = combineReducers({
    allJobsWithSkills: allJobsWithSkillsReducer,
    autocompletionJobs: autocompletionJobsReducer,
    autocompletionJobsWithSkills: autocompletionJobsWithSkillsReducer,
    jobPageState: jobPageDataReducer,
    skillPageState: skillPageDataReducer,
});

export default rootReducer;