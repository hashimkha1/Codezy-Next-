import { 
    reqPut,
    reqPost,
    reqGet,
    getApiData,
    reqDelete } from './request';


const apiCalls = {
 
  // services
  
 
  getAllService: async () => await reqGet('http://localhost:8000/api/services'),
 
  
};

export default apiCalls;
