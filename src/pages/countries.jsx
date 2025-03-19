import React from "react";

import { useCountries } from "../hooks/useCountries";

export const Countries = () => {
  const { countries, isPending, error } = useCountries();

  if (isPending) return <p>লোড হচ্ছে...</p>;
  if (error) return <p>{error}</p>;

  console.log("con", countries);
  return <div>Countries</div>;
};
