import React from "react";
import { SERVICES } from "../utils/Constants";

function ServiceList() {
  return (
    <div className="flex flex-col w-full h-fit mt-24">
      <hr className="border-1 border-black w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full py-4 text-xl lg:text-2xl">
        {SERVICES.map((item) => {
          return (
            <div className="flex flex-col">
              <h3 className="flex justify-center w-full">{item}</h3>
              <hr className="border-1 border-black w-full my-5" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceList;
