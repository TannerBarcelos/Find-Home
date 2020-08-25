import React, { useEffect } from "react";

function App() {
  // fetch [at the proxy endpoint] the /api/city_name route [for testing proxy works, we do this here]
  // but we will extract this to a new component later
  useEffect(() => {
    fetch("/api/santa clara")
      .then((res) => res.json())
      .then((res_) => console.log(res_));
  }, []);

  return (
    // no need for react router in this app - it is literally going to be a single page without links to anything else
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
