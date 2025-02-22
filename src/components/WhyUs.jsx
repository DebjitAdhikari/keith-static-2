function WhyUs() {
    return (
        <div className="max-w-7xl  mx-auto  items-center md:mt-10 px-2  gap-8  md:py-[80px]">
          {/* heading */}
          <div >
            <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Why Keith Ceramic ?</h1>
          </div>

          {/* details */}
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-around items-center mt-10 px-2 md:px-8 gap-8">
            {/* Text Section */}
            <div className="max-w-[700px] text-black  md:text-left">
            <ul>
  <li>
    ▣ Keith Ceramic (KTC): Leading & well-established manufacturer & exporter of grey iron castings since 1992.<br /><br />
    Keith Ceramic (KTC) is a family-owned business with over three decades of experience in manufacturing grey iron castings. Founded in 1992, we have become a distinguished manufacturer and exporter of high-quality grey iron castings with an annual installed production capacity of 30,000 MT.
  </li>
  <li>
    ▣ Strategic location for efficient operations.<br /><br />
    KTC is strategically located with easy access to 2 nearby ports and a railway station, making it easier to transport multi-axle goods efficiently. Our facility is conveniently situated along a national highway, ensuring smooth logistics and timely delivery.
  </li>
  <li>
    ▣ Access to key raw materials.<br /><br />
    Our site is in close proximity to essential raw materials such as pig iron, hard coke, scrap, and ferro alloys, allowing us to maintain a consistent supply chain and produce high-quality castings.
  </li>
</ul>
                </div>
            {/* Image Section */}
            <div className="mt-6 max-w-[500px]  ">
                <img className="rounded-lg  w-full" src="./assets/gifs/the-gif.gif" alt="Who we are" />
                {/* <img className="rounded-lg  w-full" src="./assets/gifs/the-gif.gif" alt="Who we are" /> */}
            </div>
          </div>
        </div>
    )
}

export default WhyUs
