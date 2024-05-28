import goals1 from "/ourgoals/goals1.svg";
import goals2 from "/ourgoals/goals2.svg";
import goals3 from "/ourgoals/goals3.svg";
import goals4 from "/ourgoals/goals4.svg";

function OurGoals() {
  return (
    <div className="mt-10 md:mt-20 md:h-[500px] flex  items-center w-full md:w-full mx-auto bg-green-100 rounded-xl">
      <div className="p-5 md:p-10 md:space-y-6 ">
        <h3 className="text-lg md:text-3xl font-medium md:font-semibold text-zinc-600">
          Yıllık hedeflerimiz
        </h3>
        <p className="text-zinc-500 font-medium md:font-semibold text-sm md:text-xl py-0 md:py-4 mt-1 mb-5 md:mt-0 md:mb-0">
          Kağıtsız iletişim değişimiyle çevresel ayak izinizi azaltın. İş
          dünyasının ötesinde bir etki yaratmak için buradayız. Satılan her ürün
          bir ağaca eşittir.
        </p>
        <div className="flex flex-wrap md:flex md:flex-row justify-around items-center gap-5 ">
          <div>
            <div className="flex-col md:flex md:flex-row items-center gap-5">
              <img src={goals1} className="w-9" />
              <div>
                <p className="text-xl md:text-3xl text-purple-700 font-semibold">
                  1000+
                </p>
                <p className="md:text-xl  text-zinc-500">Ağaç</p>
              </div>
            </div>
            <div className="flex-col md:flex md:flex-row  items-center gap-5 mt-8 ">
              <img src={goals2} className="w-8" />
              <div>
                <p className="text-xl md:text-3xl text-purple-700 font-semibold">
                  20.000+
                </p>
                <p className="md:text-xl  text-zinc-500">lbs atık</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex-col md:flex md:flex-row  items-center gap-5">
              <img src={goals3} className="w-10" />
              <div>
                <p className="text-xl md:text-3xl text-purple-700 font-semibold">
                  100.000+
                </p>
                <p className="md:text-xl text-zinc-500">Galon su</p>
              </div>
            </div>
            <div className="flex-col md:flex md:flex-row  items-center gap-5 mt-5 ">
              <img src={goals4} className="w-10" />
              <div>
                <p className="text-xl md:text-3xl text-purple-700 font-semibold">
                  20.000+
                </p>
                <p className="md:text-xl text-zinc-500">lbs karbon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGoals;
