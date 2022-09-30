export default function CardCategory({ text, img }) {
  return (
    <div className="card drop-shadow-xl bg-white p-4 rounded-lg transform transition duration-500 hover:scale-110">
      <div className="card__body flex flex-col  gap-3 ">
        <img className="rounded-md" src={img} />
        <h1 className="text-lg font-bold">{text}</h1>
       <div className="text-xs ">
        <div>Med | <span>$35.00 </span></div>
        <div>Full | <span>$35.00</span></div>
        </div>
      </div>
    </div>
  );
}
