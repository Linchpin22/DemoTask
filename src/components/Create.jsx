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

    // Clear form
    setTitle("");
    setImage("");
    setCategory("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="min-h-screen w-[100%] flex items-center justify-center p-4">
      <form
        onSubmit={AddProductHandler}
        className="bg-white w-full max-w-xl p-6 md:p-10 rounded-xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-indigo-600">
          Add New Product
        </h2>

        <input
          type="url"
          placeholder="Product Image URL"
          className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 text-lg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 text-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Category"
            className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 text-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 text-lg"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <textarea
          rows="4"
          placeholder="Enter product details here..."
          className="w-full px-4 py-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-indigo-400 text-lg resize-none"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-lg transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Create;
