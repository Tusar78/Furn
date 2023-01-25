import React from "react";
import { Navbar } from "./Components";
import { Header, PopularProducts } from "./Containers";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <PopularProducts />
    </>
  );
};

export default App;
