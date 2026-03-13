import apiService from '../api/apiService';

//add resume api called by userInput
export const addResumeAPI = async (resumeData)=>{
   return await apiService("POST","/allResumes",resumeData)
}
