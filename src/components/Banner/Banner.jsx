import banner from "/banner/banner.jpg";
function Banner() {
  return (
    <div className="w-full mt-16 relative flex items-center justify-center">
      <img src={banner} className=" h-[500px] w-full bg-top" />
      <div className="absolute text-center">
        <h3 className="text-white font-semibold text-3xl">
          DOĞAYI KORUMAK ÜZERİNE DAHA FAZLA DÜŞÜNMEYE BAŞLADINIZ MI?
        </h3>
        <p className="text-white font-semibold text-xl tracking-wide mt-4">
          {" "}
          Geleceğimizi şekillendiren teknoloji, aynı zamanda doğal
          kaynaklarımızı koruma sorumluluğumuzu da arttırıyor. Yeşil teknoloji
          ürünü olan greenCode dijital kartları sayesinde kağıt kullanımını minimuma
          indirerek çevre dostu bir çözüm sunar
        </p>
      </div>
    </div>
  );
}

export default Banner;
