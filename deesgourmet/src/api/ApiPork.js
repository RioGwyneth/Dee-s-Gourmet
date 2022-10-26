import axios from "axios";

const base_url = "http://localhost:8000/api/pork";

export const GetPork = async () =>{
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response  = await axios.get(`${base_url}`);
  
  } catch (e) {
    resolved.error = e;
    
  }

  return resolved;
}

export const PostPork = async (data) => {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.post(`${base_url}`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}



  