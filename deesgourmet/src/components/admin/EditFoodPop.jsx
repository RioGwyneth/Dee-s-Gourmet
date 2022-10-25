import Button from "../Button";
import DropDown from "./DropDown";
import ImageUploader from "./ImageUploader";
import Textfield from "./Textfield";
export default function EditFoodPop({ 
  showEditFoodPop, action}) {
  return showEditFoodPop ?(
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-black bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-xl p-8 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="w-full flex flex-col gap-5">
              <h1 className="font-bold text-xl">Edit Food</h1>

              <div className="grid lg:grid-cols-2 gap-3 md:grid-cols-1">
                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="font-semibold text-base mb-2">Dish Name</h1>
                    <Textfield placeholder="Dish name" />
                  </div>

                  <div>
                    <h1 className="font-semibold text-base mb-2">
                      Food Category
                    </h1>
                    <DropDown placeholder="Food Category" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <h1 className="font-semibold text-base mb-2">Price_Full</h1>
                    <Textfield placeholder="Dish name" />
                  </div>

                  <div>
                    <h1 className="font-semibold text-base mb-2">Price_half</h1>
                    <Textfield placeholder="Dish name" />
                  </div>
                </div>
                <div>
                  <h1 className="font-semibold text-base mb-2">Upload Image</h1>
                  <ImageUploader />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  text="Cancel"
                  padding="px-6 py-2"
                  custom="text-red-600 border border-red-600"
                />
                <Button text="Save" bgcolor="bg-red-600" padding="px-6 py-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
