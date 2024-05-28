import person from "/description/person.svg";
import android from "/description/android.svg";
import ios from "/description/ios.svg";
import network from "/description/network.svg";
import soon from "/description/soon.svg";

function Description() {
  return (
    <div className="w-full md:w-full md:h-[500px] mx-auto mt-10 md:mt-20 flex-col md:flex md:flex-row gap-10 bg-green-100 p-5 md:p-10 rounded-xl space-y-5 items-center md:space-y-0">
      <div className="flex flex-col md:h-[300px]  justify-center py-8 px-4 rounded-xl bg-white basis-1/4">
        <img src={person} className="w-10 md:w-14"/>
        <p className=" md:text-xl font-medium md:font-semibold mt-6 text-zinc-500">
          <span className="text-[#06c]">
            Yalnızca bir kişinin qr code ihtiyacı vardır
          </span>{" "}
          ve herkes bağlantı kurabilir
        </p>
      </div>

      <div className="flex flex-col md:h-[300px] justify-center py-8 px-4 rounded-xl bg-white basis-1/4">
        <div className="flex gap-2 items-center">
          {" "}
          <img src={android} className="w-10 md:w-12"/>
          <img src={ios} className="w-10 md:w-12"/>
        </div>

        <p className="md:text-xl font-medium md:font-semibold mt-6 text-zinc-500">
          <span className="text-[#ac39ff]">Her türlü</span> telefonla çalışır.
          Hem iPhone hem de Android.
        </p>
      </div>

      <div className="flex flex-col md:h-[300px] justify-center py-8 px-4 rounded-xl bg-white basis-1/4">
        <img src={network} className="w-10 md:w-12"/>
        <p className="md:text-xl font-medium md:font-semibold mt-6 text-zinc-500">
          Profilinizi paylaşmak için
          <span className="text-[#ff0053]"> uygulamaya gerek yok.</span>{" "}
          Tarayıcıda açılır
        </p>
      </div>

      <div className="flex flex-col md:h-[300px] justify-center  py-8 px-4 rounded-xl bg-white basis-1/4">
        <img src={soon} className="w-10 md:w-12"/>
        <p className="md:text-xl font-medium md:font-semibold mt-6 text-zinc-500">
          <span className="text-[#ff9f0f]">
            Bir ömür boyu dayanacak şekilde üretildi.
          </span>{" "}
          Bilgileriniz değiştikçe güncelleyin
        </p>
      </div>
    </div>
  );
}

export default Description;
