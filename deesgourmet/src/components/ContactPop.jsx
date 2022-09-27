import Button from "./Button";
export default function ContactPop({ 
    onClick,
 }) {
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="bg-black bg-opacity-30 flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-sm p-8 mx-auto bg-white rounded-md shadow-lg">
          <div className=" sm:flex">
            <div className="w-full flex flex-col gap-10">
                <h1 className="font-bold text-xl">Contact Us</h1>
            <div>
                <h1 className="font-bold">Email</h1>
                <span> mariagudelosao@gmail.com</span>
            </div>
            <div>
            <h1 className="font-bold">Contact number</h1>
            <span>(209) 676-1128</span>
            </div>
              
            <Button
                    text="Okay"
                    bgcolor="bg-red-600"
                    padding="px-6 py-2"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}