import greenTecno from "/greenTecno/greenTecnoImage.png";
function GreenTecno() {
  return (
    <div className="w-full md:w-4/5 md:mx-auto flex px-2 md:px-0 flex-col justify-between items-center gap-10 mt-10 md:mt-20">
      <div className=" md:text-center">
        <h2 className="text-lg md:text-4xl font-medium md:font-semibold text-zinc-600 ">
          <span className="text-green-400">ecoQr</span> ile kağıtsız çalışın
        </h2>

        <p className="text-sm md:text-xl font-medium md:font-semibold md:tracking-wide text-zinc-500 mt-2 md:mt-4">
          Artık eski kağıt kartvizitlere veda etmenin, çevre üzerindeki
          etkilerinizi azaltmanın zamanı. Çevre dostu ecoQr kartvizit ile
          farkınızı ortaya koyarak markanıza sürdürülebilir yeşil değer katar.
        </p>
      </div>
      <div className="">
        <img src={greenTecno} className="bject-cover w-48 md:w-96" />
      </div>
    </div>
  );
}

export default GreenTecno;
