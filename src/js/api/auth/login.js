//import { API_LOGIN_URL } from "../../api_url.mjs";

// const userToLogin = {
//     email: 'audunMMH@stud.noroff.no',
//     password: '12345678',
// };

//const loginURL = `${API_LOGIN_URL}`;

export async function loginUser(url, userData) {
  console.log("loginUser() Url :", url, "loginUser() userData :", userData);
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log("loginUser() Response :", response);
    const result = await response.json();
    console.log("loginUser() Result :", result);

    const accessToken = result.accessToken;
    console.log("loginUser() AccessToken :", result.accessToken);

    localStorage.setItem("accessToken", accessToken);

    if (response.ok) {
      alert("You have successfully logged in!");
    } else {
      alert("Error! Login failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

//loginUser(loginURL, userToLogin);
