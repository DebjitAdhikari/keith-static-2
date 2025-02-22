import { useEffect, useState } from "react";

function MiscellaneousCastings() {
  // Example products data
  const products = [
    { name: "Hard Liner Plates of 400+BHN", image: "/assets/images/products/miscellaneous-castings/HARD LINER PLATES OF 400+BHN.jpg" },
    { name: "Match Plate for High Pressure Moulding Machine", image: "/assets/images/products/miscellaneous-castings/MATCH PLATE FOR HIGH PRESSURE MOULDING MACHINE.jpg" },
    { name: "Match Plate for Simultaneous Jolt Squeeze Machine", image: "/assets/images/products/miscellaneous-castings/MATCH PLATE FOR SIMULTANEOUS JOLT SQUEEZE MACHINE.jpg" },
    { name: "Mould Box for High Pressure Moulding Line", image: "/assets/images/products/miscellaneous-castings/MOULD BOX FOR HIGH PRESSURE MOULDING LINE.jpg" },
    { name: "Pallet Car for Automated Mould Handling System", image: "/assets/images/products/miscellaneous-castings/PALLET CAR FOR AUTOMATED MOULD HANDLING SYSTEM.jpg" },
    // Add more products as needed
  ];
  

  return (
    <div className="min-h-[60vh] w-full sm:py-6 px-2 py-2 sm:px-6 bg-gray-100">
      {/* Section Title */}
      <div className="text-left lg:ml-14 mb-10">
        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold text-[#FD5D14] border-l-4 border-blue-700 pl-4 mb-6">
          Miscellaneous Castings
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
}

export default MiscellaneousCastings;//hi
