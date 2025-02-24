
import { useEffect, useState } from "react"
import PlaceAddress from "./PlaceAddress"
function Address() {
  const address = [
    {
      title: "Office",
      image: "assets/images/office.jpg",
      landmark: "Suite-5, Mahamaya Apartments",
      area: "58/1/1, Natabar Paul Road",
      city: "Howrah",
      pin: "711101",
      state: "West Bengal",
      country: "India",
      findonmap: "https://maps.app.goo.gl/VaMT5phZwKjdAU958",
    },
    {
      title: "Factory",
      image: "assets/images/fact.png",
      landmark: "Plot Nos. 42 & 43, Uluberia Industrial Growth Center",
      area: "Birshibpur",
      city: "Howrah",
      pin: "711316",
      state: "West Bengal",
      country: "India",
      findonmap: "https://maps.app.goo.gl/K6CA6HZAEwJCD49i6",
    },
  ];
    return (
        <div className="max-w-7xl  mx-auto  mt-10 px-2 md:px-8 gap-8">
            <h1 className=" text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">Address </h1>
            {/* office and factory */}
            <div className="flex flex-col  mx-auto md:flex-row gap-6 px-1 py-8">
                {/* Office */}
                
                {address?.map((item) => (
                    <PlaceAddress key={item.title} address={item} />
                  ))}
                {/* Factory */}
                
                  
              </div>
              
        </div>
    )

}

export default Address;