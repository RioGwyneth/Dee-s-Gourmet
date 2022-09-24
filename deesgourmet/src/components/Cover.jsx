import Button from "./Button";

export default function Cover({
  text = " You've tried the rest, now taste the Best!",
  span = " You've tried the rest, now taste the Best!",
  img,
  withButton = false,
}) {
  return (
    <div className="max-h-[700px] relative drop-shadow-xl">
      <div className="absolute w-full h-full text-white max-h-[700px] bg-black/40 flex flex-col justify-center items-center">
        <div className="px-4 font-serif text-center text-4xl w-full sm:text-4xl md:text-5xl lg:6xl font-bold flex justify-center ">
          {text}
        </div>
        <div className="w-full flex justify-center text-center p-4">{span}</div>
        <div className="w-full flex justify-center mt-10">
          {withButton == true ? (
            <Button
              width="w-64"
              text="View our Menu"
              textcolor="text-white"
              custom={"border-2 border-white border-solid hover:bg-red-600 hover:border-red-600  "}
            />
          ) : null}
        </div>
      </div>
      <img className="w-full object-cover h-[500px] lg:h-[400px] " src={img} />
    </div>
  );
}
