import React from "react";
import { Navbar } from "./Components";
import { Header, NewArrivals, PopularProducts } from "./Containers";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PopularProducts />
      <NewArrivals />
    </>
  );
};

export default App;
