import React, { useEffect, useState } from "react";
import instagram from "/socialMediaLogo/instagram.svg";
import twitter from "/socialMediaLogo/twitter.svg";
import telegram from "/socialMediaLogo/telegram.svg";
import facebook from "/socialMediaLogo/facebook.svg";
import whatsapp from "/socialMediaLogo/whatsapp.svg";
import linkedin from "/socialMediaLogo/linkedin.svg";
import ciceksepeti from "/socialMediaLogo/ciceksepeti.png";
import discord from "/socialMediaLogo/discord.svg";
import Swal from "sweetalert2";
import theme1 from "/themes/10.png";
import theme2 from "/themes/11.png";
import classNames from "classnames";
import wechat from "/socialMediaLogo/wechat.svg";
import axios from "axios";
import { Link } from "react-router-dom";
function CardUpdate() {
  const [bankaInformation, setBankaInformation] = useState([]);
  const [invoiceInformation, setInvoiceInformation] = useState([]);
  const [warrantInformation, setWarrantInformation] = useState([]);

  const [values, setValues] = useState({
    id: "",
    linkId: "",
    themeId: 0,
    name: "",
    surname: "",
    title: "",
    description: "",
    email: "",
    twitter: "",
    instagram: "",
    website: "",
    wechat: "",
    phoneNumber1: "",
    phoneNumber2: "",
    whatsapp: "",
    linkedin: "",
    telegram: "",
    facebook: "",
    location: "",
    discord: "",
    whatsappBusiness: "",
    cicekSepeti: "",
    sahibinden: "",
    trendyol: "",
    hepsiburada: "",
    firm: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = localStorage.getItem("email");
        if (!userEmail) {
          return;
        }
        const token = localStorage.getItem("token");
        const response = await axios.get(
          ` https://ecoqrcode.com/businessCard/getDigitalCardByEmail?email=${userEmail}`
        );

        setValues({
          id: response.data.id || "",
          linkId: response.data.linkId || "",
          themeId: response.data.themeId,
          name: response.data.name || "",
          surname: response.data.surname || "",
          title: response.data.title || "",
          description: response.data.description || "",
          email: response.data.email || "",
          twitter: response.data.twitter || "",
          instagram: response.data.instagram || "",
          website: response.data.website || "",
          wechat: response.data.wechat || "",
          phoneNumber1: response.data.phoneNumber1 || "",
          phoneNumber2: response.data.phoneNumber2 || "",
          whatsapp: response.data.whatsapp || "",
          linkedin: response.data.linkedin || "",
          telegram: response.data.telegram || "",
          facebook: response.data.facebook || "",
          location: response.data.location || "",
          discord: response.data.discord || "",
          whatsappBusiness: response.data.whatsappBusiness || "",
          cicekSepeti: response.data.cicekSepeti || "",
          sahibinden: response.data.sahibinden || "",
          trendyol: response.data.trendyol || "",
          hepsiburada: response.data.hepsiburada || "",
          firm: response.data.firm || "",
        });
        const banka = await axios.get(
          `https://ecoqrcode.com/bankInformation/getBankInformationDigitalCardId?digitalCardId=${response.data.id}`
        );
        setBankaInformation(banka.data);

        const invoice = await axios.get(
          `https://ecoqrcode.com/invoiceInformation/getInvoiceInformationByDigitalCardId?digitalCardId=${response.data.id}`
        );
        setInvoiceInformation(invoice.data);

        const warrant = await axios.get(
          `https://ecoqrcode.com/warrantOfAttorney/getWarrantOfAttorneyByDigitalCardId?digitalCardId=${response.data.id}`
        );
        setWarrantInformation(warrant.data);

        const updatedBankaInformationCreate = bankaInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );

        setBankaInformationCreate(updatedBankaInformationCreate);

        const updatedInvoiceInformationCreate = invoiceInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );

        setInvoiceInformationCreate(updatedInvoiceInformationCreate);

        const updatedWarrantInformationCreate = warrantInformationCreate.map(
          (item, index) => ({
            ...item,
            digitalCardId: response.data.id,
          })
        );

        setWarrantInformationCreate(updatedWarrantInformationCreate);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [bankaInformationCreate, setBankaInformationCreate] = useState([
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
    {
      iban: "",
      accountName: "",
      bankName: "",
      digitalCardId: 0,
    },
  ]);
  const [invoiceInformationCreate, setInvoiceInformationCreate] = useState([
    {
      title: "",
      address: "",
      taxNumber: "",
      taxOffice: "",
      digitalCardId: 0,
    },
  ]);

  const [warrantInformationCreate, setWarrantInformationCreate] = useState([
    {
      title: "",
      address: "",
      citizenId: "",
      registerNo: "",
      barAssociation: "",
      digitalCardId: 0,
    },
  ]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleChangeBanka = (event, index) => {
    const { name, value } = event.target;
    setBankaInformation((prevBankaInformation) => {
      const updatedBankaInformation = [...prevBankaInformation]; // Önceki banka bilgilerini kopyala
      updatedBankaInformation[index] = {
        ...updatedBankaInformation[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedBankaInformation; // Güncellenmiş durumu döndür
    });
  };

  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const handleImage1Change = (event) => {
    const file = event.target.files[0];
    setImage1(file);
    // Call service for image 1
    if (file) {
      sendImageToServer(file, values.linkId, "profilphoto");
    }
  };

  const handleImage2Change = (event) => {
    const file = event.target.files[0];
    setImage2(file);
    if (file) {
      sendImageToServer(file, values.linkId, "banner");
    }
  };

  const handleImage3Change = (event) => {
    const file = event.target.files[0];
    setImage3(file);
    if (file) {
      sendImageToServer(file, values.linkId, values.name);
    }
  };

  const handleImage4Change = (event) => {
    const file = event.target.files[0];
    setImage4(file);
    if (file) {
      sendImageToServer(file, values.linkId, values.name);
    }
  };
  const sendImageToServer = async (image, linkId, name) => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("linkId", values.linkId);
      formData.append("name", name);
      const jsonData = {
        file: image,
        linkId: values.linkId,
        name: name,
      };

      const response = await axios.post(
        "https://ecoqrcode.com/businessCard/upload",
        formData
      );
    } catch (error) {}
  };
  const [showInputInstagram, setShowInputInstagram] = useState(false);
  const showInstagram = () => {
    setShowInputInstagram(!showInputInstagram);
  };
  const [showInputX, setShowInputX] = useState(false);
  const showX = () => {
    setShowInputX(!showInputX);
  };
  const [showInputTelegram, setShowInputTelegram] = useState(false);
  const showTelegram = () => {
    setShowInputTelegram(!showInputTelegram);
  };
  const [showInputFacebook, setShowInputFacebook] = useState(false);
  const showFacebook = () => {
    setShowInputFacebook(!showInputFacebook);
  };
  const [showInputWhatshapp, setShowInputWhatshapp] = useState(false);
  const showWhatshapp = () => {
    setShowInputWhatshapp(!showInputWhatshapp);
  };
  const [showInputLinkedin, setShowInputLinkedin] = useState(false);
  const showLinkedin = () => {
    setShowInputLinkedin(!showInputLinkedin);
  };

  const [showInputDiscord, setShowInputDiscord] = useState(false);
  const showDiscord = () => {
    setShowInputDiscord(!showInputDiscord);
  };

  const [showInputWeChat, setShowInputWeChat] = useState(false);
  const showWeChat = () => {
    setShowInputWeChat(!showInputWeChat);
  };

  const [showInputWhatsappBusiness, setShowWhatsappBusiness] = useState(false);
  const showWhatsappBusiness = () => {
    setShowWhatsappBusiness(!showInputWhatsappBusiness);
  };
  const [showInputCiceksepeti, setShowInputCiceksepeti] = useState(false);
  const showCiceksepeti = () => {
    setShowInputCiceksepeti(!showInputCiceksepeti);
  };

  const [showInputSahibinden, setShowInputSahibinden] = useState(false);
  const showSahibinden = () => {
    setShowInputSahibinden(!showInputSahibinden);
  };

  const [showInputTrendyol, setShowInputTrendyol] = useState(false);
  const showTrendyol = () => {
    setShowInputTrendyol(!showInputTrendyol);
  };

  const [showInputHepsiburada, setShowInputHepsiburada] = useState(false);
  const showHepsiburada = () => {
    setShowInputHepsiburada(!showInputHepsiburada);
  };

  const handleChangeTheme1 = (e) => {
    const value = parseInt(e.target.value);
    setValues((prevValues) => ({
      ...prevValues,
      themeId: value,
    }));
  };
  const handleChangeTheme2 = (e) => {
    const value = parseInt(e.target.value);
    setValues((prevValues) => ({
      ...prevValues,
      themeId: value,
    }));
  };
  const sendDataToServer = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.put(
        "https://ecoqrcode.com/businessCard/updateDigitalCard",
        values,
        { headers }
      );
      Swal.fire({
        icon: "success",
        title: "Başarılı!",
        text: "Kartınız başarıyla güncellendi!",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    }
  };
  const deleteBankaInformation = async (iban) => {
    try {
      const response = await axios.delete(
        `https://ecoqrcode.com/bankInformation/deleteBankInformation?iban=${iban}`
      );
      setBankaInformation((prevState) =>
        prevState.filter((bankInfo) => bankInfo.iban !== iban)
      );
      console.log("Banka bilgisi silindi:", response.data);
      // Banka bilgisi silindikten sonra bankaBilgileri listesini güncellemek için
      // fetchBankaBilgileri fonksiyonunu yeniden çağırabiliriz.
      // fetchBankaBilgileri();
    } catch (error) {
      console.error("Banka bilgisi silinirken hata oluştu:", error);
      // Hata durumunda kullanıcıya uygun bir mesaj gösterebiliriz veya uygun bir
      // hata işleme mekanizması kullanılabilir.
    }
  };

  const deleteInvoiceInformation = async (taxNumber) => {
    try {
      const response = await axios.delete(
        `https://ecoqrcode.com/invoiceInformation/deleteInvoiceInformation?taxNumber=${taxNumber}`
      );
      setInvoiceInformation((prevState) =>
        prevState.filter((invoiceInfo) => invoiceInfo.taxNumber !== taxNumber)
      );
      console.log("Fatura bilgisi silindi:", response.data);
    } catch (error) {
      console.error("Fatura bilgisi silinirken hata oluştu:", error);
    }
  };

  const deleteWarrantInformation = async (citizenId) => {
    try {
      const response = await axios.delete(
        `https://ecoqrcode.com/warrantOfAttorney/deleteWarrantOfAttorney?citizenId=${citizenId}`
      );
      setWarrantInformation((prevState) =>
        prevState.filter((warrantInfo) => warrantInfo.citizenId !== citizenId)
      );
      console.log("Fatura bilgisi silindi:", response.data);
    } catch (error) {
      console.error("Fatura bilgisi silinirken hata oluştu:", error);
    }
  };
  const handleChangeBank = (event, index) => {
    const { name, value } = event.target;
    setBankaInformationCreate((prevBankaInformationCreate) => {
      const updatedBankaInformationCreate = [...prevBankaInformationCreate]; // Önceki banka bilgilerini kopyala
      updatedBankaInformationCreate[index] = {
        ...updatedBankaInformationCreate[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedBankaInformationCreate; // Güncellenmiş durumu döndür
    });
  };
  const handleChangeInvoice = (event, index) => {
    const { name, value } = event.target;
    setInvoiceInformationCreate((prevInvoiceInformationCreate) => {
      const updatedInvoiceInformationCreate = [...prevInvoiceInformationCreate]; // Önceki banka bilgilerini kopyala
      updatedInvoiceInformationCreate[index] = {
        ...updatedInvoiceInformationCreate[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedInvoiceInformationCreate; // Güncellenmiş durumu döndür
    });
  };

  const handleChangeWarrant = (event, index) => {
    const { name, value } = event.target;
    setWarrantInformationCreate((prevWarrantInformationCreate) => {
      const updatedWarrantInformationCreate = [...prevWarrantInformationCreate]; // Önceki banka bilgilerini kopyala
      updatedWarrantInformationCreate[index] = {
        ...updatedWarrantInformationCreate[index], // İlgili indeksi kopyala
        [name]: value, // İstenen özelliği güncelle
      };
      return updatedWarrantInformationCreate; // Güncellenmiş durumu döndür
    });
  };
  const sendBankaServer = async () => {
    try {
      // Boş olanları filtrele
      const filteredData = bankaInformationCreate.filter(
        (bankInfo) =>
          bankInfo.iban.trim() !== "" &&
          bankInfo.accountName.trim() !== "" &&
          bankInfo.bankName.trim() !== ""
      );
      console.log("filteredData", filteredData);
      // Filtrelenmiş verileri gönder
      if (filteredData.length > 0) {
        await axios.post(
          "https://ecoqrcode.com/bankInformation/createBankInformation",
          filteredData
        );
        console.log("Banka bilgileri başarıyla gönderildi");
        setBankaInformationCreate([
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
          {
            iban: "",
            accountName: "",
            bankName: "",
            digitalCardId: 0,
          },
        ]);
      } else {
        console.log("Gönderilecek banka bilgisi bulunamadı.");
      }
    } catch (error) {
      console.error("Banka bilgisi gönderilirken hata oluştu:", error);
      // Hata yönetimi veya kullanıcı bildirimleri ekleyebilirsiniz
    }
  };

  const sendInvoiceServer = async () => {
    try {
      await axios.post(
        "https://ecoqrcode.com/invoiceInformation/createInvoiceInformation",
        invoiceInformationCreate
      );
      console.log("Fatura bilgileri başarıyla gönderildi");
      setInvoiceInformationCreate([
        {
          title: "",
          address: "",
          taxNumber: "",
          taxOffice: "",
          digitalCardId: 0,
        },
      ]);
    } catch (error) {
      console.error("Fatura bilgisi gönderilirken hata oluştu:", error);
      // Hata yönetimi veya kullanıcı bildirimleri ekleyebilirsiniz
    }
  };
  const sendWarrantServer = async () => {
    try {
      await axios.post(
        "https://ecoqrcode.com/warrantOfAttorney/createWarrantOfAttorney",
        warrantInformationCreate
      );
      console.log("Vekalet bilgileri başarıyla gönderildi");
      setWarrantInformationCreate([
        {
          title: "",
          address: "",
          citizenId: "",
          registerNo: "",
          barAssociation: "",
          digitalCardId: 0,
        },
      ]);
    } catch (error) {
      console.error("Vekalet bilgisi gönderilirken hata oluştu:", error);
      // Hata yönetimi veya kullanıcı bildirimleri ekleyebilirsiniz
    }
  };
  console.log("bankaInformationCreate", bankaInformationCreate);
  console.log("invoiceInformationCreate", invoiceInformationCreate);
  console.log("warrantInformationCreate", warrantInformationCreate);

  return (
    <>
      {values.linkId !== "" && (
        <div className="p-7">
          <header>
            <h3 className="text-lg font-medium text-zinc-700 mb-2">İÇERİK</h3>
          </header>
          <div className="flex flex-col w-full mb-3">
            <div className="flex items-center">
              <div
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-200 flex items-center justify-center"
              >
                ecoqrcode.com/
              </div>
              <input
                name="linkId"
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-50 flex items-center justify-center w-full"
                placeholder="Sayfanızın URL'si"
                value={values.linkId}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div className="flex flex-col">
              <input
                name="name"
                className="input"
                placeholder="Ad"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="surname"
                className="input"
                placeholder="Soyad"
                value={values.surname}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="title"
                className="input"
                placeholder="Şirketiniz"
                value={values.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="description"
                className="input"
                placeholder="Unvanınız"
                value={values.description}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="firm"
                className="input"
                placeholder="Açıklama"
                value={values.firm}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="phoneNumber1"
                className="input"
                placeholder="Telefon Numarası"
                value={values.phoneNumber1}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="email"
                disabled
                className="input text-gray-600 mr-0.5 bg-zinc-50 flex items-center justify-center"
                placeholder="E-posta"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <input
                name="website"
                className="input"
                placeholder="İnternet sitesi"
                value={values.website}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <input
                name="location"
                className="input"
                placeholder="Konum"
                value={values.location}
                onChange={handleChange}
              />
            </div>
            {/* {values.bankInformationList.map((bankInfo, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].iban`}
                    className="input"
                    placeholder="IBAN"
                    value={bankInfo.iban}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].bankName`}
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name={`bankInformationList[${index}].accountName`}
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName}
                    onChange={handleChange}
                  />
                </div>
              </React.Fragment>
            ))} */}

            <div className="flex flex-col">
              <button
                type="button"
                onClick={showInstagram}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium bg-gradient-to-l from-[#d61313] to-[#e2a127] text-transparent bg-clip-text">
                  Instagram
                </span>

                <img src={instagram} className="w-6 text-red-400" />
              </button>
              {showInputInstagram && (
                <>
                  <input
                    name="instagram"
                    className="input mt-3"
                    placeholder="Instagram"
                    value={values.instagram}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showX}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium">Twitter</span>

                <img src={twitter} className="w-6 text-red-400" />
              </button>
              {showInputX && (
                <>
                  <input
                    name="twitter"
                    className="input mt-3"
                    placeholder="Twitter"
                    value={values.twitter}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showTelegram}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium text-sky-500">Telegram</span>

                <img src={telegram} className="w-6" />
              </button>
              {showInputTelegram && (
                <>
                  <input
                    name="telegram"
                    className="input mt-3"
                    placeholder="Telegram"
                    value={values.telegram}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showFacebook}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-sky-600">Facebook</span>

                <img src={facebook} className="w-6" />
              </button>
              {showInputFacebook && (
                <>
                  <input
                    name="facebook"
                    className="input mt-3"
                    placeholder="Facebook"
                    value={values.facebook}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showWhatshapp}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-green-600">Whatshapp</span>

                <img src={whatsapp} className="w-6" />
              </button>
              {showInputWhatshapp && (
                <>
                  <input
                    name="whatsapp"
                    className="input mt-3"
                    placeholder="Whatshapp"
                    value={values.whatsapp}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col">
              <button
                type="button"
                onClick={showLinkedin}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-sky-600">Linkedin</span>

                <img src={linkedin} className="w-6" />
              </button>
              {showInputLinkedin && (
                <>
                  <input
                    name="linkedin"
                    className="input mt-3"
                    placeholder="Linkedin"
                    value={values.linkedin}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col">
              <button
                type="button"
                onClick={showDiscord}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium text-purple-600">Discord</span>

                <img src={discord} className="w-6" />
              </button>
              {showInputDiscord && (
                <>
                  <input
                    name="discord"
                    className="input mt-3"
                    placeholder="Discord"
                    value={values.discord}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col ">
              <button
                type="button"
                onClick={showWhatsappBusiness}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-green-600">
                  Whatshapp Business
                </span>

                <img src={whatsapp} className="w-6" />
              </button>
              {showInputWhatsappBusiness && (
                <>
                  <input
                    name="whatsappBusiness"
                    className="input mt-3"
                    placeholder="Whatshapp Business"
                    value={values.whatsappBusiness}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showCiceksepeti}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-blue-700">Çiçek Sepeti</span>

                <img src={ciceksepeti} className="w-6" />
              </button>
              {showInputCiceksepeti && (
                <>
                  <input
                    name="cicekSepeti"
                    className="input mt-3"
                    placeholder="Çiçek Sepeti"
                    value={values.cicekSepeti}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showSahibinden}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-[9px] rounded "
              >
                <span className="font-medium text-yellow-300">Sahibinden</span>
              </button>
              {showInputSahibinden && (
                <>
                  <input
                    name="sahibinden"
                    className="input mt-3"
                    placeholder="Sahibinden"
                    value={values.sahibinden}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:basis-1/2 ">
              <button
                type="button"
                onClick={showTrendyol}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-orange-500">Trendyol</span>
              </button>
              {showInputTrendyol && (
                <>
                  <input
                    name="trendyol"
                    className="input mt-3"
                    placeholder="Trendyol"
                    value={values.trendyol}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>

            <div className="flex flex-col md:basis-1/2">
              <button
                type="button"
                onClick={showHepsiburada}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded "
              >
                <span className="font-medium text-orange-500">Hepsiburada</span>
              </button>
              {showInputHepsiburada && (
                <>
                  <input
                    name="hepsiburada"
                    className="input mt-3"
                    placeholder="Hepsiburada"
                    value={values.hepsiburada}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
            <div className="flex flex-col pb-10">
              <button
                type="button"
                onClick={showWeChat}
                className="flex gap-1  items-center justify-center border border-zinc-400 py-2 rounded"
              >
                <span className="font-medium text-emerald-600">WeChat</span>

                <img src={wechat} className="w-6" />
              </button>
              {showInputWeChat && (
                <>
                  <input
                    name="wechat"
                    className="input mt-3"
                    placeholder="WeChat"
                    value={values.wechat}
                    onChange={handleChange}
                  />
                </>
              )}
            </div>
          </div>
          <hr className="border-1 border-emerald-700  pt-10" />
          <h3 className="font-medium pl-3">BANKA BİLGİLERİNİ GÜNCELLE</h3>
          {/* bankInformation */}
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10 pb-5">
            {bankaInformation.map((bankInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Banka bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="iban"
                    className="input"
                    placeholder="IBAN"
                    disabled
                    value={bankInfo.iban || ""}
                    onChange={(event) => handleChangeBanka(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="bankName"
                    disabled
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName || ""}
                    onChange={(event) => handleChangeBanka(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="accountName"
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName || ""}
                    onChange={(event) => handleChangeBanka(event, index)}
                  />
                </div>
                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() => deleteBankaInformation(bankInfo.iban)}
                >
                  Sil
                </button>
              </div>
            ))}
          </div>

          {/* bankInformation */}

          {/* bankaCreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col pt-5 ">
            {bankaInformationCreate.map((bankInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Banka bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="iban"
                    className="input"
                    placeholder="IBAN"
                    value={bankInfo.iban || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="bankName"
                    className="input"
                    placeholder="Banka Adı"
                    value={bankInfo.bankName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="accountName"
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankInfo.accountName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
              </div>
            ))}
            <div className="text-end w-full pb-10">
              <button
                onClick={sendBankaServer}
                className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
              >
                BANKA BİLGİLERİNİ EKLE
              </button>
            </div>
          </div>

          {/* <div className="flex flex-wrap  pt-10 ">
            {bankaInformationCreate.map((bankaInfo, index) => (
              <div className="flex-col flex-wrap   basis-1/2 pb-10" key={index}>
                <div className="flex flex-col ">
                  {" "}
                  <input
                    type="text"
                    name="bankName"
                    className="input"
                    placeholder="Banka Adı"
                    value={bankaInfo.bankName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col ">
                  {" "}
                  <input
                    type="text"
                    name="accountName"
                    className="input"
                    placeholder="Hesap Adı"
                    value={bankaInfo.accountName || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
                <div className="flex flex-col ">
                  <input
                    type="text"
                    name="iban"
                    className="input"
                    placeholder="IBAN"
                    value={bankaInfo.iban || ""}
                    onChange={(event) => handleChangeBank(event, index)}
                  />
                </div>
              </div>
            ))}
          </div> */}
          {/* bankaCreate */}
          <hr className="border-1 border-emerald-700  pb-10" />
          <h3 className="font-medium pl-3">FATURA BİLGİLERİNİ GÜNCELLE</h3>

          {/* invoicedelete */}
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10">
            {invoiceInformation.map((invoiceInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Fatura bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    disabled
                    value={invoiceInfo.title || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    disabled
                    className="input"
                    placeholder="Adres"
                    value={invoiceInfo.address || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="taxOffice"
                    className="input"
                    placeholder="Tax Ofisi"
                    value={invoiceInfo.taxOffice || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="taxNumber"
                    className="input"
                    placeholder="Tax numarası"
                    value={invoiceInfo.taxNumber || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() =>
                    deleteInvoiceInformation(invoiceInfo.taxNumber)
                  }
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
          {/* invoicedelete */}

          {/* invoicecreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col ">
            {invoiceInformationCreate.map((invoiceInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Fatura bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    value={invoiceInfo.title || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    className="input"
                    placeholder="Adres"
                    value={invoiceInfo.address || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="taxNumber"
                    className="input"
                    placeholder="Tax numarası"
                    value={invoiceInfo.taxNumber || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="taxOffice"
                    className="input"
                    placeholder="Tax ofisi"
                    value={invoiceInfo.taxOffice || ""}
                    onChange={(event) => handleChangeInvoice(event, index)}
                  />
                </div>
                <button
                  onClick={sendInvoiceServer}
                  className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
                >
                  Ekle
                </button>
              </div>
            ))}
          </div>
          {/* invoicecreate */}
          <hr className="border-1 border-emerald-700  pb-10" />

          {/* warrantdelete */}
          <h3 className="font-medium pl-3">VEKALET BİLGİLERİNİ GÜNCELLE</h3>
          <div className="md:flex md:flex-row flex-wrap flex-col pt-10 ">
            {warrantInformation.map((warrantInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Vekalet bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    disabled
                    value={warrantInfo.title || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    disabled
                    className="input"
                    placeholder="Adres"
                    value={warrantInfo.address || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="citizenId"
                    className="input"
                    placeholder="Kimlik Numarası"
                    value={warrantInfo.citizenId || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="registerNo"
                    className="input"
                    placeholder="Registir No"
                    value={warrantInfo.registerNo || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    disabled
                    name="barAssociation"
                    className="input"
                    placeholder="Baro Numarası"
                    value={warrantInfo.barAssociation || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <button
                  className="bg-red-600 text-white font-medium px-5 py-1 rounded-lg"
                  onClick={() =>
                    deleteWarrantInformation(warrantInfo.citizenId)
                  }
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
          {/* warrantdelete */}

          {/* warrantcreate */}

          <div className="md:flex md:flex-row flex-wrap flex-col ">
            {warrantInformationCreate.map((warrantInfo, index) => (
              <div className="basis-1/2 space-y-3 pb-10 pl-[11px]" key={index}>
                <p>Vekalet bilgileri - {`${index + 1}`}</p>
                <div className="flex flex-col">
                  <input
                    name="title"
                    className="input"
                    placeholder="Başlık"
                    value={warrantInfo.title || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="address"
                    className="input"
                    placeholder="Adres"
                    value={warrantInfo.address || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="citizenId"
                    className="input"
                    placeholder="Kimlik numarası"
                    value={warrantInfo.citizenId || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="registerNo"
                    className="input"
                    placeholder="Kayıt numarası"
                    value={warrantInfo.registerNo || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    name="barAssociation"
                    className="input"
                    placeholder="Baro numarası"
                    value={warrantInfo.barAssociation || ""}
                    onChange={(event) => handleChangeWarrant(event, index)}
                  />
                </div>
                <button
                  onClick={sendWarrantServer}
                  className="bg-emerald-600 text-white font-medium px-5 py-1 rounded-lg"
                >
                  Ekle
                </button>
              </div>
            ))}
          </div>
          {/* warrantcreate */}

          <h3 className="text-lg font-medium text-zinc-700 mt-20">Images</h3>
          <div className="grid md:grid-cols-2 gap-2.5 ">
            <div className="flex flex-col">
              <label htmlFor="photo1" className="text-sm">
                Profil Photo
              </label>
              <input
                id="photo1"
                name="photo1"
                type="file"
                accept="image/*"
                onChange={handleImage1Change}
                className="input pt-1.5  mt-1"
              />
              {image1 && (
                <img
                  src={URL.createObjectURL(image1)}
                  alt="Photo 1"
                  className=" h-40"
                />
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="photo2" className="text-sm">
                Photo 2
              </label>
              <input
                id="photo2"
                name="photo2"
                type="file"
                accept="image/*"
                onChange={handleImage2Change}
                className="input pt-1.5 mt-1"
              />
              {image2 && (
                <img
                  src={URL.createObjectURL(image2)}
                  alt="Photo 2"
                  className="h-40"
                />
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="photo3" className="text-sm">
                Photo 3
              </label>
              <input
                id="photo3"
                name="photo3"
                type="file"
                accept="image/*"
                onChange={handleImage3Change}
                className="input pt-1.5 mt-1"
              />
              {image3 && (
                <img
                  src={URL.createObjectURL(image3)}
                  alt="Photo 3"
                  className="h-40"
                />
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="photo4" className="text-sm">
                Photo 4
              </label>
              <input
                id="photo4"
                name="photo4"
                type="file"
                accept="image/*"
                onChange={handleImage4Change}
                className="input pt-1.5 mt-1"
              />
              {image4 && (
                <img
                  src={URL.createObjectURL(image4)}
                  alt="Photo 4"
                  className="h-40"
                />
              )}
            </div>
          </div>
          <div className="mt-5">
            <header>
              <h3 className="text-lg font-medium text-zinc-700 mb-2">Design</h3>
            </header>
            <div className="flex gap-4 md:gap-8">
              <div>
                <span className="flex font-medium mb-2">Theme 1</span>
                <div className="flex mb-5 flex-col items-center md:pr-56 justify-center mx-auto  ">
                  <label>
                    <input
                      type="radio"
                      name="themeId"
                      value={1}
                      checked={values.themeId === 1}
                      onChange={handleChangeTheme1}
                      className="hidden"
                    />
                    <div className="flex gap-2">
                      <img
                        src={theme1}
                        alt="Theme 1"
                        className={classNames("cursor-pointer shadow-lg", {
                          "border-4 border-blue-500 rounded":
                            values.themeId === 1,
                        })}
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <span className="font-medium mb-4">Theme 2</span>
                <div className="flex mb-5 flex-col items-center md:pr-56 mt-2 md:mt-0">
                  <label>
                    <input
                      type="radio"
                      name="themeId"
                      value={2}
                      checked={values.themeId === 2}
                      onChange={handleChangeTheme2}
                      className="hidden"
                    />
                    <div className="flex gap-2">
                      <img
                        src={theme2}
                        alt="Theme 1"
                        className={classNames("cursor-pointer shadow-lg mt-2", {
                          "border-4 border-blue-500 rounded":
                            values.themeId === 2,
                        })}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-4 ">
              <div></div>
              <button
                onClick={sendDataToServer}
                type="submit"
                className="bg-emerald-600 w-28 justify-self-end text-white rounded h-10 text-sm disabled:opacity-50"
              >
                GÜNCELLE
              </button>
            </div>
          </div>
        </div>
      )}

      {values.linkId === "" && (
        <div
          className="flex items-center justify-center h-screen"
          style={{ backgroundImage: "url('/hero/hero.jpg')" }}
        >
          <div className="bg-green-300 border border-slate-499 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-1/2">
            <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-6">
              Güncelleme yapabilmeniz için önce kartvizit oluşturmanız gerekiyor
            </h1>

            <div className="text-center">
              <span className="text-white text-lg font-medium">
                Kartvizit oluşturmak için
                <Link
                  to="/dashboard/digital-business-card-create"
                  className="underline ml-1"
                >
                  tıklayınız
                </Link>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardUpdate;
