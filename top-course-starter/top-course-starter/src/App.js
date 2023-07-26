import React from "react";
import Navbar from "../src/components/Navbar";
import Cards from "../src/components/Cards";
import Filter from "../src/components/Filter";

const App = () => {
  return (
    <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Filter></Filter>
        </div>
        <div>
          <Cards></Cards>
        </div>
    </div>
  )
  
};

export default App;
