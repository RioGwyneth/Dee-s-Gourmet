import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";
import { GetAppetizer } from "../../api/ApiAppetizer";
export default function AppetizersList({
title
  }) {

    const [appetizer, setAppetizer] = useState([]);
  

    const getAppetizer = async () => {
      const api_request = await GetAppetizer();
      if (!api_request.error) {
        setAppetizer(api_request.response.data.data);
        console.log(api_request.response.data);
      } else {
        console.log(api_request.error);
      }
    };
  
    useEffect(() => {
      getAppetizer();
    }, []);
  
    useEffect(() => {
  console.log(appetizer);
    }, [appetizer]);

    return (
        <div className="flex flex-col p-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">{title}</h1>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        {appetizer.map((appetizers,index) => (
          <div key={index}> 
            <CardCategory
            image={appetizers.image}
            dish_name={appetizers.dish_name}
            price_med={appetizers.price_med}
            price_full={appetizers.price_full}
          /> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
  