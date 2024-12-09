import Footer from "../../components/Footer";
import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import DeletePop from "../../components/admin/DeletePop";
import { useState } from "react";
import { GetAppetizer, RemoveFood } from "../../api/ApiAppetizer";
import { useEffect } from "react";
import CardCategory from "../../components/CardCategory";
import Button from "../../components/Button";
import CategoryBar from "../../components/admin/ManageFood/CategoryBar";
import AddAppetizerPop from "../../components/admin/AddAppetizerPop";
export default function ManageAppetizerPage() {
  const [appetizer, setAppetizer] = useState([]);
  const [showAddAppetizerPop, setShowAddAppetizerPop] = useState(false);


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

    <div>
       
      
 <AddAppetizerPop
       showAddAppetizerPop={showAddAppetizerPop}
       onClick={() => setShowAddAppetizerPop(false)}
      />
      <AdminNavbar />
      <div className="flex flex-col p-10">
        <CategoryBar />

        <div className="flex justify-between items-end">
          <div>
          <h1 className=" font-bold text-xl mt-10">Appetizers</h1>
          </div>
       
        <div className="">
        <Button text="Add Food" bgcolor="bg-red-600" padding="px-6 py-2"  onClick={() => setShowAddAppetizerPop(true)} />
        </div>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
      {appetizer.map((appetizers, index) => (
            <div key={index}>

              <CardCategory
                id={appetizers.id}
                image={appetizers.image}
                dish_name={appetizers.dish_name}
                price_med={appetizers.price_med}
                price_full={appetizers.price_full}
                remove={true}
              
              />

            </div>
          ))}
      </div>
      </div>
      <Footer
      bgcolor="bg-red-600"/>
        </div>
  );
}
