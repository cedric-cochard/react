import React from "react";

const Card = ({ country }) => {
  console.log(country);
  return (
    <div>
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"drapeau" + country.translations.fra.common}
        />
        <div className="infos">
          <h2>{country.translations.fra.common}</h2>
          <h4>{country.capital}</h4>
          <p>Population : {country.population.toLocaleString()}</p>
        </div>
      </li>
    </div>
  );
};

export default Card;
