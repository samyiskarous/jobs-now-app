const API = {};

const endpoint = process.env.REACT_APP_API_ENDPOINT;

API.getAllJobs = (offset = 0, limit = 12) => {
    return fetch(`${endpoint}jobs?offset=${offset}&limit=${limit}`)
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                console.log('error', error)
            });
}

API.getJob = (jobUUID) => {
    return fetch(`${endpoint}jobs/${jobUUID}`)
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                console.log('error', error)
            });
}

API.getJobSkills = (jobUUID) => {
    return fetch(`${endpoint}jobs/${jobUUID}/related_skills`)
            .then(response => response.json())
            .then(data => data.skills)
            .catch((error) => {
                console.log('error', error)
            });
}

API.getRelatedJobsToJob = (jobUUID) => {
    return fetch(`${endpoint}jobs/${jobUUID}/related_jobs`)
            .then(response => response.json())
            .then(data => data.jobs)
            .catch((error) => {
                console.log('error', error)
            });
}

API.getRelatedJobsToSkill = (skillUUID) => {
    return fetch(`${endpoint}skills/${skillUUID}/related_jobs`)
            .then(response => response.json())
            .then(data => data.jobs)
            .catch((error) => {
                console.log('error', error)
            });
}

API.getRelatedSkillsToSkill = (skillUUID) => {
    return fetch(`${endpoint}skills/${skillUUID}/related_skills`)
            .then(response => response.json())
            .then(data => data.skills)
            .catch((error) => {
                console.log('error', error)
            });
}

API.getAutocompleteListForJobs = (jobTitle = "") => {
    return fetch(`${endpoint}jobs/autocomplete?begins_with=${jobTitle}&contains=${jobTitle}&ends_with=${jobTitle}`)
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                console.log('error', error)
            });
}

export default API;