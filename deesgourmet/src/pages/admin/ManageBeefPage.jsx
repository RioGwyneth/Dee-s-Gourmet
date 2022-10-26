import Footer from "../../components/Footer";
import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import EditFoodPop from "../../components/admin/EditFoodPop";
import DeletePop from "../../components/admin/DeletePop";
import { useState } from "react";
import { GetBeef } from "../../api/ApiBeef";
import { useEffect } from "react";
import CardCategory from "../../components/CardCategory";
import Button from "../../components/Button";
import CategoryBar from "../../components/admin/ManageFood/CategoryBar";
import AddBeefPop from "../../components/admin/AddBeefPop";
export default function ManageBeefPage() {
  const [beef, setBeef] = useState([]);
  const [showEditFoodPop, setShowEditFoodPop] = useState(false);
  const [showDeleteFoodPop, setShowDeleteFoodPop] = useState(false);
  const [showAddBeefPop, setShowAddBeefPop] = useState(false);


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

    <div>
           <EditFoodPop
        showEditFoodPop={showEditFoodPop}
        onClick={() => setShowEditFoodPop(false)}
      />
      <DeletePop
        showDeleteFoodPop={showDeleteFoodPop}
        onClick={() => setShowDeleteFoodPop(false)}
      />
 <AddBeefPop
       showAddBeefPop={showAddBeefPop}
       onClick={() => setShowAddBeefPop(false)}
      />
      <AdminNavbar />
      <div className="flex flex-col p-10">
        <CategoryBar />

        <div className="flex justify-between items-end">
          <div>
          <h1 className=" font-bold text-xl mt-10">Beef</h1>
          </div>
       
        <div className="">
        <Button text="Add Food" bgcolor="bg-red-600" padding="px-6 py-2"  onClick={() => setShowAddBeefPop(true)} />
        </div>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
      {beef.map((beefs, index) => (
            <div key={index}>
              <CardCategory
                image={beefs.image}
                dish_name={beefs.dish_name}
                price_med={beefs.price_med}
                price_full={beefs.price_full}
                remove=
                {
                <Button
                  text="Delete" 
                  onClick={() => setShowDeleteFoodPop(true)}
                  custom="w-1/6 text-red-600 underline" />
                }
                edit= 
                {
                  <Button
                    text="Edit" 
                    onClick={() => setShowEditFoodPop(true)}
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