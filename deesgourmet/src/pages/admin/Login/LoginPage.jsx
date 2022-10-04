import Header from "../../../components/admin/Header";
import Textfield from "../../../components/admin/Textfield";
import Button from "../../../components/Button";


export default function LoginPage() {
  return (
    <div className="">
      <Header />
      <div className="flex justify-center pt-12 items-center">
        <div className="flex flex-col justify-center items-center gap-3 p-10 lg:w-1/5 shadow-xl bg-white rounded-lg">
          <h1 className="text-lg font-bold  text-red-600">Login</h1>
          <div className="">
            <span>Username</span>
            <Textfield />
          </div>
          <div className="">
            <span>Password</span>
            <Textfield />
          </div>
          <Button
            text="Login"
            bgcolor="bg-red-600"
            padding=" py-2"
            width="w-full"
            custom="mt-5"
          />
        </div>
      </div>
    </div>
  );
}
