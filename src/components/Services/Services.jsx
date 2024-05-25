import services1 from "/services/step1.svg";
import services2 from "/services/step2.svg";
import services3 from "/services/step3.svg";

function Services() {
  return (
    <div className="w-full md:w-4/5 mx-auto mt-10 md:mt-20 space-y-5 md:space-y-0 flex-col md:flex md:flex-row  justify-center gap-10 bg-green-100 p-5 md:p-10 rounded-xl">
      <div className="p-4 md:py-8 md:px-4 rounded-xl bg-white basis-1/3">
        <img src={services1} className="w-20" />
        <h4 className="font-medium md:font-bold text-lg md:text-xl text-zinc-600 my-2 mt-2 md:mt-6">
          Etkileyici bağlantı deneyimi
        </h4>
        <p className="text-sm md:text-base font-medium text-zinc-500">
          greenCode dijital kartvizit, iletişim bilgilerinizi, sosyal medya
          bilgilerinizi ve çok daha fazlasını bir uygulamaya ihtiyaç duymadan
          herhangi bir akıllı telefona temassız hızlı bir şekilde aktarmanıza
          olanak tanır.
        </p>
      </div>
      <div className="p-4 md:py-8 md:px-4 rounded-xl bg-white basis-1/3">
        <img src={services2} className="w-20 md:w-[230px] md:mx-auto" />
        <h4 className="font-medium md:font-bold text-lg md:text-xl text-zinc-600 my-2 mt-2 md:mt-6">
          Daha güçlü bir imaj
        </h4>
        <p className="text-sm md:text-base font-medium text-zinc-500">
          greenCode kartvizit ile iletişim bilgilerinizi akılda kalıcı bir
          şekilde paylaşır ve güçlü bir ilk izlenim bırakırsınız. greenCode
          kartvizit insanlar için ilgi çekici ve unutulmaz bir deneyim sunar.
        </p>
      </div>
      <div className="p-4 md:py-8 md:px-4 rounded-xl bg-white basis-1/3">
        <img src={services3} className="w-20" />
        <h4 className="font-medium md:font-bold text-lg md:text-xl text-zinc-600 my-2">
          Maliyetleri düşür
        </h4>
        <p className="text-sm md:text-base font-medium text-zinc-500">
          Bilgileriniz her değiştiğinde yeni kartvizit almak zorunda kalmayarak,
          zamandan ve maliyetten tasarruf edin.
        </p>
      </div>
    </div>
  );
}

export default Services;
