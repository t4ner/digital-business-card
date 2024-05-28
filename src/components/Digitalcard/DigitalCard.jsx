import React from "react";
import digitalCard from "/businessCardDesc/digitalCard.png";
import digital1 from "/businessCardDesc/digital1.png";
import digital2 from "/businessCardDesc/digital2.png";
import digital3 from "/businessCardDesc/digital3.png";

function DigitalCard() {
  return (
    <div className="px-2 flex items-center mt-10 gap-5">
      <div className="rounded basis-1/2">
        <img src={digitalCard} className="w-[680px] rounded-2xl" />
      </div>
      <div className="basis-1/2 space-y-14">
        <div>
          <div className="flex items-center justify-center gap-3">
            <img src={digital2} className="w-24" />
            <p className="font-medium">
              1. Lütfen bilgilerinizi eksiksiz doldurun ve ödemeyi
              gerçekleştirin
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center pl-2 gap-3">
            <img src={digital1} className="w-28" />
            <p className="font-medium">
              2. Girilen bilgiler ve seçilen tema ile oluşturulan QR kodu e-posta
              hesabınıza gönderilecektir
            </p>
          </div>
        </div>
        <div>
          <div className="flex mt-6 items-center justify-center pl-5 gap-3">
            <img src={digital3} className="w-24" />
            <p className="font-medium">
              3. Güncellemeler için kaydolun ve panelden bilgilerinizi
              güncelleyin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalCard;
