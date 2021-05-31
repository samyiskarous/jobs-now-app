import API, { SkillInterface } from "../../util/api-functions";

export const GET_SKILL_PAGE_DATA = 'GET_SKILL_PAGE_DATA';
export const SET_SKILL_PAGE_DATA = 'SET_SKILL_PAGE_DATA';

const setSkillPageData = (skill: SkillInterface, relatedSkills: any, relatedJobs: any) => {                    
    return {
        type: SET_SKILL_PAGE_DATA,
        payload: {
            skill,
            relatedSkills,
            relatedJobs
        }
    }
}

const getAndSetSkillPageData = (skillUUID: string) => {
    return (dispatch: any, getState: any) => {

        // Loading
        dispatch({type: GET_SKILL_PAGE_DATA})

        API.getSkill(skillUUID)
            .then(skill => {
                API.getRelatedSkillsToSkill(skillUUID).then(relatedSkills => {
                    API.getRelatedJobsToSkill(skillUUID).then(relatedJobs => {
                        dispatch(setSkillPageData(skill, relatedSkills, relatedJobs));
                    })
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }   
}

export default getAndSetSkillPageData;