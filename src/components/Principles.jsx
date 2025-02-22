function Principles() {
    return (
        <div className="max-w-7xl  mx-auto  mt-10 px-2 md:px-8 gap-8  py-[80px]">
             {/* heading */}
             <div>
                 <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Principles & Core Values</h1>
             <p className="text-gray-700 text-md sm:text-md font-medium">These values are deeply rooted in our rich Indian culture and guide us in building long-term relationships based on trust and mutual respect.</p>
             </div>
             {/* values container */}
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                 {/* Value Card */}
                 <div className="hover:cursor-pointer max-h-[400px] rounded-md flex flex-col gap-2 items-center px-4 py-5 text-white bg-[#02245B] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#02245B] hover:to-[#034694]">
  <img
    src="./assets/gifs/customer.svg"
    className="w-[50px] h-[50px] transition-transform duration-300 hover:rotate-12"
    alt=""
  />
  <h1 className="font-bold text-center sm:text-xl hover:text-[#FD5D14] transition-colors duration-300">
    Customer-First Approach
  </h1>
  <p className="sm:text-sm text-xs text-center">
    We have always adopted a customer-first approach, evolving to meet the
    ever-changing needs of our clients, while upholding the core values.
  </p>
</div>

<div className="hover:cursor-pointer max-h-[400px] rounded-md flex flex-col gap-2 items-center px-4 py-5 text-white bg-[#02245B] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#02245B] hover:to-[#034694]">
  <img
    src="./assets/gifs/honesty.svg"
    className="w-[50px] h-[50px] transition-transform duration-300 hover:rotate-12"
    alt=""
  />
  <h1 className="font-bold text-center sm:text-xl hover:text-[#FD5D14] transition-colors duration-300">
    Honesty
  </h1>
  <p className="sm:text-sm text-xs text-center">
    We strive to maintain complete honesty in all our dealings, ensuring
    transparency and open communication with our clients, employees, and
    partners.
  </p>
</div>

<div className="hover:cursor-pointer max-h-[400px] rounded-md flex flex-col gap-2 items-center px-4 py-5 text-white bg-[#02245B] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#02245B] hover:to-[#034694]">
  <img
    src="./assets/gifs/integrity.svg"
    className="w-[50px] h-[50px] transition-transform duration-300 hover:rotate-12"
    alt=""
  />
  <h1 className="font-bold text-center sm:text-xl hover:text-[#FD5D14] transition-colors duration-300">
    Integrity
  </h1>
  <p className="sm:text-sm text-xs text-center">
    Our integrity is at the core of everything we do. We commit to honest,
    ethical practices, even when it's challenging, to always do what is right.
  </p>
</div>

<div className="hover:cursor-pointer max-h-[400px] rounded-md flex flex-col gap-2 items-center px-4 py-5 text-white bg-[#02245B] transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#02245B] hover:to-[#034694]">
  <img
    src="./assets/gifs/transparency.svg"
    className="w-[50px] h-[50px] transition-transform duration-300 hover:rotate-12"
    alt=""
  />
  <h1 className="font-bold text-center sm:text-xl hover:text-[#FD5D14] transition-colors duration-300">
    Transparency
  </h1>
  <p className="sm:text-sm text-xs text-center">
    We believe in full transparency with all our stakeholders, providing clear,
    accurate information that enables trust and alignment in every decision.
  </p>
</div>
 
                 
          </div>
         
        </div>
    )
}

export default Principles
