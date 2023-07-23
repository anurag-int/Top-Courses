import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js"
import Filter from "./components/Filter.js"
import Cards from "./components/Cards.js"
import {apiUrl, filterData} from "./data.js"
import { toast } from "react-toastify";

const App = () => {

  const [courses, setCourses] = useState(null)
useEffect( () => {
  const fetchData = async() => {
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      //save dat into a variable
      setCourses(output.data);
    }
    catch(error)
    {
      toast.error("Something went wrong");
    }
  }
  fetchData();
}, []);
  return (
    <div>
      <Navbar></Navbar>
      
      <Filter filterData = {filterData}></Filter>

      <Cards courses={courses}></Cards>
    </div>
  )
};

export default App;
