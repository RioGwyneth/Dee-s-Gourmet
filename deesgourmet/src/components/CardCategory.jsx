import Button from "./Button";

export default function CardCategory({
image,
dish_name,
price_med,
price_full,
onClick,
remove,

}) {
 

  return (
    <div className="card drop-shadow-xl bg-white p-4 rounded-lg transform transition ">
      <div onClick={onClick} className="card__body flex flex-col  gap-3 ">
        <img className="rounded-md" src={image} />
        <h1 className="text-lg font-bold">{dish_name}</h1>
       <div className="text-xs ">
        <div>Half | $<span>{price_med}</span></div>
        <div>Full | $<span>{price_full}</span></div>
        </div>
       <div className="flex justify-end gap-8 mx-5">
        {remove} 
       </div>
      </div>
    </div>
  );
}
