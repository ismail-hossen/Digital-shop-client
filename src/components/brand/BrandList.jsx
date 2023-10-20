import { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="container mx-auto py-24 px-3 lg:px-0">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">All Brands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default BrandList;
