import socialicons from "/social/social-icons.png";
function Social() {
  return (
    <div className="mt-20 w-4/5 mx-auto flex flex-col items-center">
      <h3 className="text-4xl font-semibold text-zinc-500">
        Dijital kartvizit nedir?
      </h3>
      <p className="text-center text-xl font-semibold tracking-wide text-zinc-400 mt-4">
        Dijital kartvizit uygulaması, iletişim bilgilerini ve sosyal medya hesaplarını paylaşmanın modern
        yoludur. Sanal ve elektronik kartvizitler olarak da bilinen dijital
        kartvizitler, son derece özelleştirilebilir, etkileşimli, paylaşılması
        kolay ve fiziksel kartlara göre uygun maliyetli alternatiflerdir.
      </p>
      <img src={socialicons} className="h-72 mx-auto mt-4" />
    </div>
  );
}

export default Social;
