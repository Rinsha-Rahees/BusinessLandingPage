import React from "react";
import { MENU_ITEMS } from "./Constants";

function MenuItems() {
  return (
    <>
      {MENU_ITEMS.map((item) => (
        <button>
          <li key={item} className="pr-16 leading-10 hover:text-[#200e32]">
            {item}
          </li>
        </button>
      ))}
    </>
  );
}

export default MenuItems;
