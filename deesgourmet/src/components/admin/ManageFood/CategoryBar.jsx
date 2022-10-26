import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button";

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
    <div className="flex w-auto mb-3 gap-6 flex-col">
      <ul className="flex flex-wrap ">

      <Link
          to="/manage-food"
          onClick={() => setActive("/manage-food")}
          className={changeSelectedText(active, "/manage-food")}
        >
          Best Sellers
        </Link>

        <Link
          to="/manage-appetizer"
          onClick={() => setActive("/manage-appetizer")}
          className={changeSelectedText(active, "/manage-appetizer")}
        >
          Appetizers
        </Link>

        <Link
          to="/manage-beef"
          onClick={() => setActive("/manage-beef")}
          className={changeSelectedText(active, "/manage-beef")}
        >
          Beef
        </Link>

        <Link
          to="/manage-chicken"
          onClick={() => setActive("/manage-chicken")}
          className={changeSelectedText(active, "/manage-chicken")}
        >
          Chicken
        </Link>

        <Link
          to="/manage-desserts"
          onClick={() => setActive("/manage-desserts")}
          className={changeSelectedText(active, "/manage-desserts")}
        >
          Desserts
        </Link>

        <Link
          to="/manage-noodles"
          onClick={() => setActive("/manage-noodles")}
          className={changeSelectedText(active, "/manage-noodles")}
        >
          Noodles
        </Link>

        <Link
          to="/manage-pork"
          onClick={() => setActive("/manage-pork")}
          className={changeSelectedText(active, "/manage-pork")}
        >
          Pork
        </Link>

        <Link
          to="/manage-seafoods"
          onClick={() => setActive("/manage-seafoods")}
          className={changeSelectedText(active, "/manage-seafoods")}
        >
          Seafoods
        </Link>

        <Link
          to="/manage-vegetables"
          onClick={() => setActive("/manage-vegetables")}
          className={changeSelectedText(active, "/manage-vegetables")}
        >
          Vegetables
        </Link>

        <Link
          to="/manage-rice"
          onClick={() => setActive("/manage-rice")}
          className={changeSelectedText(active, "/manage-rice")}
        >
          Rice
        </Link>
        
      </ul>
      
    
    </div>
  );
}
