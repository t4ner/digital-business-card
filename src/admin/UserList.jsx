import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [userDataList, setUserDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Asynchronous function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ecoqrcode.com/api/auth/getAllUser?channelId=1"
        );
        setUserDataList(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  console.log(userDataList);
  return <div className="p-5 md:p-10 h-screen font-montserrat"></div>;
}

export default UserList;
