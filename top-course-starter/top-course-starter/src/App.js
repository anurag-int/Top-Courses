import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Cards from "../src/components/Cards";
import Filter from "../src/components/Filter";
import {apiUrl, filterData} from "../src/data"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
      }
    catch(err)
    {
      toast.error("Network error");
    }
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col"> 
        <div>
          <Navbar></Navbar>
        </div>

        <div>
          <Filter filterData={filterData}/>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses={courses} > </Cards>)
          }
        </div>
    </div>
  )
  
};

export default App;
