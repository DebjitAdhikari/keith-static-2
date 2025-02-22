import { useState, useEffect } from "react";
import FetchQuality from "../services/Quality/FetchQuality";
import LoadingPage from "./LoadingPage";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Quality() {
  // const [QualityData, setQualityData] = useState([]);
  const [loading, setLoading] = useState(true);


  // const allphysicaltesting = QualityData?.filter(
  //   (item) => item.typeofproduct === "Physical Testing"
  // );
  // const welcemicalmachine = QualityData?.filter(
  //   (item) => item.typeofproduct === "Wet Chemical Laboratory Equipment"
  // );
  // const sandtestingmachine = QualityData?.filter(
  //   (item) => item.typeofproduct === "SAND TESTING EQUIPMENT"
  // );

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate a delay
    return () => clearTimeout(timeout);
  }, []);


  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  const physcialTesting = [
    {
      name: "Electronic Universal Testing Machine",
      image: "/assets/images/qualities/physical-testing/ELECTRONIC UNIVERSAL TESTING MACHINE.jpg",
      description:
        "Fully automatic, FIE – make, 60 ton capacity with computer interface to directly generate reports.",
    },
    {
      name: "Optical Brinell Hardness Testing Machine",
      image: "/assets/images/qualities/physical-testing/OPTICAL BRINELL HARDNESS TESTING MACHINE.jpg",
      description: "",
    },
    {
      name: "Fully Automatic Compressed Load Testing Machine",
      image: "/assets/images/qualities/physical-testing/COMPRESSIVE LOAD TESTING MACHINE.jpg",
      description: "Fully automatic compressed load testing machine 120 ton capacity.",
    },
    {
      name: "Drop Testing Machine",
      image: "/assets/images/qualities/physical-testing/DROP TESTING MACHINE.jpg",
      description: "",
    },
  ];
  
  const sandTesting = [
    {
      name: "Sand Rammer with Base Block",
      image: "/assets/images/qualities/sand-testing/SAND RAMMER WITH BASE BLOCK-min.jpg",
      description: "",
    },
    {
      name: "Permeability Tester",
      image: "/assets/images/qualities/sand-testing/PERMEABILITY TESTER-min.jpg",
      description: "",
    },
    {
      name: "Universal Testing Machine",
      image: "/assets/images/qualities/sand-testing/UNIVERSAL TESTING MACHINE-min.jpg",
      description: "",
    },
    {
      name: "Sieve Shaker with Timer & Set of Sieves",
      image: "/assets/images/qualities/sand-testing/SIEVE SHAKER WITH SIEVES-min.jpg",
      description: "",
    },
    {
      name: "Methylene Blue Clay Tester",
      image: "/assets/images/qualities/sand-testing/METHYLENE BLUE CLAY TESTER-min.jpg",
      description: "",
    },
    {
      name: "Mould Hardness Tester",
      image: "/assets/images/qualities/sand-testing/MOULD HARDNESS TESTER-min.jpg",
      description: "",
    },
  ];
  
  const wetChemical = [
    {
      name: "Strohlein Apparatus",
      image: "/assets/images/qualities/wet-chemical/STROHLEIN APPARATRUS WITH TUBE FURNACE-min.jpg",
      description: "",
    },
    {
      name: "Muffle Furnace with Temperature Range up to 1400º C",
      image: "/assets/images/qualities/wet-chemical/MUFFLE FURNACE-min.jpg",
      description: "",
    },
    {
      name: "Digital Hot Air Oven (to Remove Moisture)",
      image: "/assets/images/qualities/wet-chemical/HOT AIR OVEN-min.jpg",
      description: "",
    },
    {
      name: "Chain O Matic Chemical Balance",
      image: "/assets/images/qualities/wet-chemical/CHAIN O MATIC BALANCE-min.jpg",
      description: "",
    },
    {
      name: "Hot Plate Arranged in Fume Chamber",
      image: "/assets/images/qualities/wet-chemical/HOT PLATE IN FUME CHAMBER-min.jpg",
      description: "",
    },
    {
      name: "Fortin’s Barometer",
      image: "/assets/images/qualities/wet-chemical/FORTIN'S BAROMETER-min.jpg",
      description: "",
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="w-full min-h-screen pt-[120px] bg-gray-100 sm:pt-[150px] flex flex-col items-center py-10 animate-fadeIn">
          <Helmet>
    <title>Keith Ceramic Quality | Excellence in Handmade Ceramics</title>
    <meta name="description" content="Discover the quality craftsmanship behind Keith Ceramic's handmade pottery. Our commitment to excellence ensures every piece is made to perfection." />
    <meta name="keywords" content="Keith Ceramic, quality ceramics, handmade pottery, ceramic craftsmanship, premium ceramics, pottery quality, ceramic excellence" />
    <meta name="author" content="Keith Ceramic" />
</Helmet>

          <h1 className="text-xl self-start ml-4 sm:ml-16 md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10 animate-fadeIn">
            Quality
          </h1>

          {/* Physical Testing Equipment Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
            className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-6 mb-10 animate-fadeIn"
          >
            <h2 className="font-semibold mb-4 text-center text-md sm:text-2xl text-[#FD5D14]">
              Physical Testing Equipment
            </h2>

            {/* Mapping over filtered array to display equipment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {physcialTesting?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <img
                    src={item.image || "./assets/images/default.jpg"} // Default image if none is provided
                    alt={item.name || "Equipment Image"}
                    loading="lazy"
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {item.description || "Equipment Name"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Wet Chemical Laboratory Equipment Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
            className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-6 mb-10 animate-fadeIn"
          >
            <h2 className="font-semibold mb-4 text-center text-md sm:text-2xl text-[#FD5D14]">
              Wet Chemical Laboratory Equipment
            </h2>

            {/* Mapping over filtered array to display equipment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wetChemical.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <img
                    src={item.image || "./assets/images/default.jpg"} // Default image if none is provided
                    alt={item.name || "Equipment Image"}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {item.name || "Equipment Name"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sand Testing Equipment Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
            className="w-[90%] md:w-[80%] bg-white shadow-lg rounded-lg p-6 mb-10 animate-fadeIn"
          >
            <h2 className="font-semibold mb-4 text-center text-md sm:text-2xl text-[#FD5D14]">
              Sand Testing Equipment
            </h2>

            {/* Mapping over filtered array to display equipment cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sandTesting?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 hover:cursor-pointer rounded-lg shadow-lg overflow-hidden relative group"
                >
                  <img
                    src={item.image || "./assets/images/default.jpg"} // Default image if none is provided
                    alt={item.name || "Equipment Image"}
                    loading="lazy"
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <p className="text-white text-center px-4">
                      {item.name || "Equipment Name"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          
        </div>
      )}
    </>
  );
}

export default Quality;
