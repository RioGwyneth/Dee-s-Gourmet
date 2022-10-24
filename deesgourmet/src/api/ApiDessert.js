import axios from "axios";

const base_url = "http://localhost:8000/api/desserts";

export const GetDessert = async () =>{
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

  
  