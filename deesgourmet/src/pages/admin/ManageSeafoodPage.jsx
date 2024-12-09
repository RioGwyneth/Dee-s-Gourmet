import Footer from "../../components/Footer";
import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import EditFoodPop from "../../components/admin/EditFoodPop";
import DeletePop from "../../components/admin/DeletePop";
import { useState } from "react";
import { GetSeafood } from "../../api/ApiSeafood";
import { useEffect } from "react";
import CardCategory from "../../components/CardCategory";
import Button from "../../components/Button";
import CategoryBar from "../../components/admin/ManageFood/CategoryBar";
import AddSeafoodPop from "../../components/admin/AddSeafoodPop";
export default function ManageSeafoodPage() {
  const [seafood, setSeafood] = useState([]);
  const [showEditFoodPop, setShowEditFoodPop] = useState(false);
  const [showDeleteFoodPop, setShowDeleteFoodPop] = useState(false);
  const [showAddSeafoodPop, setShowAddSeafoodPop] = useState(false);


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

    <div>
           <EditFoodPop
        showEditFoodPop={showEditFoodPop}
        onClick={() => setShowEditFoodPop(false)}
      />
      <DeletePop
        showDeleteFoodPop={showDeleteFoodPop}
        onClick={() => setShowDeleteFoodPop(false)}
      />
 <AddSeafoodPop
       showAddSeafoodPop={showAddSeafoodPop}
       onClick={() => setShowAddSeafoodPop(false)}
      />
      <AdminNavbar />
      <div className="flex flex-col p-10">
        <CategoryBar />

        <div className="flex justify-between items-end">
          <div>
          <h1 className=" font-bold text-xl mt-10">Seafoods</h1>
          </div>
       
        <div className="">
        <Button text="Add Food" bgcolor="bg-red-600" padding="px-6 py-2"  onClick={() => setShowAddSeafoodPop(true)} />
        </div>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
      {seafood.map((seafoods, index) => (
            <div key={index}>
              <CardCategory
                image={seafoods.image}
                dish_name={seafoods.dish_name}
                price_med={seafoods.price_med}
                price_full={seafoods.price_full}
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