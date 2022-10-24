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

  
  