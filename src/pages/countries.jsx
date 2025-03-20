import React, { useState } from "react";

import { useCountries } from "../hooks/useCountries";
import { Card } from "../components/ui/card";
import { Loader } from "../components/ui/loader";
import { SearchField } from "../components/ui/search-field";
import { SelectCountry } from "../components/ui/select-country";
import { SortingButton } from "../components/ui/sorting-button";

export const Countries = () => {
  const { countries, isPending, error, setCountries } = useCountries();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter.toLowerCase() === "all") {
      return country;
    }
    return filter.toLowerCase() === country.region.toLowerCase();
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  const sortCountries = (value) => {
    const sortedCountries = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortedCountries);
  };

  if (error) {
    return <p>{error}</p>;
  }

  //console.log(search, filter);

  return (
    <div className="lg:container my-20">
      <h2 className="text-3xl lg:text-5xl my-5 font-bold text-center">
        All Countries
      </h2>
      <div className="lg:px-6 flex justify-between">
        <div>
          <SearchField search={search} setSearch={setSearch} />
        </div>
        <div>
          <SortingButton sortCountries={sortCountries} />
        </div>
        <div>
          <SelectCountry filter={filter} setFilter={setFilter} />
        </div>
      </div>
      {isPending && <Loader />}
      <div>
        {filteredCountries.length == 0 && (
          <p className="font-bold lg:text-5xl text-3xl my-20 flex justify-center items-center ">
            There is no country
          </p>
        )}
      </div>
      <div className="my-20 p-6 w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {filteredCountries?.slice(0, 12).map((country, i) => (
          <Card key={i} country={country} />
        ))}
      </div>
    </div>
  );
};
