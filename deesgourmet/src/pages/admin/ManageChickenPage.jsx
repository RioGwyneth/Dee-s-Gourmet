import Footer from "../../components/Footer";
import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import EditFoodPop from "../../components/admin/EditFoodPop";
import DeletePop from "../../components/admin/DeletePop";
import { useState } from "react";
import { GetChicken } from "../../api/ApiChicken";
import { useEffect } from "react";
import CardCategory from "../../components/CardCategory";
import Button from "../../components/Button";
import CategoryBar from "../../components/admin/ManageFood/CategoryBar";
import AddChickenPop from "../../components/admin/AddChickenPop";
export default function ManageChickenPage() {
  const [chicken, setChicken] = useState([]);
  const [showEditFoodPop, setShowEditFoodPop] = useState(false);
  const [showDeleteFoodPop, setShowDeleteFoodPop] = useState(false);
  const [showAddChickenPop, setShowAddChickenPop] = useState(false);


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

    <div>
           <EditFoodPop
        showEditFoodPop={showEditFoodPop}
        onClick={() => setShowEditFoodPop(false)}
      />
      <DeletePop
        showDeleteFoodPop={showDeleteFoodPop}
        onClick={() => setShowDeleteFoodPop(false)}
      />
 <AddChickenPop
       showAddChickenPop={showAddChickenPop}
       onClick={() => setShowAddChickenPop(false)}
      />
      <AdminNavbar />
      <div className="flex flex-col p-10">
        <CategoryBar />

        <div className="flex justify-between items-end">
          <div>
          <h1 className=" font-bold text-xl mt-10">Chicken</h1>
          </div>
       
        <div className="">
        <Button text="Add Food" bgcolor="bg-red-600" padding="px-6 py-2"  onClick={() => setShowAddChickenPop (true)} />
        </div>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
      {chicken.map((chickens, index) => (
            <div key={index}>
              <CardCategory
                image={chickens.image}
                dish_name={chickens.dish_name}
                price_med={chickens.price_med}
                price_full={chickens.price_full}
                remove=
                {
                <Button
                  text="Delete" 
                  onClick={() => setShowDeleteFoodPop(true)}
                  custom="w-1/6 text-red-600 underline" />
                }
              
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