import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [search, setSearch] = useState("code");
  const [sortGoodBad, setSortGoogBad] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
      )
      .then((res) => setDataMovies(res.data.results));
  }, [search]);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrer le type d'un film"
            id="serach-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher " />
        </form>
        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoogBad("goodToBad")}
          >
            Top<span>→</span>
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoogBad("badToGood")}
          >
            Bad<span>→</span>
          </div>
        </div>
      </div>
      <div className="result">
        {dataMovies
          .slice(0, 12)
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
