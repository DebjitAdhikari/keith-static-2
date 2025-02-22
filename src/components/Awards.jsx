import React, { useEffect, useState } from "react";

const Awards = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    imageSrc: "",
    title: "",
    description: "",
  });

  // Function to open the modal with the clicked image's content
  const openModal = (image, title, description) => {
    setModal({
      isOpen: true,
      image,
      title,
      description,
    });
  };

  // Function to close the modal
  const closeModal = () => {
    setModal({
      isOpen: false,
      imageSrc: "",
      title: "",
      description: "",
    });
  };
  const certificates = [
    { title: "CERTIFICATE OF APPRECIATION FROM DALBO",description:"This is certificate description", image: "/assets/images/certificates/CERTIFICATE OF APPRECIATION FROM DALBO.jpg" },
    { title: "EEPC AWARD CERTIFICATE_19-20",description:"This is certificate description", image: "/assets/images/certificates/EEPC AWARD CERTIFICATE_19-20.jpg" },
    { title: "EEPC AWARD CERTIFICATE_20-21",description:"This is certificate description", image: "/assets/images/certificates/EEPC AWARD CERTIFICATE_20-21.jpg" },
    { title: "EEPC AWARD PLAQUE FOR STAR PERFORMER_19-20",description:"This is certificate description", image: "/assets/images/certificates/EEPC AWARD PLAQUE FOR STAR PERFORMER_19-20.jpg" },
    { title: "EEPC AWARD PLAQUE FOR STAR PERFORMER_20-21",description:"This is certificate description", image: "/assets/images/certificates/EEPC AWARD PLAQUE FOR STAR PERFORMER_20-21.jpg" },
    { title: "ISO 9001-KEITH CERAMIC",description:"This is certificate description", image: "/assets/images/certificates/ISO 9001-KEITH CERAMIC _ 9K.jpg" },
    { title: "ISO 14001-KEITH CERAMIC",description:"This is certificate description", image: "/assets/images/certificates/ISO 14001-KEITH CERAMIC _ 14K.jpg" },
    { title: "ISO 45001-KEITH CERAMIC",description:"This is certificate description", image: "/assets/images/certificates/ISO 45001-KEITH CERAMIC _ 45K.jpg" },
  // Add more products as needed
];

  return (
    <div className="max-w-7xl mx-auto items-center mt-10 px-2 gap-8 py-[80px]">
      {/* Heading */}
      <div>
        <h1 className="text-xl md:text-3xl font-bold border-l-4 border-blue-800 pl-2 text-[#FD5D14] mb-4 md:mb-10">
          Awards
        </h1>
      </div>

      {/* Image Section */}
      <div className="max-w-7xl rounded-lg mx-auto flex flex-col-reverse lg:flex-row justify-around items-center mt-10 px-2 py-3 md:px-8 gap-8">
        {/* Image container */}
        <div className="w-full h-[200px] md:h-[300px] px-5 py-4 rounded-lg border-2 lg:h-[400px] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
            {certificates.length > 0 ? (
              certificates.map((certificate, index) => (
                <img
                  key={index}
                  src={certificate.image}
                  alt={certificate.title || `Award ${index + 1}`}
                  className="w-full hover:cursor-pointer h-[300px] rounded-lg shadow-lg object-contain"
                  onClick={() =>
                    openModal(
                      certificate.image,
                      certificate.title,
                      certificate.description
                    )
                  }
                />
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No certificates available to display.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modal.isOpen && (
        <div
          id="image-modal"
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.id === "image-modal") closeModal(); // Close on background click
          }}
        >
          <div className="bg-white overflow-y-auto h-[300px] sm:h-[500px] w-10/12 sm:w-2/3 lg:w-1/3 rounded-lg overflow-hidden shadow-lg relative">
            {/* Close Button */}
            <button
              id="close-modal"
              className="absolute top-3 right-3 bg-gray-200 hover:bg-red-500 text-gray-600 hover:text-white rounded-full w-8 h-8 flex justify-center items-center shadow"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div>
              <img
                id="modal-image"
                src={modal.image}
                alt={modal.title}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="p-4 text-left">
              <h2
                id="modal-title"
                className="text-md sm:text-lg font-bold mb-2"
              >
                {modal.title}
              </h2>
              <p
                id="modal-description"
                className="text-gray-600 text-xs sm:text-sm"
              >
                {modal.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
