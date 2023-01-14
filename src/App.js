import React, { useEffect, useState } from "react";

const App = () => {
  const [arrivals, setArrivals] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Tusar78/Furn/main/db.json")
      .then((res) => res.json())
      .then((data) => setArrivals(data));
  }, []);
  console.log('Hello world');
  return (
    <>
      <h2>{arrivals.length}</h2>
    </>
  );
};

export default App;
