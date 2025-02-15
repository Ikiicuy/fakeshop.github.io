import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import Api from ".././Komponen/Api"
import SearchBar from ".././Komponen/SearchBar"

export default function Home() {

  return (
    <div className="p-4 mb-24">
   
      <SearchBar/>
      {/* Swiper Event */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="mb-6"
      >
        {["Event 1", "Event 2", "Event 3"].map((event, index) => (
          <SwiperSlide key={index} className="bg-gray-300 p-10 text-center">
            {event}
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-xl font-semibold mb-4">🔥 Trending Products</h2>
     <Api limit="4"/>
      {/* Produk */}
      <div className="text-center">
        <Link
          to="/produk"
          className="bg-blue-500 text-white py-2 px-4 rounded shadow-md"
        >
          View More
        </Link>
      </div>

      {/* View More */}
    </div>
  );
}
