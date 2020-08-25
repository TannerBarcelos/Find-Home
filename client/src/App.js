import React, { useEffect, useState } from "react";

// Components
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [search, setSearch] = useState("movie"); // for initial render - lets render best movies first
  const [collection, setCollection] = useState(null); // to save the response of the API call

  // callback sent down to the search bar to get the users search criteria
  const fetchResources = (searchQuery) => {
    setSearch(searchQuery);
  };

  // run on initial render and anytime ONLY a new request is sent - so the dependency for this to run again is when the search criteria changes so pass that into dep. array
  useEffect(() => {
    fetch(`/api/${search}`)
      // our api proxxies movie api and returns json so we must also parse it as such
      .then((res) => res.json())
      .then((data) => {
        setCollection(data);
      });
  }, [search]);

  return (
    <div className="App">
      <SearchBar returnSearch={fetchResources} />
      <MovieList movieData={collection} />
    </div>
  );
}

export default App;
