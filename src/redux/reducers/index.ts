import { combineReducers } from "redux";
import { JobPageStateInterface } from "../actions/getJobPageData";
import {allJobsWithSkillsReducer, AllJobsWithSkillsStateInterface} from './allJobsWithSkillsReducer'
import { autocompletionJobsReducer, AutocompletionJobsStateInterface } from "./autocompletionJobsReducer";
import { autocompletionJobsWithSkillsReducer, AutocompletionJobsWithSkillsStateInterface } from "./autocompletionJobsWithSkillsReducer";
import { jobPageDataReducer } from "./jobPageDataReducer";
import { skillPageDataReducer, SkillPageStateInterface } from "./skillPageReducer";

export interface RootReducerInterface{
    allJobsWithSkillsState: AllJobsWithSkillsStateInterface;
    autocompletionJobsState: AutocompletionJobsStateInterface,
    autocompletionJobsWithSkillsState: AutocompletionJobsWithSkillsStateInterface,
    jobPageState: JobPageStateInterface,
    skillPageState: SkillPageStateInterface,
}

const rootReducer = combineReducers({
    allJobsWithSkillsState: allJobsWithSkillsReducer,
    autocompletionJobsState: autocompletionJobsReducer,
    autocompletionJobsWithSkillsState: autocompletionJobsWithSkillsReducer,
    jobPageState: jobPageDataReducer,
    skillPageState: skillPageDataReducer,
});

export default rootReducer;