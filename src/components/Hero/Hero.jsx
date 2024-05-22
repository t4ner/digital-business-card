import heroimage from "/hero/hero.png";
function Hero() {
  return (
    <div className="w-4/5 mx-auto flex justify-between items-center gap-10">
      <div className="basis-2/3">
        <h2 className="text-4xl font-semibold text-zinc-500 ">
          MÜŞTERİLERİNİZLE HER ZAMAN, HER YERDE BAĞLANTI KURUN
        </h2>
        <h2 className="text-2xl font-bold mt-8 text-zinc-500 tracking-wide">
          DİJİTAL KARTVİZİT
        </h2>
        <p className="uppercase text-xl font-bold tracking-wide text-zinc-400 mt-1">
          EN GÜVENİLİR DİJİTAL MARKALAMA PLATFORMU{" "}
          <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-1 font-bold">
            greenCode
          </span>{" "}
          İLE DİJİTAL KARTVİZİTLER OLUŞTURUN, ÖZELLEŞTİRİN VE PAYLAŞIN{" "}
        </p>
      </div>
      <div className="basis-1/3 p-10">
        <img src={heroimage} className="bg-left object-cover basis-1/2" />
      </div>
    </div>
  );
}

export default Hero;
