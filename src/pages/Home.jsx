import HeroSection from "../components/HeroSection";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShortAbout from "../components/ShortAbout";
import HomeProducts from "../components/HomeProducts";
import HomeAwards from "../components/HomeAwards";
import "../styles/Home.css";
import PrideInspiration from "../components/PrideInspiration";
import Testimonial from "../components/Testimonial";
import VirtualTour from "../components/VirtualTour";
import LoadingPage from "./LoadingPage";
import { Helmet } from "react-helmet-async";

function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [loading, setLoading] = useState(true);
  // const [metadata, setmetadata] = useState("");


  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
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

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="flex bg-gray-100 flex-col items-center">
          <Helmet>
              <title>Keith Ceramic | Premium Handmade Ceramics & Pottery</title>
              <meta name="description" content="Shop premium handmade ceramics at Keith Ceramic. Discover our wide range of high-quality pottery and home decor, crafted with excellence." />
              <meta name="keywords" content="Keith Ceramic, handmade ceramics, premium pottery, quality ceramics, home decor, ceramic art, pottery shop" />
              <meta name="author" content="Keith Ceramic" />
          </Helmet>


          <HeroSection />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <ShortAbout />
          </motion.div>

          <div className="w-screen min-h-[100vh]">
            <div
              className="w-screen h-[100vh] flex items-center justify-start"
              style={{
                backgroundImage: "url('/assets/images/persons/KEITH CERAMIC TEAM-min.JPG')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeRight}
                viewport={{ amount: "some" }}
                className="h-auto mx-5 md:mx-10 w-[90%] md:w-[60%] lg:w-[40%] flex flex-col rounded-md gap-4 justify-center items-center bg-gray-200 opacity-90 p-6 md:p-10"
              >
                <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center text-gray-800">
                  Keith Ceramic - Since 1992
                </h1>
                <img
                  src="./assets/images/logo.png"
                  alt="Keith Ceramic Handmade Pottery Logo"
                  loading="lazy"
                  className="h-[50px] md:h-[80px] lg:h-[100px] object-contain"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <VirtualTour />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
          >
            <HomeProducts />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <PrideInspiration />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
          >
            <HomeAwards />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <Testimonial />
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Home;
