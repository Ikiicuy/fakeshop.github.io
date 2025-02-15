
import { useEffect, useState } from "react";
import Api from ".././Komponen/Api"
import axios from "axios";

export default function AllProducts() {

  return (
    // ...
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">📦 All Products</h2>
      <Api/>
    </div>
  );
}