import Button from "../Button";
import Textfield from "./Textfield";
export default function AddCategoryPop({ onClick }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-black bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-sm p-8 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="w-full flex flex-col gap-10">
              <h1 className="font-bold text-xl">Add Category</h1>

              <div>
                <h1 className="font-semibold text-base mb-2">Dish Name</h1>
                <Textfield placeholder="Dish name" />
              </div>
              <div className="grid grid-cols-2 gap-3">
              <Button
                    text="Cancel"
    
                    padding="px-6 py-2"
                    custom="text-red-600 border border-red-600"
                  />
                   <Button
                    text="Add"
                    bgcolor="bg-red-600"
                    padding="px-6 py-2"
                    
                  />
              </div>
               
            </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
