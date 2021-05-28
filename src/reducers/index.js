import { combineReducers } from "redux";
import {allJobsWithSkillsReducer} from './allJobsWithSkillsReducer'

const rootReducer = combineReducers({
    allJobsWithSkills: allJobsWithSkillsReducer
});

export default rootReducer;