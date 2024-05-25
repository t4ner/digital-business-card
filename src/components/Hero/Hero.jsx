import heroimage from "/hero/heroImage.png";
function Hero() {
  return (
    <div className="w-full md:w-4/5 text-center md:text-start mx-auto mt-4 flex-col md:flex md:flex-row justify-between items-center gap-10">
      <div className="basis-2/3">
        <h2 className="text-sm md:text-4xl font-bold text-zinc-500 ">
          <span className="text-green-300">greenCode</span> DİJİTAL KARTVİZİTİ
          İLE AĞ İLETİŞİMİNİN GELECEĞİNE GİRİN
        </h2>
        <h2 className=" text-sm md:text-4xl font-bold mt-4 md:mt-8 text-zinc-500 tracking-wide">
          DİJİTAL KARTVİZİT
        </h2>
        <p className="text-xs md:text-3xl font-bold tracking-wide text-zinc-400 mt-1">
          EN GÜVENİLİR DİJİTAL MARKALAMA PLATFORMU{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-1 font-bold">
            greenCode
          </span>{" "}
          İLE DİJİTAL KARTVİZİTLER OLUŞTURUN, ÖZELLEŞTİRİN VE PAYLAŞIN{" "}
        </p>
      </div>
      <div className="w-full  md:w-1/3 md:p-10 mt-4 md:mt-0 rounded-lg">
        <img src={heroimage} className="object-cover h-36  rounded-lg mx-auto" />
      </div>
    </div>
  );
}

export default Hero;
