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
      className={`${padding} ${width} ${bgcolor} ${textcolor} ${custom} flex items-center justify-center gap-2 font-medium rounded-lg`}
      onClick={onClick}
    >
      {text}{" "}
    </button>
  );
}
