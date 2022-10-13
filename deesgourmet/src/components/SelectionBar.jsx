import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SelectionBar({}) {
  const [active, setActive] = useState(window.location.pathname);

  const changeSelectedText = (state, selected) => {
    const style =
      "inline-block rounded-t-lg py-6 px-7 font-medium text-center active ";
    if (state === selected) {
      return style + "font-bold text-red-600 border-b-4 border-red-600";
    }
    return style + "font-normal text-black border-b-4 border-black-600";
  };

  return (
    <div className="flex justify-center w-auto m-3 ">
      <ul className="flex flex-wrap ">

      <Link
          to="/menu"
          onClick={() => setActive("/menu")}
          className={changeSelectedText(active, "/menu")}
        >
          Best Sellers
        </Link>

        <Link
          to="/appetizer"
          onClick={() => setActive("/appetizer")}
          className={changeSelectedText(active, "/appetizer")}
        >
          Appetizers
        </Link>

        <Link
          to="/beef"
          onClick={() => setActive("/beef")}
          className={changeSelectedText(active, "/beef")}
        >
          Beef
        </Link>

        <Link
          to="/chicken"
          onClick={() => setActive("/chicken")}
          className={changeSelectedText(active, "/chicken")}
        >
          Chicken
        </Link>

        <Link
          to="/desserts"
          onClick={() => setActive("/desserts")}
          className={changeSelectedText(active, "/desserts")}
        >
          Desserts
        </Link>

        <Link
          to="/noodles"
          onClick={() => setActive("/noodles")}
          className={changeSelectedText(active, "/noodles")}
        >
          Noodles
        </Link>

        <Link
          to="/pork"
          onClick={() => setActive("/pork")}
          className={changeSelectedText(active, "/pork")}
        >
          Pork
        </Link>

        <Link
          to="/seafoods"
          onClick={() => setActive("/seafoods")}
          className={changeSelectedText(active, "/seafoods")}
        >
          Seafoods
        </Link>

        <Link
          to="/vegetables"
          onClick={() => setActive("/vegetables")}
          className={changeSelectedText(active, "/vegetables")}
        >
          Vegetables
        </Link>

        <Link
          to="/rice"
          onClick={() => setActive("/rice")}
          className={changeSelectedText(active, "/rice")}
        >
          Rice
        </Link>
        
      </ul>
    </div>
  );
}
