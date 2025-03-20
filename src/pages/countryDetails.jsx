import React from "react";
import { useParams } from "react-router-dom";
import { useIndivCountry } from "../hooks/useCountries";

export const CountryDetails = () => {
  const { name } = useParams();
  const { country, isPending } = useIndivCountry(name);

  if (isPending) {
    <div>loading..</div>;
  }
  console.log(country);

  return <div>Country Details</div>;
};
