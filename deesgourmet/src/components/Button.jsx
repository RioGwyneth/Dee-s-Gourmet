export default function Button({
  text = "",
  padding = "p-2",
  bgcolor,
  width,
  textcolor = "text-white",
  custom,
  onClick,
}) {
  return (
    <button
      className={`${padding} ${width} ${bgcolor} ${textcolor} ${custom} drop-shadow-lg rounded-lg flex items-center justify-center gap-2 font-medium `}
      onClick={onClick}
    >
      {text}{" "}
    </button>
  );
}
