import { save } from "../../storage/index_storage.js";

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
      save("profile", result);
      location.href = `./profile_page.html?view=profile&name=${result.name}`;
    } else {
      alert("Error! Login failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
