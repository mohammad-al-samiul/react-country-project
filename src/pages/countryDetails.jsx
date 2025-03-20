import React from "react";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const params = useParams();
  console.log(params);

  return <div>Country Details</div>;
};
