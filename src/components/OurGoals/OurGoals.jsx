import goals1 from "/ourgoals/goals1.svg";
import goals2 from "/ourgoals/goals2.svg";
import goals3 from "/ourgoals/goals3.svg";
import goals4 from "/ourgoals/goals4.svg";

function OurGoals() {
  return (
    <div className="mt-20 w-4/5 mx-auto bg-green-100 rounded-xl">
      <div className="p-10 space-y-6 ">
        <h3 className="text-3xl font-semibold text-zinc-500">
          Yıllık hedeflerimiz
        </h3>
        <p className="text-zinc-500 text-lg">
          Kağıtsız iletişim değişimiyle çevresel ayak izinizi azaltın.
          İş dünyasının ötesinde bir etki yaratmak için buradayız. Satılan her ürün bir ağaca eşittir.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-5">
            <img src={goals1} alt="" />
            <div>
              <p className="text-3xl text-purple-700 font-semibold">1000 +</p>
              <p className="text-xl  text-zinc-500">Ağaç</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={goals2} alt="" />
            <div>
              <p className="text-3xl text-purple-700 font-semibold">20.000 +</p>
              <p className="text-xl  text-zinc-500">lbs atık</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={goals3} alt="" />
            <div>
              <p className="text-3xl text-purple-700 font-semibold">100.000 +</p>
              <p className="text-xl text-zinc-500">Galon su</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={goals4} alt="" />
            <div>
              <p className="text-3xl text-purple-700 font-semibold">20.000 +</p>
              <p className="text-xl text-zinc-500">lbs karbon emisyonu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGoals;
