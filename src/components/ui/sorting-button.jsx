import React from "react";

export const SortingButton = ({ sortCountries }) => {
  return (
    <>
      <button
        onClick={() => sortCountries("asc")}
        className="btn btn-outline mx-3"
      >
        Asc
      </button>
      <button
        onClick={() => sortCountries("desc")}
        className="btn btn-outline mx-3"
      >
        Dsc
      </button>
    </>
  );
};
