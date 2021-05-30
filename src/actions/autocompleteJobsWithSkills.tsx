import API from "../util/api-functions";

export const SET_AUTOCOMPLETED_JOBS_WITH_SKILLS = 'SET_AUTOCOMPLETED_JOBS_WITH_SKILLS';

const setAutocompletedJobsWithSkills = (autocompletedJobsWithSkills: any) => {
    return {
        type: SET_AUTOCOMPLETED_JOBS_WITH_SKILLS,
        payload: {
            autocompletedJobsWithSkills
        }
    }
}

const handleGetAutocompletedJobsWithSkills = (searchText: string) => {
    return (dispatch: any) => {
        API.getAutocompletedJobsWithSkills(searchText)
            .then(autocompletedJobsWithSkills => {
                dispatch(setAutocompletedJobsWithSkills(autocompletedJobsWithSkills))
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default handleGetAutocompletedJobsWithSkills;