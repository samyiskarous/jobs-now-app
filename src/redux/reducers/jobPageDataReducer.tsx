import { JobInterface, RelatedJobInterface } from "../../util/api-functions";
import { GET_JOB_PAGE_DATA, JOB_PAGE_DATA_HAS_ERROR, SET_JOB_PAGE_DATA } from "../actions/getJobPageData";

// COMMON
interface InitialStateInterface{
    loading: boolean;
    error: string;
}

interface JobPageDataInterface{
    jobWithSkills: JobInterface;
    relatedJobs: RelatedJobInterface[];
}

export interface JobPageStateInterface extends InitialStateInterface{
    data: JobPageDataInterface;
}

const initialState = {
    loading: true,
    error: {},
    data: "",
}

export const jobPageDataReducer = (jobPageState = initialState, action: any) => {
    
    switch(action.type){
        case GET_JOB_PAGE_DATA:
            return {
                loading: true,
                error: {},
                data: [],
            }
        case SET_JOB_PAGE_DATA: 
            return {
                loading: false,
                error: {},
                data: {...action.payload},
            }
        case JOB_PAGE_DATA_HAS_ERROR:
            return {
                loading: false,
                error: action.payload,
                data: [],
            }
        default:
            return jobPageState
    }
}