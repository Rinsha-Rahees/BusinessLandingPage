import React from "react";

function MenuItems({ hrefId, title }) {


  return (
    <a key={hrefId} href={hrefId}>
      <li className="pr-16 leading-10 hover:text-[#200e32]" >
        {title}
      </li>
    </a>
  );
}

export default MenuItems;
