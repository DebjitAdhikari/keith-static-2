import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Awards from "../components/Awards";
import History from "../components/History";
import MissionVision from "../components/MissionVision";
import Principles from "../components/Principles";
import TeamManagement from "../components/TeamManagement";
import WhyUs from "../components/WhyUs";
import LoadingPage from "./LoadingPage";
import { motion } from "framer-motion";

function About() {
    // const [metadata, setMetadata] = useState(null);
    

    const [loading, setLoading] = useState(true);

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
                <section className="pt-[150px] bg-gray-100 px-4 md:px-8">
                    {/* {metadata && ( */}
                    <Helmet>
                        <title>About Us | Keith Ceramic - Quality Ceramic Products</title>
                        <meta name="description" content="Discover Keith Ceramic, a leading provider of high-quality ceramic products. Learn about our craftsmanship, team, and commitment to excellence." />
                        <meta name="keywords" content="ceramic products, Keith Ceramic, quality ceramics, handcrafted ceramics, ceramic manufacturing, about Keith Ceramic" />
                        <meta name="author" content="Keith Ceramic" />
                    </Helmet>
                    {/* )} */}

                    {/* Heading */}
                        <div>
                            <h1 className="text-3xl font-bold text-[#02245B] mb-4">About Us</h1>
                        </div>
                    <motion.div initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ amount: "some" }}>
                    </motion.div>

                    {/* Who We Are Section */}
                    <motion.div initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ amount: "some" }} className="max-w-7xl mt-10 px-2 md:px-8 gap-8">
                        {/* Text Section */}
                        <div className="w-full mx-auto md:text-left">
                            <h1 className="text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">
                                Who We Are?
                            </h1> 
                            <motion.div initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ amount: "some" }} className="mt-6 ">
                            
                            <div className="max-w-[600px] mb-4">
                                <img
                                    className="rounded-lg shadow-lg w-full"
                                    src="/assets/images/persons/KEITH CERAMIC TEAM-min.JPG"
                                    alt="Who we are"
                                />
                            </div>
                            </motion.div>
                            <motion.div initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ amount: "some" }}>
                            <div className="space-y-2 text-left text-gray-700 w-full text-sm md:text-md font-medium leading-loose">
  <p>Keith Ceramic (KTC): Leading & well-established manufacturer & exporter of grey iron castings since 1992.</p>
  <p>Keith Ceramic (KTC) is a family-owned business with over three decades of experience in manufacturing grey iron castings. Founded in 1992, we have become a distinguished manufacturer and exporter of high-quality grey iron castings with an annual installed production capacity of 30,000 MT.</p>
  <p>Our dedicated team of skilled, semi-skilled workmen and experienced staff is committed to delivering world-class quality castings on time, every time, and at the most competitive prices in the market.</p>
  <p><strong>Strategic location for efficient operations</strong></p>
  <p>KTC is strategically located with easy access to two nearby ports and a railway station, making it easier to transport multi-axle goods efficiently. Our facility is conveniently situated along a national highway, ensuring smooth logistics and timely delivery.</p>
  <p><strong>Access to key raw materials</strong></p>
  <p>Our site is in close proximity to essential raw materials such as pig iron, hard coke, scrap, and ferro alloys, allowing us to maintain a consistent supply chain and produce high-quality castings.</p>
</div>
                            </motion.div>

                        </div>
                        {/* Image Section */}
                       
                    </motion.div>

                    {/* Other Components with scroll-based animation */}
                    <motion.div initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ amount: "some" }}>
                        <History />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ amount: "some" }}>
                        <MissionVision />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ amount: "some" }}>
                        <Principles />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ amount: "some" }}>
                        <TeamManagement />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeLeft} viewport={{ amount: "some" }}>
                        <WhyUs />
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" variants={fadeRight} viewport={{ amount: "some" }}>
                        <Awards />
                    </motion.div>
                </section>
            )}
        </>
    );
}

export default About;