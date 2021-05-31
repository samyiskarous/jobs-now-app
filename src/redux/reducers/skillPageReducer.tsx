import { JobInterface, SkillInterface } from "../../util/api-functions";
import { GET_SKILL_PAGE_DATA, SET_SKILL_PAGE_DATA } from "../actions/getSkillPageData";

// COMMON
interface InitialStateInterface{
    loading: boolean;
    error: object;
}

interface SkillPageDataInterface{
    skill: SkillInterface;
    relatedSkills: SkillInterface[];
    relatedJobs: JobInterface[];
}

export interface SkillPageStateInterface extends InitialStateInterface{
    data: SkillPageDataInterface;
}

const initialState = {
    loading: true,
    error: {},
    data: [],
}

export const skillPageDataReducer = (skillPageState = initialState, action: any) => {
    
    switch(action.type){
        case GET_SKILL_PAGE_DATA:
            return {
                loading: true,
                error: {},
                data: [],
            }
        case SET_SKILL_PAGE_DATA: 
            return {
                loading: false,
                error: {},
                data: {...action.payload},
            }
        default:
            return skillPageState
    }
}