import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetNoodle } from "../../api/ApiNoodle";
export default function NoodleList({
title
  }) {
    const [noodle, setNoodle] = useState([]);
  

    const getNoodle = async () => {
      const api_request = await GetNoodle();
      if (!api_request.error) {
        setNoodle(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getNoodle();
    }, []);
  
    useEffect(() => {
  console.log(noodle);
    }, [noodle]);

    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {noodle.map((noodles,index) => (
          <div key={index}> 
            <CardCategory
            image={noodles.image}
            dish_name={noodles.dish_name}
            price_med={noodles.price_med}
            price_full={noodles.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  