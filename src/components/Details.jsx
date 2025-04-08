import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../Utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return product ? (
    <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between pt-8  m-auto p-5 md:p-[10%]">
      <img
        className="h-[40vh] md:h-[80%] w-full md:w-[40%] object-contain mb-5 md:mb-0"
        src={`${product.image}`}
        alt="Product"
      />
      <div className="content w-full md:w-[50%] flex flex-col items-start">
        <h1 className="text-2xl md:text-4xl mb-2">{product.title}</h1>
        <h3 className="text-zinc-600 my-3 md:my-5">
          {product.category.toUpperCase()}
        </h3>
        <h2 className="text-red-500 text-lg md:text-2xl mb-3">
          ₹ {product.price}
        </h2>
        <p className="mb-5 md:mb-[5%] text-sm md:text-base">
          {product.description}
        </p>
        <div className="flex">
          <Link
            to={`/edit/${id}`}
            className="py-2 px-4 mr-5 border rounded border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
          >
            Edit
          </Link>
          <Link
            to={`/delete/${id}`}
            className="py-2 px-4 border rounded border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
