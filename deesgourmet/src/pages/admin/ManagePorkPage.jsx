import Footer from "../../components/Footer";
import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import EditFoodPop from "../../components/admin/EditFoodPop";
import DeletePop from "../../components/admin/DeletePop";
import { useState } from "react";
import { GetPork } from "../../api/ApiPork";
import { useEffect } from "react";
import CardCategory from "../../components/CardCategory";
import Button from "../../components/Button";
import CategoryBar from "../../components/admin/ManageFood/CategoryBar";
import AddFoodPop from "../../components/admin/AddFoodPop";
export default function ManagePorkPage() {
  const [pork, setPork] = useState([]);
  const [showEditFoodPop, setShowEditFoodPop] = useState(false);
  const [showDeleteFoodPop, setShowDeleteFoodPop] = useState(false);
  const [showAddFoodPop, setShowAddFoodPop] = useState(false);


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

    <div>
           <EditFoodPop
        showEditFoodPop={showEditFoodPop}
        onClick={() => setShowEditFoodPop(false)}
      />
      <DeletePop
        showDeleteFoodPop={showDeleteFoodPop}
        onClick={() => setShowDeleteFoodPop(false)}
      />
 <AddFoodPop
       showAddFoodPop={showAddFoodPop}
       onClick={() => setShowAddFoodPop(false)}
      />
      <AdminNavbar />
      <div className="flex flex-col p-10">
        <CategoryBar />

        <div className="flex justify-between items-end">
          <div>
          <h1 className=" font-bold text-xl mt-10">Pork</h1>
          </div>
       
        <div className="">
        <Button text="Add Food" bgcolor="bg-red-600" padding="px-6 py-2"  onClick={() => setShowAddFoodPop(true)} />
        </div>
        </div>
        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
      {pork.map((porks, index) => (
            <div key={index}>
              <CardCategory
                image={porks.image}
                dish_name={porks.dish_name}
                price_med={porks.price_med}
                price_full={porks.price_full}
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