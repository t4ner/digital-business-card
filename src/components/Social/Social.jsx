import socialicons from "/social/ecoQr.png";
function Social() {
  return (
    <div className="md:flex md:flex-row flex-col items-center mx-auto justify-center md:w-4/5 gap-10 mt-10 md:mt-[75px]">
     
      <div className="basis-1/2">
        <h3 className="text-lg w-full  md:text-4xl font-medium md:font-semibold text-emerald-500 pb-2 md:pb-5">
          {" "}
          Dijital kartvizit nedir?
        </h3>
        <p className="text-sm md:text-xl font-medium md:font-semibold tracking-wide text-zinc-500 ">
          Dijital kartvizit uygulaması, iletişim bilgilerini ve sosyal medya
          hesaplarını paylaşmanın modern yoludur. Sanal ve elektronik
          kartvizitler olarak da bilinen dijital kartvizitler, son derece
          özelleştirilebilir, etkileşimli, paylaşılması kolay ve fiziksel
          kartlara göre uygun maliyetli alternatiflerdir
        </p>
      </div>
      <div className="basis-1/2 mt-4 md:mt-0">
        <img src={socialicons} />
      </div>  
    </div>

    // <div className=" mt-8 md:mt-20  w-3/4 mx-auto flex justify-center items-center px-2 md:px-0 ">
    //   {" "}
    //   <div className="basis-1/2">
    //     <img src={socialicons} className="w-96" />
    //   </div>
    //   <div className="basis-1/2">
    //     <h3 className="text-lg w-full  md:text-4xl font-medium md:font-semibold text-green-500">
    //       Dijital kartvizit nedir?
    //     </h3>
    //     <p className="w-full text-sm md:text-xl font-medium md:font-semibold tracking-wide text-zinc-500 mt-2 md:mt-4 pr-8">
    //       Dijital kartvizit uygulaması, iletişim bilgilerini ve sosyal medya
    //       hesaplarını paylaşmanın modern yoludur. Sanal ve elektronik
    //       kartvizitler olarak da bilinen dijital kartvizitler, son derece
    //       özelleştirilebilir, etkileşimli, paylaşılması kolay ve fiziksel
    //       kartlara göre uygun maliyetli alternatiflerdir
    //     </p>
    //   </div>
    // </div>
  );
}

export default Social;
