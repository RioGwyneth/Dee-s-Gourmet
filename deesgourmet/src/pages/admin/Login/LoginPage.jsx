import Textfield from "../../../components/admin/Textfield";
import Button from "../../../components/Button";
export default function LoginPage() {
  return (
    <div className="flex justify-center items-center m-auto pt-20">

      <div className="flex flex-col justify-center items-center gap-3 p-10 lg:w-1/5 shadow-xl bg-white rounded-lg">
        <h1 className="text-lg font-bold mb-5 text-red-600">Login</h1>
        <div className="">
            <span>Username</span>
            <Textfield/>
        </div>
        <div className="">
            <span >Password</span>
           <Textfield/>
        </div>
        <Button
         text="Login"
         bgcolor="bg-red-600"
         padding=" py-2"
         width="w-full"
         custom="mt-5"/>
      </div>

    </div>
  );
}
