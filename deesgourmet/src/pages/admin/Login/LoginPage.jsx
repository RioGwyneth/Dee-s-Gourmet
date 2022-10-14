import { useState } from "react";
import Header from "../../../components/admin/Header";
import Textfield from "../../../components/admin/Textfield";
import Button from "../../../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage(setUser) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handelSubmit(event){

    const user ={
      username: username,
      password : password,
    }
     
    console.log(user)
      axios.post("http://localhost:8000/api/login",user)
      .then((response) => {
       if(response.data!=null){
        navigate("/");
       }
       else{
         alert('failed');
       }

      })
      


      .catch((err) => console.log(err))
  }
  return (
    <div className="">
      <Header />
      <div className="flex justify-center pt-12 items-center">
        <div className="flex flex-col justify-center items-center gap-3 p-10 lg:w-1/5 shadow-xl bg-white rounded-lg">
          <h1 className="text-lg font-bold  text-red-600">Login</h1>
          <div className="">
            <span>Username</span>
            <Textfield 
              type="text"
              placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="">
            <span>Password</span>
            <Textfield 
            type="Password"
            placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <Button
            text="Login"
            bgcolor="bg-red-600"
            padding=" py-2"
            width="w-full"
            custom="mt-5"
            onClick={handelSubmit}
          />
        </div>
      </div>
    </div>
  );
}
