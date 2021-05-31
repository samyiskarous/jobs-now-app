import API, { JobInterface, RelatedJobInterface } from "../../util/api-functions";

export const GET_JOB_PAGE_DATA = 'GET_JOB_PAGE_DATA';
export const SET_JOB_PAGE_DATA = 'SET_JOB_PAGE_DATA';


export interface JobPageDataInterface{
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
                API.getRelatedJobsToJob(jobUUID).then((relatedJobs) => {
                    dispatch(setJobPageData(jobWithSkills, relatedJobs));
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default getAndSetJobPageData;