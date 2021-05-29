const endpoint = process.env.REACT_APP_API_ENDPOINT;

// Not used directly
const getAllJobs = (nextPage = 0, jobsLimit = 12) => {
    return fetch(`${endpoint}jobs?offset=${nextPage}&limit=${jobsLimit}`)
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                console.log('error', error)
            });
}

// START: API invocations
const API: APIInterface = {
    getJobSkills: (jobUUID) => {
        return fetch(`${endpoint}jobs/${jobUUID}/related_skills`)
                .then(response => response.json())
                .then(data => data.skills?.slice(1, 7))
                .catch((error) => {
                    console.log('error', error)
                });
    },
    getJobsWithSkills: (nextPage = 0, jobsLimit = 12) => {
        return getAllJobs(nextPage, jobsLimit).then(async jobs => {
            let jobsWithSkillsBatch: JobInterface[] = [];
    
            // Last item in the jobs data is not needed
            jobs.splice(jobs.length-1, 1)
            
            for(let index = 0; index < jobs.length; index ++){
                await API.getJobSkills(jobs[index].uuid)
                            .then(jobSkills => {
                                const jobWithSkills = {
                                    ...jobs[index],
                                    skills: jobSkills
                                };
                                jobsWithSkillsBatch.push(jobWithSkills);               
                })
            }
    
            return jobsWithSkillsBatch;
        });
    },
    getJob: (jobUUID) => {
        return fetch(`${endpoint}jobs/${jobUUID}`)
                .then(response => response.json())
                .then(data => data)
                .catch((error) => {
                    console.log('error', error)
                });
    },
    getRelatedJobsToJob: (jobUUID) => {
        return fetch(`${endpoint}jobs/${jobUUID}/related_jobs`)
                .then(response => response.json())
                .then(data => data.jobs)
                .catch((error) => {
                    console.log('error', error)
                });
    },
    getRelatedJobsToSkill: (skillUUID) => {
        return fetch(`${endpoint}skills/${skillUUID}/related_jobs`)
                .then(response => response.json())
                .then(data => data.jobs)
                .catch((error) => {
                    console.log('error', error)
                });
    },
    getRelatedSkillsToSkill: (skillUUID) => {
        return fetch(`${endpoint}skills/${skillUUID}/related_skills`)
                .then(response => response.json())
                .then(data => data.skills)
                .catch((error) => {
                    console.log('error', error)
                });
    },
    getAutocompleteListForJobs: (jobTitle = "") => {
        return fetch(`${endpoint}jobs/autocomplete?begins_with=${jobTitle}&contains=${jobTitle}&ends_with=${jobTitle}`)
                .then(response => response.json())
                .then(data => data)
                .catch((error) => {
                    console.log('error', error)
                });
    }
} 
// END: API invocations

// START: Data Interfaces
interface APIInterface{
    getJobSkills: (jobUUID: string) => Promise<SkillInterface[]>;
    getJobsWithSkills: (nextPage?: number, jobsLimit?: number) => Promise<JobInterface[]>;
    getJob: (jobUUID: string) => Promise<JobInterface>;
    getRelatedJobsToJob: (jobUUID: string) => Promise<JobInterface[]>;
    getRelatedJobsToSkill: (skillUUID: string) => Promise<JobInterface[]>;
    getRelatedSkillsToSkill: (skillUUID: string) => Promise<SkillInterface[]>;
    getAutocompleteListForJobs: (jobTitle: string) => Promise<JobAutocompleteInterface[]>;
}

interface SkillInterface{
    description: string;
    importance: number;
    level: number;
    normalized_skill_name: string;
    skill_name: string;
    skill_type: string;
    skill_uuid: string;
}

export interface JobInterface{
    normalized_job_title: string;
    parent_uuid: string;
    skills?: SkillInterface[];
    title: string;
    uuid: string;
}

interface JobAutocompleteInterface{
    uuid: string;
    title: string;
    normalized_job_title: string;
    parent_uuid: string;
}
// END: Data Interfaces

export default API;