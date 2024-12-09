import axios from "axios";

const base_url = "http://localhost:8000/api/appetizer";

export const GetAppetizer = async () =>{
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

export const PostAppetizer = async (data) => {
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

export const UpdateAppetizer = async (data) => {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.put(`${base_url}`, data);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}


export const RemoveFood = async (id) =>  {
  const resolved = {
    response: null,
    error: null,
  };

  try {
    resolved.response = await axios.delete(`${base_url}/${id}`);
  } catch (e) {
    resolved.error = e;
  }

  return resolved;
}

  