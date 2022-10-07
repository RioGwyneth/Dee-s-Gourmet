export default function DropDown({
  placeholder,
  value,
  onChange,
  invalidError = "",
  options = ["Beef", "Chicken", "Pork", "Appetizer"],
  values = [],
}) {
  return (
    <div>
      <div className="w-full ">
        <select
          value=""
          onChange={onChange}
          className={`
            ${invalidError != "" ? "border-2 border-BtnTertiary-end" : null} 
            bg-white text w-full rounded-lg p-3   text-gray-500 border-1 border  `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option className="leading-3" key={option} value={values[index]}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {invalidError != "" ? (
        <p className="text-sm text-red">{invalidError}</p>
      ) : null}
    </div>
  );
}
