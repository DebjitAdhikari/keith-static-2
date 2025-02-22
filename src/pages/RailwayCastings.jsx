import { useEffect, useState } from "react";
import FetchAllProducts from "../services/ProductPage/FetchAllProducts";

function RailwayCastings() {
  // Example products data
  const products = [
    { name: "'A' Type Foundation", image: "/assets/images/products/railway-castings/'A' TYPE FOUNDATION-min.JPG" },
    { name: "2 Aspect Body & Cover", image: "/assets/images/products/railway-castings/2 ASPECT BODY & COVER-min.JPG" },
    { name: "3 Aspect Body & Cover", image: "/assets/images/products/railway-castings/3 ASPECT BODY & COVER-min.JPG" },
    { name: "Brake Block for DHR", image: "/assets/images/products/railway-castings/BRAKE BLOCK FOR DHR-min.JPG" },
    { name: "Brake Block for Diesel Loco", image: "/assets/images/products/railway-castings/BRAKE BLOCK FOR DIESEL LOCO-min.JPG" },
    { name: "Brake Block for NG Coach", image: "/assets/images/products/railway-castings/BRAKE BLOCK FOR NG COACH-min.JPG" },
    { name: "Brake Block", image: "/assets/images/products/railway-castings/BRAKE BLOCK-min.JPG" },
    { name: "Ladder Base", image: "/assets/images/products/railway-castings/LADDER BASE-min.JPG" },
    { name: "Mounting Socket for CLS", image: "/assets/images/products/railway-castings/MOUNTING SOCKET FOR CLS-min.JPG" },
    { name: "Offset Bracket for CLS", image: "/assets/images/products/railway-castings/OFFSET BRACKET FOR CLS-min.JPG" },
    { name: "Offset Bracket for Shunt Signal", image: "/assets/images/products/railway-castings/OFFSET BRACKET FOR SHUNT SIGNAL-min.JPG" },
    { name: "Shunt Signal Base", image: "/assets/images/products/railway-castings/SHUNT SIGNAL BASE-min.JPG" },
    { name: "Shunt Signal Body", image: "/assets/images/products/railway-castings/SHUNT SIGNAL BODY-min.JPG" },
    { name: "Signal Base", image: "/assets/images/products/railway-castings/SIGNAL BASE-min.JPG" },
    { name: "Terminal Box & Cover for CLS", image: "/assets/images/products/railway-castings/TERMINAL BOX & COVER FOR CLS-min.JPG" },
    // Add more products as needed
  ];

  

  return (
    <div className="min-h-[60vh] w-full sm:py-6 px-2 py-2 sm:px-6 bg-gray-100">
      {/* Section Title */}
      <div className="text-left lg:ml-14 mb-10">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#FD5D14] border-l-4 border-blue-700 pl-4 mb-6">
          Railway Castings
        </h1>
      </div>

      {/* Products Grid Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products?.map((product, index) => (
          <div
            key={index}
            className="relative hover:cursor-pointer space-y-2 bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="w-full h-48 object-contain"
            />
            <div className="px-4 py-2 text-left">
              <h2 className="text-md sm:text-lg  text-slate-500">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}//hello

export default RailwayCastings;
