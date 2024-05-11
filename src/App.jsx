import axios from "axios";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    linkId: "",
    name: "",
    surname: "",

    title: "",
    description: "",

    email: "",
    twitter: "",
    instagram: "",
    themeId: "",
    website: "",
    wechat: "",
    phoneNumber1: "",
    phoneNumber2: "",
    photoUrl1: "",
    photoUrl2: "",
    photoUrl3: "",
    photoUrl4: "",
    photoUrl5: "",
    whatsapp: "",
    linkedin: "",
    telegram: "",
    facebook: "",
    location: "",
    userName: "",
    isDeleted: "",
  });

  // Form submit edildiğinde yapılacak işlem
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://178.128.207.116:8090/businessCard/createCard",
        formData
      );
      console.log(response.data);
      alert("Card created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating the card.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(formData);
  return (
    <div>
      <h2>TT DIGITAL CARD</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">linkId:</label>
        <br />
        <input
          type="text"
          id="linkId"
          name="linkId"
          value={formData.linkId}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="surname">Surname:</label>
        <br />
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <br />
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="twitter">Twitter:</label>
        <br />
        <input
          type="text"
          id="twitter"
          name="twitter"
          value={formData.twitter}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="instagram">Instagram:</label>
        <br />
        <input
          type="text"
          id="instagram"
          name="instagram"
          value={formData.instagram}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="themeId">Theme ID:</label>
        <br />
        <input
          type="number"
          id="themeId"
          name="themeId"
          value={formData.themeId}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="website">Website:</label>
        <br />
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="wechat">WeChat:</label>
        <br />
        <input
          type="text"
          id="wechat"
          name="wechat"
          value={formData.wechat}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phoneNumber1">Phone Number 1:</label>
        <br />
        <input
          type="text"
          id="phoneNumber1"
          name="phoneNumber1"
          value={formData.phoneNumber1}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phoneNumber2">Phone Number 2:</label>
        <br />
        <input
          type="text"
          id="phoneNumber2"
          name="phoneNumber2"
          value={formData.phoneNumber2}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="photoUrl1">Photo URL 1:</label>
        <br />
        <input
          type="text"
          id="photoUrl1"
          name="photoUrl1"
          value={formData.photoUrl1}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="photoUrl2">Photo URL 2:</label>
        <br />
        <input
          type="text"
          id="photoUrl2"
          name="photoUrl2"
          value={formData.photoUrl2}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="photoUrl3">Photo URL 3:</label>
        <br />
        <input
          type="text"
          id="photoUrl3"
          name="photoUrl3"
          value={formData.photoUrl3}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="photoUrl4">Photo URL 4:</label>
        <br />
        <input
          type="text"
          id="photoUrl4"
          name="photoUrl4"
          value={formData.photoUrl4}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="photoUrl5">Photo URL 5:</label>
        <br />
        <input
          type="text"
          id="photoUrl5"
          name="photoUrl5"
          value={formData.photoUrl5}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="whatsapp">WhatsApp:</label>
        <br />
        <input
          type="text"
          id="whatsapp"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="linkedin">LinkedIn:</label>
        <br />
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="telegram">Telegram:</label>
        <br />
        <input
          type="text"
          id="telegram"
          name="telegram"
          value={formData.telegram}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="facebook">Facebook:</label>
        <br />
        <input
          type="text"
          id="facebook"
          name="facebook"
          value={formData.facebook}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="location">Location:</label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="userName">User Name:</label>
        <br />
        <input
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="isDeleted">Is Deleted:</label>
        <br />
        <input
          type="number"
          id="isDeleted"
          name="isDeleted"
          value={formData.isDeleted}
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
