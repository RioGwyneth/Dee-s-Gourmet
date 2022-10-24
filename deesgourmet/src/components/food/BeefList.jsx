import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";
import { GetBeef } from "../../api/ApiBeef";
export default function BeefList({
title
  }) {
    const [beef, setBeef] = useState([]);
  

    const getBeef = async () => {
      const api_request = await GetBeef();
      if (!api_request.error) {
        setBeef(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getBeef();
    }, []);
  
    useEffect(() => {
  console.log(beef);
    }, [beef]);
    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {beef.map((beefs,index) => (
          <div key={index}> 
            <CardCategory
            image={beefs.image}
            dish_name={beefs.dish_name}
            price_med={beefs.price_med}
            price_full={beefs.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  