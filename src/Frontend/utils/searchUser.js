import SearchProfile from "../components/userSearchProfile";
import { serverUrl } from "../../config.js";

const searchUser = async (email) => {
    console.log(email);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      "email": email
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    try {
      const response = await fetch(`${serverUrl}/user/`, requestOptions);
      const result = await response.json();
      console.log(result)
      return result;
      
    } catch (error) {
      console.log('error', error);
      console.log(null)
      return null;
    }
  };

  export default searchUser;