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
    <div className="w-[70%] justify-between flex items-center h-full m-auto p-[10%]">
      <img
        className="h-[80%] w-[40%] object-contain"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-5">{product.category}</h3>
        <h2 className="text-red-300 mb-3"> ₹ {product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link className="py-3 mr-5 px-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        <Link className="py-3 px-5 border rounded border-red-200 text-red-300">
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
