import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeProducts() {
  const products = [
        { name: "4 X 24 Ring & Grate", image: "/assets/images/products/municipal-castings/4 X 24 RING & GRATE-min.jpg" },
        { name: "Service box top bottom & lid", image: "/assets/images/products/water-distribution/SERVICE BOX TOP BOTTOM & LID-min.jpg" },
        { name: "Match plate for simultaneous jolt squeeze machine", image: "/assets/images/products/agricultural-castings/CROSS COMBI RING-min.JPG" },
        { name: "Circular counter weight", image: "/assets/images/products/counter-weights/CIRCULAR COUNTER WEIGHT-min.JPG" },
        
      // Add more products as needed
    ];
  return (
    <div className="min-h-[50vh] w-full py-10 px-4 bg-gray-100">
      {/* Title Section */}
      <div className="text-left lg:ml-6 mb-10">
        <h1 className="text-lg md:text-4xl border-l-4 border-blue-700 pl-2 font-bold text-[#FD5D14]">
          Products
        </h1>
      </div>

      {/* Product Images Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={item.image} // Dynamic image from API
              alt={item.name || `Product ${index + 1}`}
              className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h2 className="text-lg font-bold">{item.name || "Product Name"}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="mt-10  flex justify-center">
        <button className="bg-[#FD5D14] hover:bg-[#e04c0f] px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105">
          <Link to="/products" className="flex items-center gap-2">
            <span>Explore More Products</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HomeProducts;