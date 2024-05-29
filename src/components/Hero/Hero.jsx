function Hero() {
  return (
    <div className="App flex justify-end pt-8 md:pr-7">
      {/* Loading */}
      <div className="Loading">
        <div className="Spiner"></div>
      </div>
      {/* Hero Section */}
      <div className="heroSection sm:w-full  md:w-6/12 h-full flex flex-col items-center justify-start">
        <h1 className="text-4xl md:text-7xl title text-center mt-36 md:mt-28">
          P A Y L A Ş M A K
          <br />
          B A Ğ L A M A K
          <br />B Ü Y Ü M E K
        </h1>
        <h3 className="sub-title text-green-400 relative bottom-6 z-10 text-3xl md:text-4xl text-center">
          En güvenilir dijital markalama platformu ecoQr ile dijital
          kartvizitler olusturun, özellestirin ve paylasın
        </h3>
      </div>
    </div>
  );
}

export default Hero;
