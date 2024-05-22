import person from "/description/person.svg";
import android from "/description/android.svg";
import ios from "/description/ios.svg";
import network from "/description/network.svg";
import soon from "/description/soon.svg";

function Description() {
  return (
    <div className="w-4/5 mx-auto mt-20 flex gap-10 bg-green-100 p-10 rounded-xl">
      <div className="py-8 px-4 rounded-xl bg-white basis-1/4">
        <img src={person} />
        <p className="text-xl font-semibold mt-6 text-zinc-500">
          <span className="text-[#06c]">
            Yalnızca bir kişinin qr code ihtiyacı vardır
          </span>{" "}
          ve herkes bağlantı kurabilir.
        </p>
      </div>

      <div className="py-8 px-4 rounded-xl bg-white basis-1/4">
        <div className="flex gap-2 items-center">
          {" "}
          <img src={android} />
          <img src={ios} />
        </div>

        <p className="text-xl font-semibold mt-6 text-zinc-500">
          <span className="text-[#ac39ff]">Her türlü</span> telefonla çalışır.
          Hem iPhone hem de Android.
        </p>
      </div>

      <div className="py-8 px-4 rounded-xl bg-white basis-1/4">
        <img src={network} />
        <p className="text-xl font-semibold mt-6 text-zinc-500">
          Profilinizi paylaşmak için
          <span className="text-[#ff0053]"> uygulamaya gerek yok.</span>{" "}
          Tarayıcıda açılır.
        </p>
      </div>

      <div className="py-8 px-4 rounded-xl bg-white basis-1/4">
        <img src={soon} />
        <p className="text-xl font-semibold mt-6 text-zinc-500">
          <span className="text-[#ff9f0f]">
            Bir ömür boyu dayanacak şekilde üretildi.
          </span>{" "}
          Bilgileriniz değiştikçe güncelleyin.
        </p>
      </div>
    </div>
  );
}

export default Description;
