import React from "react";

export const SortingButton = ({ sortCountries }) => {
  return (
    <div className="flex">
      <button
        onClick={() => sortCountries("asc")}
        className="btn btn-outline mx-2  lg:mx-3"
      >
        Asc
      </button>
      <button
        onClick={() => sortCountries("desc")}
        className="btn btn-outline mr-2 lg:mx-3"
      >
        Dsc
      </button>
    </div>
  );
};
