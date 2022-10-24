import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetVegetable } from "../../api/ApiVegetable";
export default function VegetableList({
title
  }) { 
    
    const [vegetable, setVegetable] = useState([]);
  

    const getVegetable = async () => {
      const api_request = await GetVegetable();
      if (!api_request.error) {
        setVegetable(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getVegetable();
    }, []);
  
    useEffect(() => {
  console.log(vegetable);
    }, [vegetable]);

    
    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {vegetable.map((vegetables,index) => (
          <div key={index}> 
            <CardCategory
            image={vegetables.image}
            dish_name={vegetables.dish_name}
            price_med={vegetables.price_med}
            price_full={vegetables.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  