import { Link } from "react-router-dom";

function PrideInspiration() {
  
  const people = [
    { name: "Murari Lal Ruia", image: "/assets/images/persons/MURARI LAL RUIA-min.jpg",position:"Founder",description:"I am the Founder" },
    { name: "Yashwant Ruia", image: "/assets/images/persons/YASHWANT MURARI LAL.jpg",position:"Co-Founder",description:"Hi, I am Who are you looking for?" },
    { name: "Anant Kumar Ruia", image: "/assets/images/persons/ANANT KUMAR-min.jpg",position:"Co-Founder",description:"Hi, I am Who are you looking for?" },
   
    // Add more products as needed
  ];

  return (
    <div className="min-h-[50vh] w-[100vw] py-10 px-4 ">
      {/* Section Title */}
      <div className="text-left lg:ml-14 mb-10">
        <h1 className="text-lg  border-l-4 border-blue-700 pl-2 md:text-4xl font-bold text-[#FD5D14]">
          Our Pride Our Inspiration
        </h1>
      </div>

      {/* Management Section */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
        {people.map((item, index) => (
          <div
            key={index}
            className="relative group w-[300px] bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
              <div className="text-white">
                <h2 className="text-lg sm:text-2xl font-bold">{item.name}</h2>
                <p className="text-sm sm:text-md font-light">{item.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/about"
          className="bg-[#FD5D14] hover:bg-[#e04c0f] px-6 py-3 rounded-full text-white font-semibold shadow-md transition-transform transform hover:scale-105 flex items-center gap-2"
        >
          <span>See More</span>
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
      </div>
    </div>
  );
}

export default PrideInspiration;