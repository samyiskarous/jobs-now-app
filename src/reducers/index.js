import { combineReducers } from "redux";
import {allJobsWithSkillsReducer} from './allJobsWithSkillsReducer'
import { autocompletedJobsWithSkillsReducer } from "./autocompletedJobsReducer";

const rootReducer = combineReducers({
    allJobsWithSkills: allJobsWithSkillsReducer,
    autocompletedJobsWithSkills: autocompletedJobsWithSkillsReducer
});

export default rootReducer;