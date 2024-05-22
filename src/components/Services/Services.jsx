import services1 from "/services/step1.svg";
import services2 from "/services/step2.svg";
import services3 from "/services/step3.svg";

function Services() {
  return (
    <div className="w-4/5 mx-auto mt-24">
      <div className="flex gap-10">
        <div className="basis-1/3">
          <div>
            <img src={services1} className="w-24" />
          </div>
          <h4 className="font-bold text-xl text-zinc-500 my-2">
            Etkileyici Bağlantı Deneyimi
          </h4>
          <p className="font-medium text-zinc-500">
            greenCode dijital kartvizit, iletişim bilgilerinizi, sosyal medya
            bilgilerinizi ve çok daha fazlasını bir uygulamaya ihtiyaç duymadan
            herhangi bir akıllı telefona temassız hızlı bir şekilde aktarmanıza
            olanak tanır.
          </p>
        </div>
        <div className="basis-1/3">
          <div>
            <img src={services2} alt="" className="w-20" />
          </div>
          <h4 className="font-bold text-xl text-zinc-500 my-2">
            Daha Güçlü Bir İmaj
          </h4>
          <p className="font-medium text-zinc-500">
            greenCode kartvizit ile iletişim bilgilerinizi akılda kalıcı bir
            şekilde paylaşır ve güçlü bir ilk izlenim bırakırsınız. greenCode
            kartvizit insanlar için ilgi çekici ve unutulmaz bir deneyim sunar.
          </p>
        </div>
        <div className="basis-1/3">
          <div>
            <img src={services3} alt="" className="w-24 " />
          </div>
          <h4 className="font-bold text-xl text-zinc-500 mb-2 ">
            Maliyetleri düşür
          </h4>
          <p className="font-medium text-zinc-500">
            Bilgileriniz her değiştiğinde yeni kartvizit almak zorunda
            kalmayarak, zamandan ve maliyetten tasarruf edin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
