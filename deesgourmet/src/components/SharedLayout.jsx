import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function SharedLayout({
    
  }) {
    return (
        <div>
        <NavBar/>
        <Outlet/>
        </div>
   
    );
  }
  