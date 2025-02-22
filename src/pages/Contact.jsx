import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Address from "../components/Address";
import ContactForm from "../components/ContactForm";
import LoadingPage from "./LoadingPage";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <section className="pt-[150px] bg-gray-100 min-h-[100vh] py-5 px-4 md:px-8">
          {/* heading */}
          <Helmet>
              <title>Contact Us | Keith Ceramic - Get in Touch</title>
              <meta name="description" content="Have questions? Contact Keith Ceramic for inquiries, customer support, or business collaborations. We're here to help!" />
              <meta name="keywords" content="contact Keith Ceramic, ceramic customer support, Keith Ceramic contact, ceramic supplier, ceramic inquiries" />
              <meta name="author" content="Keith Ceramic" />
          </Helmet>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <h1 className="text-lg md:text-3xl font-bold text-[#02245B] mb-4">
              Contact Us
            </h1>
          </motion.div>

          {/* Address */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            viewport={{ amount: "some" }}
          >
            <Address />
          </motion.div>

          {/* Let's connect */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            viewport={{ amount: "some" }}
          >
            <ContactForm />
          </motion.div>
        </section>
      )}
    </>
  );
}

export default Contact;
