import API, { SkillInterface } from "../../util/api-functions";

export const GET_SKILL_PAGE_DATA = 'GET_SKILL_PAGE_DATA';
export const SET_SKILL_PAGE_DATA = 'SET_SKILL_PAGE_DATA';
export const SKILL_PAGE_DATA_HAS_ERROR = 'SKILL_PAGE_DATA_HAS_ERROR'

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
            .then((skill: any) => {
                API.getRelatedSkillsToSkill(skillUUID).then(relatedSkills => {
                    API.getRelatedJobsToSkill(skillUUID).then(relatedJobs => {
                        dispatch(setSkillPageData(skill, relatedSkills, relatedJobs));
                    }).catch(error => {
                        console.log('3rd', error)
                    })
                }).catch(error => {
                    console.log('2nd', error)
                })
            }).catch((error: any) => {
                dispatch({type: SKILL_PAGE_DATA_HAS_ERROR, payload: error.message})
            })
    }   
}

export default getAndSetSkillPageData;