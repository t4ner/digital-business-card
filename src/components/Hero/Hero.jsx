import heroimage from "/logo/logo2.png";
function Hero() {
  return (
    <div className="w-4/5 mx-auto mt-4 flex justify-between items-center gap-10">
      <div className="basis-2/3">
        <h2 className="text-4xl font-bold text-zinc-500 ">
          <span className="text-green-300">greenCode</span> DİJİTAL KARTVİZİTİ
          İLE AĞ İLETİŞİMİNİN GELECEĞİNE GİRİN
        </h2>
        <h2 className="text-4xl font-bold mt-8 text-zinc-500 tracking-wide">
          DİJİTAL KARTVİZİT
        </h2>
        <p className=" text-3xl font-bold tracking-wide text-zinc-400 mt-1">
          EN GÜVENİLİR DİJİTAL MARKALAMA PLATFORMU{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-1 font-bold">
            greenCode
          </span>{" "}
          İLE DİJİTAL KARTVİZİTLER OLUŞTURUN, ÖZELLEŞTİRİN VE PAYLAŞIN{" "}
        </p>
      </div>
      <div className="w-1/3 p-10 rounded-lg">
        <img src={heroimage} className="object-cover rounded-lg" />
      </div>
    </div>
  );
}

export default Hero;
