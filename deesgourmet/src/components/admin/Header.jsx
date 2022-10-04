import logo from "../../assets/imgs/logo.png";

export default function Header({
  
}) {
  return (
      <div className="bg-white h-16 flex justify-center items-center text-center shadow-md lg:text-left mb-5">
      <div className="flex-shrink-0 flex  gap-3">
                <img className="h-8 w-8 " src={logo} alt="Workflow" />
                <h1 className="flex items-center text-red-600 font-sans text-xl font-black">
                  Dee’s Gourmet
                </h1>
              </div>
    </div>
  );
}
