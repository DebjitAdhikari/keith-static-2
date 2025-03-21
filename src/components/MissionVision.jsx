
function MissionVision() {
  
  const principles = [
    {
      name: "mission image",
      image: "/assets/images/mission.jpg",
      description:
        "Supplying high-quality castings with on-time delivery at the most competitive prices, continually improving processes for sustainable efficiency and enhanced performance.",
    },
    {
      name: "vision image",
      image: "/assets/images/vision.jpg",
      description:
        "Aiming to be the most preferred supplier for all our customers and a leading player in the foundry industry, upholding our core values & integrity. Earn we must, but with respect and dignity.",
    },
  ];
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <div className="relative bg-gray-200 rounded-lg mt-10 py-16 px-4 md:px-8">

  <div className="max-w-7xl mx-auto text-center">
    {/* Title */}
    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-wide">
      <span className="bg-gradient-to-r from-gray-800 to-[#FD5D14] text-transparent bg-clip-text">
        Our Foundation
      </span>
    </h1>

    {/* Divider */}
    <div className="w-24 h-1 bg-[#FD5D14] mx-auto mt-4 rounded animate-pulse"></div>

    {/* Subtitle */}
    <p className="text-gray-700 mt-6 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
      Discover what drives us forward and shapes our approach to excellence.
    </p>
  </div>
</div>



      {/* Mission Section */}
      {principles[0] && (
        <section className="py-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Image Container */}
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-2 bg-[#FD5D14]/20 rounded-xl blur-lg group-hover:bg-[#FD5D14]/30 transition duration-500"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FD5D14]/40 to-black/60 opacity-60 z-10"></div>
                  <img
                    src={principles[0]?.image}
                    alt={principles[0]?.title}
                    className="w-full h-80 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 lg:p-10">
                <div className="inline-block">
                  <h2 className="text-[#FD5D14] text-3xl md:text-4xl font-bold mb-2">Our Mission</h2>
                  <div className="w-full h-1 bg-[#FD5D14]"></div>
                </div>
                <h3 className="text-gray-800 text-2xl md:text-3xl font-bold mt-6">
                  {principles[0]?.title}
                </h3>
                <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                  {principles[0]?.description}
                </p>
                <div className="mt-8">
                  {/* <div className="inline-block rounded-full bg-[#FD5D14] text-white px-6 py-3 font-medium hover:shadow-lg hover:bg-[#e55413] transition-all duration-300 cursor-pointer">
                    Learn More
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FD5D14]/10 rounded-full blur-3xl"></div>
        </section>
      )}

      {/* Vision Section - Reversed Layout */}
      {principles[1] && (
        <section className="py-16 bg-gray-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
              {/* Image Container */}
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-2 bg-[#FD5D14]/20 rounded-xl blur-lg group-hover:bg-[#FD5D14]/30 transition duration-500"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#FD5D14]/40 to-black/60 opacity-60 z-10"></div>
                  <img
                    src={principles[1]?.image}
                    alt={principles[1]?.title}
                    className="w-full h-80 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-6 lg:p-10">
                <div className="inline-block">
                  <h2 className="text-[#FD5D14] text-3xl md:text-4xl font-bold mb-2">Our Vision</h2>
                  <div className="w-full h-1 bg-[#FD5D14]"></div>
                </div>
                <h3 className="text-gray-800 text-2xl md:text-3xl font-bold mt-6">
                  {principles[1]?.title}
                </h3>
                <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                  {principles[1]?.description}
                </p>
                <div className="mt-8">
                  {/* <div className="inline-block rounded-full bg-[#FD5D14] text-white px-6 py-3 font-medium hover:shadow-lg hover:bg-[#e55413] transition-all duration-300 cursor-pointer">
                    Discover More
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FD5D14]/10 rounded-full blur-3xl"></div>
        </section>
      )}

      
    </div>
  );
}

export default MissionVision;
// import FetchCoreAndPrinciple from "../services/AboutPage/FetchCoreAndPrinciple";
// import { useState, useEffect } from "react";

// function MissionVision() {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   async function getallteammanagement() {
//     setIsLoading(true);
//     try {
//       const get = await FetchCoreAndPrinciple();
//       setData(get);
//     } catch (error) {
//       console.log("error", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     getallteammanagement();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-96">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#FD5D14]"></div>
//       </div>
//     );
//   }

//   return (
    
//   );
// }

// export default MissionVision;