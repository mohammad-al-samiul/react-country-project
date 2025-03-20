import React from "react";
import regions from "../../api/region.json";

export const SelectCountry = ({ filter, setFilter, countries }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="select"
    >
      {regions.map((region, i) => (
        <option key={i} value={region.name}>
          {" "}
          {region.name}
        </option>
      ))}
    </select>
  );
};
