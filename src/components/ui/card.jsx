import React from "react";

export const Card = ({ country }) => {
  return (
    <div className="card bg-base-100 shadow-sm ">
      <figure>
        <img className="h-44" src={country.flags.png} alt={country.flag} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{country?.name?.common}</h2>
        <span className="text-gray-700 font-bold">
          Population : <span className="font-light">{country.population}</span>
        </span>
        <span className="text-gray-700 font-bold">
          Region : <span className="font-light"> {country.region} </span>
        </span>
        <span className="text-gray-700 font-bold">
          Capital : <span className="font-light">{country.capital[0]}</span>
        </span>
      </div>
    </div>
  );
};
