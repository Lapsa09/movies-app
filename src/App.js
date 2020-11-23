import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import MovieContainer from "./components/MovieContainer";

const api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const search =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = (link) => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies(api);
  }, []);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(search + searchTerm);
      await setSearchTerm("");
    }
  };

  return (
    <div className="App">
      <Search
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        searchTerm={searchTerm}
      />
      <MovieContainer movies={movies} />
    </div>
  );
}

export default App;
