import Button from "../Button";

export default function DeletePop({ showDeleteFoodPop, onClick
  }) {
  return showDeleteFoodPop ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-black bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-sm  p-12 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="w-full justify-center items-center flex flex-col gap-5">
            <h1>Do you want to delete this food?</h1>
            <div className="flex gap-3 w-full">
            <Button
                onClick={onClick}
                  text="No"
                  padding="px-6 py-2"
                  custom="w-1/2 text-red-600 border border-red-600"
                />
              
                <Button 
                onClick={onClick}
                text="Yes" 
                bgcolor="bg-red-600" 
                padding="px-6 py-2" 
                custom="w-1/2"/>
            </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
