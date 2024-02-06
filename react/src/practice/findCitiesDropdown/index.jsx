import React, { useState } from "react";
import { countries } from "./cities";

/** Problem Statement:-
 * make dropdown -> select countries -> when select -> 2nd dropdown -> show citites of selected country
 */

const CitiesDropdown = () => {
  const [country, setCountry] = useState({ name: "", value: "", cities: [] });

  const handleCountryClick = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <div>
        <select
          value={country}
          onChange={(e) => {
            handleCountryClick(e);
          }}
        >
          {countries.map((country, index) => {
            return <option value={index}>{country.name}</option>;
          })}
        </select>

        {/* 2nd Dropdown */}
        <select value={country}>
          {countries[country]?.cities.map((city, index) => {
            return <option value={index}>{city}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default CitiesDropdown;
