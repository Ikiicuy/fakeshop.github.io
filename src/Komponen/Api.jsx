import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Api = ({ limit = 0 }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        if (limit > 0) {
          setProducts(res.data.slice(0, limit));
        } else {
          setProducts(res.data);
        }
      })
      .catch((error) => console.error(error));
  }, [limit]);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            to={`/product/${product.id}`} 
            key={product.id} 
            className="border rounded-lg shadow-md p-4 transition-transform transform hover:scale-105 hover:shadow-lg bg-white"
          >
            {/* Gambar Produk */}
            <div className="flex justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="h-32 md:h-40 lg:h-48 w-auto object-contain"
              />
            </div>

            {/* Informasi Produk */}
            <div className="text-center mt-4">
              <p className="text-sm md:text-base lg:text-lg font-semibold">
                {product.title.length > 20 ? product.title.substring(0, 20) + "..." : product.title}
              </p>
              <p className="text-red-500 font-bold text-lg md:text-xl">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Api;
