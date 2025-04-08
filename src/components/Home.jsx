import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "../Utils/axios";

const Home = () => {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category === "undefined") setFilteredProducts(products);
    if (category !== "undefined") getProductCategory();
  }, [category, products]);

  return products ? (
    <>
      <Nav />
      <div className="w-full  p-5 md:p-10 pt-[5%] mt-20 md:mt-0 mb-5  text-black flex flex-wrap justify-center md:justify-start overflow-x-hidden overflow-y-auto min-h-screen">
        {filteredProducts &&
          filteredProducts.map((p, i) => (
            <Link
              key={p.id}
              to={`/details/${p.id}`}
              className="transition-all duration-300 transform hover:scale-105 hover:shadow-2xl m-4 p-4 card border border-gray-200 shadow-lg rounded-lg bg-white w-[90%] sm:w-[45%] md:w-[30%] lg:w-[18%] h-[40vh] flex flex-col justify-center items-center"
            >
              <div
                className="transition-transform duration-300 hover:scale-110 mb-3 w-full h-[70%] bg-contain bg-no-repeat bg-center rounded-t-lg"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h1 className="text-center font-semibold text-lg line-clamp-2 overflow-hidden text-ellipsis">
                {p.title}
              </h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
