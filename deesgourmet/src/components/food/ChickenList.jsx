import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetChicken } from "../../api/ApiChicken";
export default function ChickenList({
title
  }) {

    const [chicken, setChicken] = useState([]);
  

    const getChicken = async () => {
      const api_request = await GetChicken();
      if (!api_request.error) {
        setChicken(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getChicken();
    }, []);
  
    useEffect(() => {
  console.log(chicken);
    }, [chicken]);

    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {chicken.map((chickens,index) => (
          <div key={index}> 
            <CardCategory
            image={chickens.image}
            dish_name={chickens.dish_name}
            price_med={chickens.price_med}
            price_full={chickens.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  