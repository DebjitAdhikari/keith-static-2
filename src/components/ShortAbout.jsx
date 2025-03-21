import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


function ShortAbout() {
    
    
    return (
        <div className="min-h-[50vh] w-[100vw] py-6 px-2 flex items-center justify-center bg-gray-100">

                <div className="max-w-7xl  mx-auto flex flex-col lg:flex-row justify-around items-center mt-10 px-2 md:px-8  md:gap-8">
                    {/* Text Section */}
                    <div className="max-w-[700px]  md:text-left">
                        <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Who We Are?</h1>
                        <ul className="space-y-2 text-left text-gray-700 text-sm md:text-md font-medium  leading-loose">
                            {/* <li dangerouslySetInnerHTML={{__html: data?.content}}>  */}
                            <li> 
                                <strong>Keith Ceramic (KTC) is a leading and well-established manufacturer and exporter of grey iron castings since 1992.</strong><br></br><br></br>

                                Keith Ceramic (KTC) is a family-owned business with over three decades of experience in manufacturing grey iron castings. Founded in 1992, we have become a distinguished manufacturer and exporter of high quality grey iron castings with an annual installed production capacity of 30,000 mt. Our dedicated team of skilled, semi-skilled workmen and experienced staff is committed to delivering world-class quality castings on time, every time, and at the most competitive prices in the market.<br></br><br></br>


                                <strong>Strategic location for efficient operations.</strong><br></br><br></br>



                                KTC is strategically located with easy access to two nearby ports and a railway station, making it easier to transport goods on multi-axle vehicles efficiently. Our facility is conveniently situated along a national highway, ensuring smooth logistics and timely delivery.<br></br><br></br>



                                <strong>Access to key raw materials: </strong><br></br><br></br>
                                Our site is in close proximity to essential raw materials such as pig iron, hard coke, scrap, and ferro alloys, allowing us to maintain a consistent supply chain and produce high-quality castings.<br></br></li>
                           
                            <button className="flex bg-[#FD5D14] p-1 sm:p-2 rounded-md text-white  ">
                                <Link to="/about" className="flex gap-2 items-center" >
                                <span>See More </span>
        
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>                      
                                </Link>
                            </button>
                       
                        </ul>
                        </div>
                    {/* Image Section */}
                    <div className="mt-6 max-w-[500px]">
                        <img className="rounded-lg  w-full" src="./assets/images/plant.webp" alt="Who we are" />
                    </div>
                </div>

            </div>
    )
}

export default ShortAbout