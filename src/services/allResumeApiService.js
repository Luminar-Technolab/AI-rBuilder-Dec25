import apiService from '../api/apiService';

//add resume api called by userInput when finish btn clicked
export const addResumeAPI = async (resumeData)=>{
   return await apiService("POST","/allResumes",resumeData)
}

//get resume api called by viewResume when page loaded (useEffect hook)
export const getResumeAPI = async (id)=>{
   return await apiService("GET",`/allResumes/${id}`,{})
}