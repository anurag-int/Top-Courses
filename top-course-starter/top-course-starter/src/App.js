import React from "react";
import Navbar from "../src/components/Navbar";
import Cards from "../src/components/Cards";
import Filter from "../src/components/Filter";
import {apiUrl, filterData} from "../src/data"

const App = () => {
  return (
    <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Filter filterData={filterData}/>
        </div>
        <div>
          <Cards></Cards>
        </div>
    </div>
  )
  
};

export default App;
