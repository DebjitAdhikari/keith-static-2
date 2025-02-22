

function History() {
  
  const histories = [
    {
      date: "1988",
      title: "Start",
      description:
        "Initially started as a trader of castings, forgings, machined parts, and fabricated components.",
    },
    {
      date: "1992",
      title: "Formal Incorporation",
      description: "Formally incorporated Keith Ceramic (KTC).",
    },
    {
      date: "1993",
      title: "Expansion into Casting Manufacturing",
      description:
        "Leasing 3 small foundries for enhanced production, while continuing to trade in other iron and steel products.",
    },
    {
      date: "2004",
      title: "Pursuit of Backward Integration",
      description:
        "We pursued backward integration, marking a significant turning point that laid the foundation for our continuous growth and long-term success. This strategic decision allowed us to gain more control over production processes, enhance product quality, and improve operational efficiency.",
    },
    {
      date: "2012",
      title: "Installation of Second Cupola Furnace",
      description:
        "We installed our second divided blast energy-efficient cupola furnace, which significantly doubled our production capacity. This upgrade enabled us to meet growing demand and enhance our ability to deliver high-quality grey iron castings more efficiently.",
    },
    {
      date: "2018",
      title: "Addition of New Equipment",
      description:
        "We expanded our machining capacity by installing new lathe machines and radial drills. We also installed a shot blasting machine and a weighbridge to further enhance our operations. These upgrades have improved our production efficiency, product quality, and overall operational capabilities, allowing us to better serve our customers with machined castings and superior surface finish.",
    },
    {
      date: "2022",
      title: "Installation of High-Pressure Moulding Line",
      description:
        "We installed a fully automated PLC-controlled high-pressure moulding line, complete with a fully automated sand plant and mould handling system. This state-of-the-art technology has significantly boosted our production efficiency, allowing us to manufacture high-quality precision castings consistently with improved turnaround times.",
    },
    {
      date: "2023",
      title: "Awarded 'One Star Export House' Status",
      description:
        "We were proudly awarded the prestigious One Star Export House status by the Government of India. This recognition highlights our excellence in international trade and underscores our reputation as a reliable exporter of high-quality castings and other iron and steel products.",
    },
    {
      date: "2024",
      title: "Installation of 110 KW “On Grid” Rooftop Solar Power Generation System",
      description:
        "We have installed a state-of-the-art 110 KW 'on grid' rooftop solar power generation system. This eco-friendly initiative underscores our commitment to sustainability and reducing our carbon footprint, while ensuring a reliable and cost-effective energy solution for our manufacturing operations.",
    },
  ];


  return (
    <div className="w-[90vw] mx-auto md:max-w-7xl mt-[100px] md:mt-[250px] flex flex-col gap-8">
      <h1 className="text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4">
        Our History
      </h1>
      <ul className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2 sm:block hidden"></div>

        {histories?.map((item, index) => (
          <li
            key={index}
            className={`relative mb-12 flex sm:items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            } sm:flex-row flex-col items-start`}
          >
            {/* Timeline Connector (Tick SVG) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#FD5D14] h-4 w-4 rounded-full z-10 sm:block hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#FD5D14"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Timeline Content */}
            <div
  className={`bg-[#02245B] hover:cursor-pointer text-white px-6 py-6 rounded-xl shadow-lg sm:w-[40%] w-full ${
    index % 2 === 0 ? "sm:mr-4 sm:text-left" : "sm:ml-4 sm:text-right"
  } transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-[#033D7B] hover:text-[#E6E6FA]`}
>
  <time className="block text-lg font-semibold">{item.date}</time>
  <div className="md:text-lg text-[#FD5D14] font-extrabold mb-3">
    {item.title}
  </div>
  <div className="text-[#E6E6FA] leading-relaxed text-xs md:text-base opacity-90 hover:opacity-100 transition-all duration-300">
    {item.description}
  </div>
</div>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
