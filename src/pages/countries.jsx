import React from "react";

import { useCountries } from "../hooks/useCountries";
import { Card } from "../components/ui/card";
import { Loader } from "../components/ui/loader";

export const Countries = () => {
  const { countries, isPending, error } = useCountries();

  if (isPending) {
    return <Loader />;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="lg:container my-20">
      <h2 className="text-3xl lg:text-5xl font-bold text-center">
        All Countries
      </h2>
      <div className="my-20 p-6 w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {isPending && <p>Loading...</p>}
        {!isPending &&
          countries
            ?.slice(0, 12)
            .map((country, i) => <Card key={i} country={country} />)}
      </div>
    </div>
  );
};
