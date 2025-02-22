import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductsContainer() {
  // const [allproducts, setallproducts] = useState([]);
  const navigate = useNavigate();

  let allTypeOfProducts=[
    { image:"/assets/images/products/municipal-castings/4 X 24 RING & GRATE-min.jpg",typeofproduct:"Municipal Castings"},
    { image:"/assets/images/products/water-distribution/SERVICE BOX TOP BOTTOM & LID-min.jpg",typeofproduct:"Water Distribution Equipment"},
    { image:"/assets/images/products/agricultural-castings/CROSS COMBI RING-min.JPG",typeofproduct:"Agricultural Castings"},
    { image:"/assets/images/products/railway-castings/'A' TYPE FOUNDATION-min.JPG",typeofproduct:"Railway Castings"},
    { image:"/assets/images/products/counter-weights/CIRCULAR COUNTER WEIGHT-min.JPG",typeofproduct:"Counter Weights"},
    { image:"/assets/images/products/high-tension/BRACKET-min.jpg",typeofproduct:"High Tension Power Transmission"},
    { image:"/assets/images/products/miscellaneous-castings/HARD LINER PLATES OF 400+BHN.jpg",typeofproduct:"Miscellaneous Castings"},
  ]
  let templateProducts=[]

  function gotoProduct(productType) {
    if(productType.toLowerCase().startsWith("agricultural"))
      navigate("agricultural-castings");
    else if(productType.toLowerCase().startsWith("munici"))
      navigate("municipal-public-utility-castings");
    else if(productType.toLowerCase().startsWith("miscellaneous"))
      navigate("miscellaneous-castings");
    else if(productType.toLowerCase().startsWith("railway"))
      navigate("railway-castings")
    else if(productType.toLowerCase().startsWith("water"))
      navigate("water-distribution-equipment")
    else if(productType.toLowerCase().startsWith("high"))
      navigate("high-tension-power-transmission")
    else if(productType.toLowerCase().startsWith("counter"))
      navigate("counter-weights")
    
  }

  function filterTypeOfProducts(products) {
    products.forEach(item => {
      if (item.typeofproduct.toLowerCase().endsWith("castings") && !allTypeOfProducts.includes(item.typeofproduct)) {
        allTypeOfProducts.push(item.typeofproduct);
        templateProducts.push({typeofproduct:item.typeofproduct, image: item.image})
      }
    });
  }

  
  return (
    <div className="w-full py-10 px-4 ">
      <div className="max-w-7xl mx-auto">
      

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTypeOfProducts?.map((item) => (
            <div
              key={item.typeofproduct}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.typeofproduct}
                className="w-full h-56 object-contain"
              />

              {/* Product Details */}
              <div className="p-4">
                <h3 className="font-bold  text-xl text-[#02245B] ">
                  {item?.typeofproduct}
                </h3>
                {/* <p className="text-gray-600 text-sm mt-2">
                  {item.description?.slice(0, 60)}...
                </p> */}
              </div>

              {/* Action Button */}
              <div
                onClick={()=>gotoProduct(item.typeofproduct)}
                className="w-12 h-12 bg-[#FD5D14] text-white flex justify-center items-center rounded-full absolute bottom-4 right-4 shadow-md cursor-pointer hover:bg-[#02245B] transition duration-300"
              >
                <i className="fa-solid fa-arrow-right text-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}//hi

export default ProductsContainer;