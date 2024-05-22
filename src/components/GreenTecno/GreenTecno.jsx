import greenTecno from "/greenTecno/greenTecnoImage.png";
function GreenTecno() {
  return (
    <div className="w-4/5 mx-auto flex flex-col justify-between items-center gap-10 mt-20">
      <div className=" text-center">
        <h2 className="text-4xl font-semibold text-zinc-500 ">
          <span className="text-green-400">greenCode</span> ile kağıtsız çalışın
        </h2>

        <p className="text-xl font-semibold tracking-wide text-zinc-400 mt-4">
          Artık eski kağıt kartvizitlere veda etmenin, çevre üzerindeki
          etkilerinizi azaltmanın zamanı. Çevre dostu greenCode kartvizit ile
          farkınızı ortaya koyarak markanıza sürdürülebilir yeşil değer katar.
        </p>
      </div>
      <div className="">
        <img src={greenTecno} className="bject-cover w-96" />
      </div>
    </div>
  );
}

export default GreenTecno;
