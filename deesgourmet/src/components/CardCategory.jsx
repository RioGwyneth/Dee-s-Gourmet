import Button from "./Button";

export default function CardCategory({ text, img }) {
  return (
    <div className="card bg-white p-4 ">
      <div className="card__body flex flex-col items-center gap-3 ">
        <img src={img} />
        <h1 className="text-xl font-bold">{text}</h1>
        <Button
          width="w-full"
          text="View"
          textcolor="text-red-600"
          custom={"border-2 border-red-600 border-solid "}
        />
      </div>
    </div>
  );
}
