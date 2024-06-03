import React from "react";
import digitalCard from "/businessCardDesc/digitalCard.png";
import digital1 from "/businessCardDesc/digital1.png";
import digital2 from "/businessCardDesc/digital2.png";
import digital3 from "/businessCardDesc/digital3.png";

function DigitalCard() {
  return (
    <div className="px-2 md:flex md:flex-row items-center mt-10 gap-5">
      <div className="rounded basis-1/2">
        <img src={digitalCard} className="w-[680px] rounded-2xl" />
      </div>
      <div className="w-full md:basis-1/2 space-y-8 md:space-y-14 mt-10 md:mt-0">
        <div>
          <div className="flex items-center justify-center 2xl:justify-start gap-1 md:gap-3 pl-2 md:pl-0">
            <img src={digital2} className="w-20 md:w-24" />
            <p className="font-medium text-sm md:text-base">
              1. Lütfen bilgilerinizi eksiksiz doldurun ve ödemeyi
              gerçekleştirin
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center 2xl:justify-start md:pl-2  gap-1 md:gap-3">
            <img src={digital1} className="w-24 md:w-28" />
            <p className="font-medium text-sm md:text-base">
              2. Girilen bilgiler ve seçilen tema ile oluşturulan QR kodu
              e-posta hesabınıza gönderilecektir
            </p>
          </div>
        </div>
        <div>
          <div className="flex mt-6 items-center justify-center 2xl:justify-start pl-3 md:pl-5 gap-1 md:gap-3">
            <img src={digital3} className="w-20 md:w-24" />
            <p className="font-medium text-sm md:text-base">
              3. Dijital kartınızdaki bilgileri güncellemek için, e-posta
              adresiniz ve size gönderilen şifre ile giriş yaparak güncelleyebilirsiniz.
              Ayrıca, isterseniz profil bilgilerinizi de değiştirebilirsiniz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalCard;
