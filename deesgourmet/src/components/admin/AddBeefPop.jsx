import Button from "../Button";
import DropDown from "./DropDown";
import ImageUploader from "./ImageUploader";
import Textfield from "./Textfield";
import { PostBeef } from "../../api/ApiBeef";
import { useState } from "react";
export default function AddBeefPop({ 
  showAddBeefPop, onClick}) {

    const [formValues, setFormValues] = useState({
      dish_name: "",
      price_med: "",
      price_full: "",
      image: ""
    });

    const [validations, setValidations] = useState({
      dish_name: "",
      price_med: "",
      price_full: "",
      image: ""
    });

    const Validation = () => {
      let tempValidations = {
      dish_name: "",
      price_med: "",
      price_full: "",
      image: "",
      };

      if (!ValidEmpty(formValues.dish_name)) tempValidations.dish_name = "Required";
      if (!ValidEmpty(formValues.price_med)) tempValidations.price_med = "Required";
      if (!ValidEmpty(formValues.price_full)) tempValidations.price_full = "Required";
      setValidations(tempValidations);
      
      const pass = Object.values(tempValidations).every((value) => value === "");
    };

    const setValue = (e, name) => {
      setFormValues((oldValues) => ({
        ...oldValues,
        [name]: e.target.value,
      }));
    };

    const saveFormData = async () => {
      const api_request = await PostBeef(formValues);
      if (!api_request.error) return true;
      alert(api_request.error);
      console.log(api_request.error);
      return false;
    };

  return showAddBeefPop ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-black bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-sm  p-8 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="w-full flex flex-col gap-5">
              <h1 className="font-bold text-xl">Add Food</h1>

           
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="font-semibold text-base mb-2">Dish Name</h1>
                    <Textfield 
                    placeholder="Dish name" 
                    onChange={(e) => setValue(e, "dish_name")}
                    invalidError={validations.dish_name}
                    value={formValues.dish_name}/>
                  </div>
                 
                <div>
                    <h1 className="font-semibold text-base mb-2">Price Full</h1>
                    <Textfield placeholder="$" 
                     onChange={(e) => setValue(e, "price_full")}
                     invalidError={validations.price_full}
                     value={formValues.price_full}/>
                  </div>

                  <div>
                    <h1 className="font-semibold text-base mb-2">Price Half</h1>
                    <Textfield placeholder="$"  
                    onChange={(e) => setValue(e, "price_med")}
                    invalidError={validations.price_med}
                    value={formValues.price_med}/>
                  </div>
                  <div>
                  <h1 className="font-semibold text-base mb-2">Upload Image</h1>
                  <ImageUploader />
                </div>
                </div>

                
         

              <div className="grid grid-cols-2 gap-3">
                <Button
                onClick={onClick}
                  text="Cancel"
                  padding="px-6 py-2"
                  custom="text-red-600 border border-red-600"
                />
                <Button 
              onClick={saveFormData}
              
                text="Save" 
                bgcolor="bg-red-600" 
                padding="px-6 py-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
