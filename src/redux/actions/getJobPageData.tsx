import API, { JobInterface, RelatedJobInterface } from "../../util/api-functions";

export const GET_JOB_PAGE_DATA = 'GET_JOB_PAGE_DATA';
export const SET_JOB_PAGE_DATA = 'SET_JOB_PAGE_DATA';
export const JOB_PAGE_DATA_HAS_ERROR = 'JOB_PAGE_DATA_HAS_ERROR';


export interface JobPageStateInterface{
    jobWithSkills: JobInterface;
    relatedJobs: RelatedJobInterface[];
}

const setJobPageData = (jobWithSkills: any, relatedJobs: any) => {                    
    return {
        type: SET_JOB_PAGE_DATA,
        payload: {
            jobWithSkills,
            relatedJobs
        }
    }
}


const getAndSetJobPageData = (jobUUID: string) => {
    return (dispatch: any, getState: any) => {

        // Loading
        dispatch({type: GET_JOB_PAGE_DATA})

        API.getJobWithSkills(jobUUID)
            .then(jobWithSkills => {
                console.log(jobWithSkills);
                API.getRelatedJobsToJob(jobUUID).then((relatedJobs) => {
                    dispatch(setJobPageData(jobWithSkills, relatedJobs));
                })
            }).catch((error: any) => {
                console.log('HEEEY',error)
                dispatch({type: JOB_PAGE_DATA_HAS_ERROR, payload: error.message})
            })
    }   
}

export default getAndSetJobPageData;