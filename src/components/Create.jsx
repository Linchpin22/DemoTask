import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../Utils/Context";

const Create = () => {
  const [products, setProducts] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each Field Should have Value");
      return;
    }

    const product = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setProducts([...products, product]);
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="flex flex-col bg-white text-black items-center p-5 md:p-[5%] w-full h-screen"
    >
      <h1 className="w-full md:w-1/2 mb-5 text-2xl md:text-3xl text-center">
        Add New Product
      </h1>
      <input
        type="url"
        placeholder="Product Image Link"
        className="text-lg md:text-2xl bg-zinc-100 rounded p-3 w-full md:w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-lg md:text-2xl bg-zinc-100 rounded p-3 w-full md:w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-lg md:text-2xl bg-zinc-100 rounded p-3 w-full md:w-[48%] mb-3 md:mb-0"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-lg md:text-2xl bg-zinc-100 rounded p-3 w-full md:w-[48%] mb-3 md:mb-0"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        placeholder="Enter Product details here!!!"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="text-lg md:text-2xl bg-zinc-100 rounded p-3 w-full md:w-1/2 mb-3"
        rows="5"
      ></textarea>
      <div className="w-full md:w-1/2">
        <button
          type="submit"
          className="py-3 px-5 border rounded border-zinc-300 text-zinc-500 w-full"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
