import React from "react";
import Home from "./components/Home";
import {Route, Routes, useLocation} from "react-router-dom"
import Details from "./components/Details";
import { Link } from "react-router-dom";
import Create from "./components/Create";
import SearchBox from "./components/SearchBox";

const App = () => {
  const {search , pathname} = useLocation();
  return (
   
  <div className="h-screen w-screen bg-[#212121] flex">

    {(pathname != '/' || search.length>0) && (<Link to='/' className="absolute text-blue-300 left-[17%] top-[3%]">
       Home
     </Link>
    )}
   
   <Routes>

   <Route path="/" element={<Home/>} /> 
   <Route path="/create" element={<Create/>} /> 
   <Route path="/details/:id" element={<Details/>} /> 

   </Routes>


   </div>
  );
};

export default App;
