import { useEffect, useState } from "react";
import FetchAllProducts from "../services/ProductPage/FetchAllProducts";
function WaterDistribution() {
  // Example products data
  const products = [
    { name: "Service Box Top Bottom & Lid", image: "/assets/images/products/water-distribution/SERVICE BOX TOP BOTTOM & LID-min.jpg" },
    { name: "Type 'A' Valve Box & Lid", image: "/assets/images/products/water-distribution/TYPE 'A' VALVE BOX & LID-min.jpg" },
    { name: "Valve Box Base #6", image: "/assets/images/products/water-distribution/VALVE BOX BASE 6-min.jpg" },
    { name: "Valve Box Riser & Lid", image: "/assets/images/products/water-distribution/VALVE BOX RISER & LID-min.jpg" },
    { name: "Valve Box Top Bottom & Lid", image: "/assets/images/products/water-distribution/VALVE BOX TOP BOTTOM & LID-min.jpg" },
    { name: "Valve Box Top Bottom Extension & Lid", image: "/assets/images/products/water-distribution/VALVE BOX TOP BOTTOM EXTENSION & LID-min.jpg" },
    // Add more products as needed
  ];
  // const [products,setAllProducts]=useState()

  // function filterProducts(items){
  //   setAllProducts(items.filter(item=>item.typeofproduct==="Agricultural Castings"))
  // }

 
  return (
    <div className="min-h-[60vh] w-full sm:py-6 px-2 py-2 sm:px-6 bg-gray-100">
      {/* Section Title */}
      <div className="text-left lg:ml-14 mb-10">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#FD5D14] border-l-4 border-blue-700 pl-4 mb-6">
          Water Distribution Equipment
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
  );//hello
}

export default WaterDistribution;
