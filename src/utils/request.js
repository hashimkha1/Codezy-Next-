import axios from 'axios';
import apiCalls from './apiCalls';
const reqPut = async (url, data = {}, headers = false) => {
    // try {
      if (!headers) headers = getAuthHeaders();
      const response = await axios.put(url, data, { headers });
      if (response.status < 300) {
        return response;
      }
      raiseAlerts({ status: response.status });
      return response;
    // } catch (error) {
    //   raiseAlerts(error);
    //   // return error;
    // }
  };
  const reqPost = async (url, data = {}, headers = false) => {
    // try {
      if (!headers) headers = getAuthHeaders();
      const response = await axios.post(url, data, { headers });
      // if (response.status < 300) {
      //   return response;
      // }
      // raiseAlerts({ status: response.status });
      //return response
      return response;
    // } catch (error) {
    //   raiseAlerts(error);
    //   // return error;
    // }
  };
  const reqGet = async (url, params = '', headers = false, paramsJson = null) => {
    console.log(paramsJson,'paramsJson===');
      const response = await axios.get(`${url}${params}`, { headers, ...(!!paramsJson && {params: paramsJson}) });
      if (response.status < 300) {
        return response;
      }
      raiseAlerts({ status: response.status });
      return response;
    // } catch (error) {
    //   raiseAlerts(error);
    //   // return error;
    // }
  };
  const getApiData = async (reqName, data) => {
    const res = await apiCalls[reqName](data);
    return res.data;
  };
  const reqDelete = async (url, data = {}, headers = false) => {
    // try {
      console.log({data})
      if (!headers) headers = getAuthHeaders();
      const response = await axios.delete(url, { data,headers });
      return response;
    // } catch (error) {
    //   raiseAlerts(error);
    //   // return error;
    // }
  };
  export{
    reqPut,
    reqPost,
    reqGet,
    getApiData,
    reqDelete

  }