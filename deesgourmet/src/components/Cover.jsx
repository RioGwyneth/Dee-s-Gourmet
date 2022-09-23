import Button from "./Button";

export default function Cover({
  text = " You've tried the rest, now taste the Best!",
  span = " You've tried the rest, now taste the Best!",
  img,
  withButton = false,
}) {
  return (
    <div className="max-h-[700px] relative">
      <div className="absolute w-full h-full text-gray-200 max-h-[700px] bg-black/40 flex flex-col justify-center items-center">
        <div className="px-4 text-center text-4xl w-full sm:text-4xl md:text-5xl lg:6xl font-bold flex justify-center ">
          {text}
        </div>
        <div className="w-full flex justify-center text-center p-4">{span}</div>
        <div className="w-full flex justify-center mt-10">
          {withButton == true ? (
            <Button
              width="w-64"
              text="View our Menu"
              textcolor="text-white"
              custom={"border-2 border-white border-solid "}
            />
          ) : null}
        </div>
      </div>
      <img className="w-full object-cover h-[500px] lg:h-[400px] " src={img} />
    </div>
  );
}
