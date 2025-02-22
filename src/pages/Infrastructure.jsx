import { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import { Helmet } from "react-helmet-async";

function Infrastructure() {
  

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate a delay
    return () => clearTimeout(timeout);
  }, []);

  const infra = [
    {
      name: "Automatic Stretch Film Wrapping Machine",
      image: "/assets/images/infra/AUTOMATIC STRETCH FILM WRAPPING MACHINE-min.jpg",
      description:
        "Signode make, model – HLS, PLC controlled fully automatic stretch film.",
    },
    {
      name: "Cupola Furnace",
      image: "/assets/images/infra/CUPOLA FURNACE-min.jpg",
      description: "Divided blast energy-efficient cupola, 2 numbers, 6 MT/hour capacity.",
    },
    {
      name: "Pollution Control Equipment",
      image: "/assets/images/infra/POLLUTION CONTROL EQUIPMENT-min.jpg",
      description: "Dual dry cyclone with wet scrubber.",
    },
    {
      name: "High Pressure Moulding Machine",
      image: "/assets/images/infra/HIGH PRESSURE MOULDING MACHINE-min.jpg",
      description: "Rhino FM 12, box size 650 x 650 x 120 / 120, 60 box/hour capacity.",
    },
    {
      name: "Fully Automatic Sand Plant",
      image: "/assets/images/infra/FULLY AUTOMATIC SAND PLANT-min.jpg",
      description:
        "40 MT/hour, Maxcool mixer cum cooler RMC-20 with RTC 103.6 SDL, storage hopper, re-circulation hopper, batch hopper with load cells, dust collection system, heater with synchronous panel & water circuit, polygonal screen, OBMS & magnetic pulley.",
    },
    {
      name: "Fully Automatic Mould Handling System",
      image: "/assets/images/infra/FULLY AUTOMATIC MOULD HANDLING SYSTEM-min.jpg",
      description:
        "250 box mould bank, Siemens make 27 series PLC with sensors, electrically operated transfer car with AC drive & gear box.",
    },
    {
      name: "Shot Blasting",
      image: "/assets/images/infra/SHOT BLASTING MACHINE-min.jpg",
      description: "Airless shot blasting machine with endless loop.",
    },
    {
      name: "Machine Shop",
      image: "/assets/images/infra/MACHINE SHOP-min.jpg",
      description: "Lathes, radial drill, pillar drill, mechanical hacksaw.",
    },
    {
      name: "Grinding Shop",
      image: "/assets/images/infra/GRINDING SHOP-min.jpg",
      description: "Pedestal grinder, angle grinders, flexible grinders, buffing machines.",
    },
    {
      name: "Container Ramp",
      image: "/assets/images/infra/CONTAINER RAMP-min.jpg",
      description: "Rhino FM 12, box size 650 x 650 x 120 / 120, 60 box/hour capacity.",
    },
    // Add more products as needed
  ];

return (
  <>
    {loading ? (
      <LoadingPage />
    ) : (
      <div className="w-full min-h-screen pt-[120px] bg-gray-100 sm:pt-[150px] flex flex-col items-center py-10 animate-fadeIn">
        <Helmet>
            <title>Keith Ceramic Infrastructure | Advanced Ceramic Manufacturing Facilities</title>
            <meta name="description" content="Explore Keith Ceramic's state-of-the-art manufacturing infrastructure. Learn how our advanced facilities ensure the highest quality in ceramic production." />
            <meta name="keywords" content="Keith Ceramic, ceramic manufacturing, pottery production, handmade ceramics infrastructure, advanced ceramic facilities, ceramic production process" />
            <meta name="author" content="Keith Ceramic" />
        </Helmet>

        <h1 className="text-xl self-start ml-4 sm:ml-16 md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10 animate-fadeIn">
          Infrastructure
        </h1>

        <div className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-2 sm:p-6 mb-10 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infra?.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
              >
                <div className="relative">
                <img
                  src={item.image || "./assets/images/default.jpg"}
                  alt={item.name || "Equipment Image"}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    {item.description || "Equipment Name"}
                  </p>
                </div>
                </div>
                <div className="p-3 h-full bg-gray-100 text-center">
                  <h3 className=" text-xs sm:text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
);
}

export default Infrastructure;
