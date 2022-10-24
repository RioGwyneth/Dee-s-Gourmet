import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetDessert } from "../../api/ApiDessert";
export default function DessertList({
title
  }) {
    const [dessert, setDessert] = useState([]);
  

    const getDessert = async () => {
      const api_request = await GetDessert();
      if (!api_request.error) {
        setDessert(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getDessert();
    }, []);
  
    useEffect(() => {
  console.log(dessert);
    }, [dessert]);
    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {dessert.map((desserts,index) => (
          <div key={index}> 
            <CardCategory
            image={desserts.image}
            dish_name={desserts.dish_name}
            price_med={desserts.price_med}
            price_full={desserts.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  