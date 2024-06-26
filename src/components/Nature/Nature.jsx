import React from "react";
import nature1 from "/natureImage/nature1.webp";
import nature2 from "/natureImage/nature2.webp";
import nature3 from "/natureImage/nature3.webp";
function Nature() {
  return (
    <div className="w-full md:w-4/5 mx-auto mt-20 flex-col md:flex md:flex-row items-center justify-center gap-5 ">
      <div className="relative mx-auto flex items-center justify-center flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 md:w-96">
        <div className="relative h-[221px] mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img src={nature1} alt="card-image" className="object-cover" />
        </div>
        <div className="p-6">
          <p className="block text-sm md:text-base antialiased leading-relaxed text-inherit font-medium text-zinc-500">
            Geleneksel iş kartları, her yıl milyonlarca ağacın kesilmesine ve
            suyun israf edilmesine neden olurken, dijital kartvizitler kağıt
            israfını ortadan kaldırıyor ve doğal kaynakları koruyor. Bu sadece
            çevresel bir fayda sağlamakla kalmıyor, aynı zamanda kuraklıkla
            mücadeleye de destek oluyor.
          </p>
        </div>
      </div>
      <div className="relative mx-auto flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 md:w-96 pt-10 md:pt-0">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={nature2}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <p className="block text-sm md:text-base antialiased font-medium text-zinc-500 leading-relaxed text-inherit">
            Dijital kartvizitler, sürdürülebilirlik ve çevre koruma çabalarının
            bir parçası olarak yeşil iletişimi teşvik ediyor ve kuraklıkla
            mücadelede aktif bir rol üstleniyor. Kağıt israfını azaltan dijital
            kartvizitler, işletmelerin çevre dostu kimliklerini vurgulayarak
            daha sürdürülebilir bir iş modeline geçiş yapmalarını sağlıyor.
          </p>
        </div>
      </div>
      <div className="relative mx-auto flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 md:w-96 pt-10 md:pt-0">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={nature3}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="p-6">
          <p className="block  text-sm md:text-base antialiased font-medium text-zinc-500 leading-relaxed text-inherit">
            Kağıt israfını azaltarak ağaç kesimlerini engelleyen dijital
            kartvizitler, işletmelerin çevresel etkilerini azaltarak kuraklıkla
            mücadeleye katkı sağlıyor. Teknoloji ve dijital kartvizitlerini
            kullanarak, iş dünyasında daha yeşil ve sürdürülebilir bir gelecek
            için adım atabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Nature;
