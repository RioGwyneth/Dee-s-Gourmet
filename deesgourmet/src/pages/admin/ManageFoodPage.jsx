import AdminNavbar from "../../components/admin/AdminNavbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import CardCategory from "../../components/CardCategory";
import { useEffect } from "react";
import { GetBestSeller } from "../../api/ApiBestSeller";
import EditFoodPop from "../../components/admin/EditFoodPop";

import CategoryBar from "../../components/admin/ManageFood/CategoryBar";
import Button from "../../components/Button";
import DeletePop from "../../components/admin/DeletePop";
import AddFoodPop from "../../components/admin/AddFoodPop";
export default function ManageFoodPage() {
  const [bestseller, setBestSeller] = useState([]);
  const [showEditFoodPop, setShowEditFoodPop] = useState(false);
  const [showDeleteFoodPop, setShowDeleteFoodPop] = useState(false);
  const [showAddFoodPop, setShowAddFoodPop] = useState(false);

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
          <h1 className=" font-bold text-xl mt-10">Best Seller</h1>
          </div>
       
        <div className="">
        <Button text="Add Food" bgcolor="bg-red-600" padding="px-6 py-2"  onClick={() => setShowAddFoodPop(true)}/>
        </div>
         
        </div>
          
       

        <div className="grid content-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 my-10">
          {bestseller.map((bestsellers, index) => (
            <div key={index}>
              <CardCategory
                image={bestsellers.image}
                dish_name={bestsellers.dish_name}
                price_med={bestsellers.price_med}
                price_full={bestsellers.price_full}
                remove={
                  <Button
                    text="Delete"
                    onClick={() => setShowDeleteFoodPop(true)}
                    custom="w-1/6 text-red-600 underline"
                  />
                }
                edit={
                  <Button
                    text="Edit"
                    onClick={() => setShowEditFoodPop(true)}
                    custom="w-1/6 text-red-600 underline"
                  />
                }
              />
            </div>
          ))}
        </div>
      </div>
      <Footer bgcolor="bg-red-600" />
    </div>
  );
}
