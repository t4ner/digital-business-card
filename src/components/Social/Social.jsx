import socialicons from "/social/social-icons.png";
function Social() {
  return (
    <div className=" mt-8 md:mt-20  mx-auto flex flex-col md:items-center px-2 md:px-0">
      <h3 className="text-lg w-full md:w-4/5 md:text-center  md:text-4xl font-medium md:font-semibold text-zinc-600">
        Dijital kartvizit nedir?
      </h3>
      <p className="w-full md:w-4/5 md:text-center text-sm md:text-xl font-medium md:font-semibold tracking-wide text-zinc-500 mt-2 md:mt-4">
        Dijital kartvizit uygulaması, iletişim bilgilerini ve sosyal medya
        hesaplarını paylaşmanın modern yoludur. Sanal ve elektronik kartvizitler
        olarak da bilinen dijital kartvizitler, son derece özelleştirilebilir,
        etkileşimli, paylaşılması kolay ve fiziksel kartlara göre uygun
        maliyetli alternatiflerdir
      </p>
      <div className="">
        <img src={socialicons} className="mt-8 md:mt-20 " />
      </div>
    </div>
  );
}

export default Social;
