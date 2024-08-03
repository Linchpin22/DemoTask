import React, { useState } from 'react'
import { ProductContext } from '../Utils/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [products] = useContext(ProductContext);
  let distinct_category =  products && products.reduce((acc, cv)=>[...acc,cv.category],[]);
  distinct_category = [...new Set(distinct_category)];

  return (
    <nav className="w-[15%] h-full bg-zinc-50 text-black flex flex-col items-center pt-5">
    <a
      className="py-3 px-5 border rounded border-zinc-300 text-blue-500"
      href="/create"
    >
      Add New Product
    </a>
    <hr className="my-3 w-[80%]" />
     
    <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
    <div className=" w-[80%]">
      
      {distinct_category.map((c,i)=>(
        
        <Link
        key={i}  
        to={`/?category=${c}`} className=" flex items-center mb-3">
        <span className="rounded-full mr-2 w-[15px] h-[15px] bg-blue-500"></span>
        {""}
         {c}
      </Link>
    ))}
   
     </div>
     </nav>
  )
}

export default Nav