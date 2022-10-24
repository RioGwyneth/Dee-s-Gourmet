import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";

import { GetPork } from "../../api/ApiPork";
export default function PorkList({
title
  }) {

    const [pork, setPork] = useState([]);
  

    const getPork = async () => {
      const api_request = await GetPork();
      if (!api_request.error) {
        setPork(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getPork();
    }, []);
  
    useEffect(() => {
  console.log(pork);
    }, [pork]);

    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
          {pork.map((porks,index) => (
          <div key={index}> 
            <CardCategory
            image={porks.image}
            dish_name={porks.dish_name}
            price_med={porks.price_med}
            price_full={porks.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  