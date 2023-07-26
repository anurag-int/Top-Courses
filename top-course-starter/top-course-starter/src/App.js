import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import Cards from "../src/components/Cards";
import Filter from "../src/components/Filter";
import {apiUrl, filterData} from "../src/data"
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output);
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
    <div> 
        <div>
          <Navbar></Navbar>
        </div>

        <div>
          <Filter filterData={filterData}/>
        </div>

        {/* if the cards are in await then till that time we need to use loading screen(scroll) */}
        <div>
          {
            loading ? (<Spinner></Spinner>) : (<Cards courses={courses} > </Cards>)
          }
        </div>
    </div>
  )
  
};

export default App;
