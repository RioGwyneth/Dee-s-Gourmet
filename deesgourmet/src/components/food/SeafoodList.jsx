import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetSeafood } from "../../api/ApiSeafood";
export default function SeafoodList({
title
  }) {
    const [seafood, setSeafood] = useState([]);
  

    const getSeafood = async () => {
      const api_request = await GetSeafood();
      if (!api_request.error) {
        setSeafood(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getSeafood();
    }, []);
  
    useEffect(() => {
  console.log(seafood);
    }, [seafood]);

    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {seafood.map((seafoods,index) => (
          <div key={index}> 
            <CardCategory
            image={seafoods.image}
            dish_name={seafoods.dish_name}
            price_med={seafoods.price_med}
            price_full={seafoods.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  