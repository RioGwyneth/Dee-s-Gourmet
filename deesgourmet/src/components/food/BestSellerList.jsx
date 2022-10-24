import { useState } from "react";
import CardCategory from "../CardCategory";
import { useEffect } from "react";
import { GetBestSeller } from "../../api/ApiBestSeller";
export default function BestSellerList({ title }) {
  const [bestseller, setBestSeller] = useState([]);
  

  const getBestSeller = async () => {
    const api_request = await GetBestSeller();
    if (!api_request.error) {
      setBestSeller(api_request.response.data.data);
      console.log(api_request.response.data);
    } else {
      console.log(api_request.error);
    }
  };

  useEffect(() => {
    getBestSeller();
  }, []);

  useEffect(() => {
console.log(bestseller);
  }, [bestseller]);
  

  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-xl">{title}</h1>
      </div>
      <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
        
        {bestseller.map((bestsellers,index) => (
          <div key={index}> 
            <CardCategory
            image={bestsellers.image}
            dish_name={bestsellers.dish_name}
            price_med={bestsellers.price_med}
            price_full={bestsellers.price_full}
          /> 
          </div>
          
        ))}

      </div>
    </div>
  );
}
