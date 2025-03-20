import React from "react";
import { useParams } from "react-router-dom";
import { useIndivCountry } from "../hooks/useCountries";
import { Loader } from "../components/ui/loader";

export const CountryDetails = () => {
  const { name } = useParams();

  const { country, isPending } = useIndivCountry(name);

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <div className="hero bg-base-100 my-20 px-4">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={country?.flags?.png}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="lg:text-5xl text-3xl font-bold py-3">
              {country?.name?.common}
            </h1>
            <p className="pb-2">
              <span className="font-bold">Description</span> :
              {country?.flags?.alt}
            </p>
            <p className="pb-2">
              <span className="font-bold ">Capital : </span>
              {country?.capital}
            </p>
            <p className="pb-2">
              <span className="font-bold ">Population : </span>
              {country?.population}
            </p>

            <p className="pb-2">
              <span className="font-bold ">Region : </span>
              {country?.region}
            </p>

            <p className="pb-2">
              <span className="font-bold ">Currency : </span>
              {country?.currencies &&
                Object.keys(country?.currencies).map(
                  (currency) => country?.currencies[currency]?.name
                )}
            </p>
            <p className="pb-2">
              <span className="font-bold ">NativeName</span>
              {country?.name &&
                Object.keys(country?.name.nativeName).map((ntvName) => (
                  <li key={country.tld}>
                    {country?.name.nativeName[ntvName]?.common}
                  </li>
                ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
