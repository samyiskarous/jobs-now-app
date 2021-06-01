const endpoint = process.env.REACT_APP_API_ENDPOINT;

//START: Functions not for direct usage
const getAllJobs = (nextPage = 0, jobsLimit = 12) => {
    return fetch(`${endpoint}jobs?offset=${nextPage}&limit=${jobsLimit}`)
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                console.log('error', error)
            });
}
// END: Functions not for direct usage

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
    getSkill: (skillUUID: string) => {
        return fetch(`${endpoint}skills/${skillUUID}`)
                .then(response => response.json())
                .then(skill => {
                    if(skill.error !== undefined)
                        throw new Error(skill.error.message)
                    else{
                        return skill;
                    }
                })
                .catch((error) => {
                    throw new Error(error);
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
    getJobsByAutocompletion: (searchText: string) => {
        return fetch(`${endpoint}jobs/autocomplete?begins_with=${searchText}&contains=${searchText}&ends_with=${searchText}`)
                .then(response => response.json())
                .then(data => data)
                .catch((error) => {
                    console.log('error', error)
                });
    },
    getAndAttachSkillsToAutocompletionJobs: async (jobsMissingSkills: JobInterface[]) => {
            let jobsWithSkills: JobInterface[] = [];

            for(let index = 0; index < jobsMissingSkills.length; index ++){
                await API.getJobSkills(jobsMissingSkills[index].uuid)
                            .then(jobSkills => {
                                const jobWithSkills = {
                                    ...jobsMissingSkills[index],
                                    skills: jobSkills
                                };
                                jobsWithSkills.push(jobWithSkills);               
                })
            }
    
            return jobsWithSkills;
    },
    getJobWithSkills: (jobUUID) => {
        let jobWithSkills: JobInterface;
        return fetch(`${endpoint}jobs/${jobUUID}`)
                .then(response => response.json())
                .then(async job => {
                    if(job.error !== undefined){
                        throw new Error(job.error.message);
                    }else{
                        await API.getJobSkills(jobUUID).then(jobSkills => {
                            jobWithSkills = {
                                ...job,
                                skills: jobSkills
                            }
                        })
                        
                        return jobWithSkills
                    }
                
                })
                .catch((error) => {
                    throw new Error(error.message);
                });
    },
    getRelatedJobsToJob: (jobUUID) => {
        return fetch(`${endpoint}jobs/${jobUUID}/related_jobs`)
                .then(response => response.json())
                .then((data: RelatedJobsToJobResponseInterface) => data.related_job_titles.slice(0, 15))
                .catch((error) => {
                    console.log('error', error)
                });
    },

    getRelatedJobsToSkill: (skillUUID) => {
        return fetch(`${endpoint}skills/${skillUUID}/related_jobs`)
                .then(response => response.json())
                .then(data => data.jobs.slice(0, 10))
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
    }
} 
// END: API invocations

// START: Data Interfaces
interface APIInterface{
    getJobSkills: (jobUUID: string) => Promise<SkillInterface[]>;
    getSkill: (skillUUID: string) => any;
    getJobsWithSkills: (nextPage?: number, jobsLimit?: number) => Promise<JobInterface[]>;

    getJobsByAutocompletion: (searchText: string) => Promise<JobInterface>
    getAndAttachSkillsToAutocompletionJobs: (jobsMissingSkills: JobInterface[]) => Promise<JobInterface[]>;
    
    getJobWithSkills: (jobUUID: string) => Promise<JobInterface | void>;
    getRelatedJobsToJob: (jobUUID: string) => Promise<RelatedJobInterface[] | void>;
    getRelatedJobsToSkill: (skillUUID: string) => Promise<JobInterface[]>;
    getRelatedSkillsToSkill: (skillUUID: string) => Promise<SkillInterface[]>;
}

export interface SkillInterface{
    description: string;
    importance: number;
    level: number;
    normalized_skill_name: string;
    skill_name: string;
    skill_type: string;
    skill_uuid: string;
    uuid: string;
}

export interface JobInterface{
    normalized_job_title: string;
    parent_uuid: string;
    skills: SkillInterface[];
    title: string;
    job_title: string;
    uuid: string;
    job_uuid: string;
    suggestion: string;
}

interface RelatedJobsToJobResponseInterface{
    uuid: string,
    related_job_titles: RelatedJobInterface[]
}

export interface RelatedJobInterface{
    uuid: string,
    title: string,
    parent_uuid: string
}

// END: Data Interfaces

export default API;