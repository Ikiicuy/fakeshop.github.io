import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import DefaultLayout from "./Layout/DefaultLayout";
import NoMenuLayout from "./Layout/NoLayout";
import Loading from "./Pages/Loading"; // Import Loading Screen
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import ChatDetail from "./Pages/chatDetail";
import Account from "./Pages/Account";
import AllProducts from "./Pages/AllProducts";
import ProductDetail from "./Pages/ProductDetail";
import SearchPage from "./Pages/Search";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading 2.5 detik
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />; // Tampilkan loading sebelum halaman utama

  return (
    <Router>
      <Routes>
        {/* Halaman dengan Bottom Menu */}
        <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
        <Route path="/chat" element={<DefaultLayout><Chat /></DefaultLayout>} />
        <Route path="/account" element={<DefaultLayout><Account /></DefaultLayout>} />
        <Route path="/produk" element={<DefaultLayout><AllProducts /></DefaultLayout>} />
        
        {/* Halaman tanpa Bottom Menu */}
        <Route path="/chat/:id" element={<NoMenuLayout><ChatDetail /></NoMenuLayout>} />
        <Route path="/product/:id" element={<NoMenuLayout><ProductDetail /></NoMenuLayout>} />
        <Route path="/search" element={<NoMenuLayout><SearchPage /></NoMenuLayout>} />
      </Routes>
    </Router>
  );
}
