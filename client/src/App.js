import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  // callback sent down to the search bar to only send back the search from a user when the search form is submitted
  const fetchResources = (searchQuery) => {
    return !searchQuery ? null : setSearch(searchQuery);
  };

  // run on initial render and anytime ONLY a new request is sent
  useEffect(() => {
    // initial state of search is empty - we want to process a request to initially show movies on the page for UX purposes
    if (search === "") {
      fetch("/api/best movies")
        .then((res) => res.json())
        .then((data) => console.log(data));
      return;
    }
    // we are proxied to our custom backend so it will know where to send requests
    fetch(`/api/${search}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [search]);

  return (
    <div className="App">
      <SearchBar returnSearch={fetchResources} />
    </div>
  );
}

export default App;
