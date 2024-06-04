import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";
import InnerHTML from "dangerously-set-html-content";

function Payment() {
  const [htmlResponse, setHtmlResponse] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardOwnerName: "",
    cardNumber: "",
    cardAlias: "",
    cardExpireMonth: "",
    cardExpireYear: "",
    cardCvc: "",
    purchaser: {
      name: "",
      surname: "",
      birthDate: "",
      email: "",
      gsmNumber: "",
      tcCertificate: "",
      clientIp: "127.0.0.1",
      invoiceAddress: {
        name: "",
        surname: "",
        address: "",
        zipcode: "",
        city: "",
        tcCertificate: "",
        country: "",
        taxNumber: "",
        taxOffice: "",
        companyName: "",
        phoneNumber: "",
      },
    },
  });

  const handleInputChange = (e, field, subField = null, subSubField = null) => {
    if (subField === null) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: e.target.value,
      }));
    } else if (subSubField === null) {
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subField]: e.target.value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subField]: {
            ...prevData[field][subField],
            [subSubField]: e.target.value,
          },
        },
      }));
    }
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://178.128.207.116:8090/api/payment/oneStepPayment3D",
        formData
      )
      .then((response) => {
        console.log("Success:", response.data);
        const processedResponse = response.data;
        setHtmlResponse(processedResponse);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("formData", formData);

  return (
    <div>
      <input
        type="text"
        value={formData.cardOwnerName}
        onChange={(e) => handleInputChange(e, "cardOwnerName")}
        placeholder="Card Owner Name"
      />
      <input
        type="text"
        value={formData.cardNumber}
        onChange={(e) => handleInputChange(e, "cardNumber")}
        placeholder="Card Number"
      />

      <input
        type="text"
        value={formData.cardExpireMonth}
        onChange={(e) => handleInputChange(e, "cardExpireMonth")}
        placeholder="Card Expire Month"
      />
      <input
        type="text"
        value={formData.cardExpireYear}
        onChange={(e) => handleInputChange(e, "cardExpireYear")}
        placeholder="Card Expire Year"
      />
      <input
        type="text"
        value={formData.cardCvc}
        onChange={(e) => handleInputChange(e, "cardCvc")}
        placeholder="Card CVC"
      />

      <input
        type="text"
        value={formData.purchaser.name}
        onChange={(e) => handleInputChange(e, "purchaser", "name")}
        placeholder="Purchaser Name"
      />
      <input
        type="text"
        value={formData.purchaser.surname}
        onChange={(e) => handleInputChange(e, "purchaser", "surname")}
        placeholder="Purchaser Surname"
      />
      <input
        type="text"
        value={formData.purchaser.birthDate}
        onChange={(e) => handleInputChange(e, "purchaser", "birthDate")}
        placeholder="Purchaser Birth Date"
      />
      <input
        type="text"
        value={formData.purchaser.email}
        onChange={(e) => handleInputChange(e, "purchaser", "email")}
        placeholder="Purchaser Email"
      />
      <input
        type="text"
        value={formData.purchaser.gsmNumber}
        onChange={(e) => handleInputChange(e, "purchaser", "gsmNumber")}
        placeholder="Purchaser GSM Number"
      />
      <input
        type="text"
        value={formData.purchaser.tcCertificate}
        onChange={(e) => handleInputChange(e, "purchaser", "tcCertificate")}
        placeholder="Purchaser TC certificate"
      />

      <input
        type="text"
        value={formData.purchaser.invoiceAddress.name}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "name")
        }
        placeholder="Invoice Address Name"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.surname}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "surname")
        }
        placeholder="Invoice Address Surname"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.address}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "address")
        }
        placeholder="Invoice Address"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.zipcode}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "zipcode")
        }
        placeholder="Invoice Address Zipcode"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.city}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "city")
        }
        placeholder="Invoice Address City"
      />

      <input
        type="text"
        value={formData.purchaser.invoiceAddress.tcCertificate}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "tcCertificate")
        }
        placeholder="Invoice tcCertificate"
      />

      <input
        type="text"
        value={formData.purchaser.invoiceAddress.country}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "country")
        }
        placeholder="Invoice country"
      />

      <input
        type="text"
        value={formData.purchaser.invoiceAddress.taxNumber}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "taxNumber")
        }
        placeholder="Invoice taxNumber"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.taxOffice}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "taxOffice")
        }
        placeholder="Invoice taxOffice"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.companyName}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "companyName")
        }
        placeholder="Invoice companyName"
      />
      <input
        type="text"
        value={formData.purchaser.invoiceAddress.phoneNumber}
        onChange={(e) =>
          handleInputChange(e, "purchaser", "invoiceAddress", "phoneNumber")
        }
        placeholder="Invoice phoneNumber"
      />
      <button type="submit" onClick={handleSubmit}>
        <a target="_blank" href="/payment">
          Submit
        </a>
      </button>
      <div className="w-full">
        <div
          dangerouslySetInnerHTML={{
            __html: htmlResponse.replace(/href/g, "target='_blank' href"),
          }}
        ></div>
        {/* {htmlResponse === "" ? <div></div> : <InnerHTML html={htmlResponse} />} */}
      </div>
    </div>
  );
}

export default Payment;