import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(savedHistory);
  }, []);

  const saveHistory = (newQuery) => {
    let updatedHistory = [newQuery, ...history.filter((item) => item !== newQuery)];
    if (updatedHistory.length > 10) {
      updatedHistory = updatedHistory.slice(0, 10);
    }
    setHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    saveHistory(query);
    navigate(`/search?query=${query}`);
  };

  const searchFromHistory = (item) => {
    saveHistory(item);
    navigate(`/search?query=${item}`);
  };

  const removeHistoryItem = (item) => {
    const updatedHistory = history.filter((h) => h !== item);
    setHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      {/* Tombol Kembali */}
      <div className="flex items-center mb-4">
        <Link to="/" className="text-xl md:text-2xl text-gray-700 mr-3">
          <FaArrowLeft />
        </Link>
        <h1 className="text-lg md:text-xl font-bold">Search</h1>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari produk..."
          className="w-full p-2 md:p-3 bg-white outline-none text-sm md:text-base"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 md:px-4 py-2 md:py-3">
          <FaSearch />
        </button>
      </form>

      {/* Riwayat Pencarian */}
      {history.length > 0 && (
        <div className="mt-4">
          <h2 className="text-gray-600 mb-2 text-sm md:text-base">Riwayat Pencarian</h2>
          <ul className="bg-gray-100 p-2 md:p-3 rounded-lg">
            {history.map((item, index) => (
              <li key={index} className="flex justify-between items-center p-2 md:p-3 border-b last:border-none">
                <button onClick={() => searchFromHistory(item)} className="text-blue-600 text-sm md:text-base">
                  {item}
                </button>
                <button onClick={() => removeHistoryItem(item)} className="text-red-500 text-sm md:text-base">
                  <FaTimes />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
