import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetRice } from "../../api/ApiRice";
export default function RiceList({
title
  }) {

    const [rice, setRice] = useState([]);
  

    const getRice = async () => {
      const api_request = await GetRice();
      if (!api_request.error) {
        setRice(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getRice();
    }, []);
  
    useEffect(() => {
  console.log(rice);
    }, [rice]);

    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {rice.map((rices,index) => (
          <div key={index}> 
            <CardCategory
            image={rices.image}
            dish_name={rices.dish_name}
            price_med={rices.price_med}
            price_full={rices.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  