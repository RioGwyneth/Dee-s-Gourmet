export default function CardCategory({ text, img }) {
  return (
    <div className="card bg-white p-4 rounded-lg ">
      <div className="card__body flex flex-col  gap-3 ">
        <img src={img} />
        <h1 className="text-lg font-bold">{text}</h1>
       <div className="text-xs ">
        <div>Med | <span>$35.00 </span></div>
        <div>Full | <span>$35.00</span></div>
        </div>
      </div>
    </div>
  );
}
