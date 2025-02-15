import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto min-h-screen p-6 border rounded shadow-md flex flex-col items-center">
      {/* Gambar Produk */}
      <img
        src={product.image}
        alt={product.title}
        className="h-[40vh] sm:h-[35vh] md:h-[40vh] lg:h-[45vh] xl:h-[50vh] mx-auto mt-4"
      />

      {/* Informasi Produk */}
      <div className="text-center mt-6 px-4">
        <h2 className="text-3xl md:text-4xl 2xl:text-4xl font-bold">{product.title}</h2>
        <p className="text-2xl md:text-3xl 2xl:text-3xl text-gray-500 capitalize">{product.category}</p>
        <p className="mt-4 text-md md:text-2xl 2xl:text-3xl">{product.description}</p>
        <p className="text-red-500 text-3xl md:text-4xl 2xl:text-4xl font-bold mt-4 ">${product.price}</p>
        <p className="text-sm md:text-4xl 2xl:text-4xl font-bold mt-4  text-gray-500">Author: {product?.rating?.count} Users</p>
      </div>

      {/* Tombol Bayar & Kembali */}
      <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-lg">
        <Link to="/">
          <button className="bg-red-500 w-[26vw] lg:w-[8vw] hover:bg-red-700 text-white font-bold py-2 rounded">
            Kembali
          </button>
        </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
 