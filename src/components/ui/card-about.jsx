import React from "react";

export const CardAbout = ({ country }) => {
  const { name, capital, population, interesting_fact } = country;
  return (
    <div className="card bg-base-100 card-lg shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <span>
          <span className="font-bold">Population : </span>
          {population}
        </span>
        <span>
          <span className="font-bold">Capital : </span>
          {capital}
        </span>
        <p>
          <span className="font-bold">Facts : </span>
          {interesting_fact}
        </p>
      </div>
    </div>
  );
};
