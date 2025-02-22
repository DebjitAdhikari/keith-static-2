

function HeroSection() {
  
  return (

   
    <div className="relative mt-[100px] w-full">
      <div className="video-container absolute inset-0 h-full w-full">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          {/* {preview ? (
            <source src="assets/videos/hero-bg-video.mp4" type="video/mp4" />
          ) : (
            <p>Video not available</p>
          )} */}
          <source src="assets/videos/hero-bg-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay absolute inset-0 bg-black bg-opacity-50"></div>

      </div>
      
      <div className="relative min-h-screen">
  {/* Video container - should be sibling to content */}
  <video className="absolute inset-0 w-full h-full object-cover z-0">
    {/* Your video source here */}
  </video>

  {/* Text content overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center text-gray-100 p-10">
    {/* <h1 className="text-xl sm:text-3xl md:text-6xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" dangerouslySetInnerHTML={{__html: HeroData?.content1}}> */}
    <h1 className="text-xl sm:text-3xl md:text-6xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" >
      Welcome To <br className="block sm:hidden"></br>Keith Ceramic  
    </h1>
    <p className="text-sm sm:text-lg md:text-xl mt-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      Lasting Impression Cast in Iron
    </p>
  </div>
</div>
    </div>
  );
  
}

export default HeroSection;