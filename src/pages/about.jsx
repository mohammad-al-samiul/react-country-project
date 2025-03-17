import React from "react";
import countryData from "../api/country.json";
import { CardAbout } from "../components/ui/card-about";
export const About = () => {
  return (
    <div className="container my-20">
      <h3 className="my-20 text-center lg:text-5xl text-3xl">
        Here are the Interesting Facts{" "}
        <span className="block line-clamp-3"> We're Proud of</span>
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {countryData.map((country) => (
          <CardAbout key={country.id} country={country} />
        ))}
      </div>
    </div>
  );
};
