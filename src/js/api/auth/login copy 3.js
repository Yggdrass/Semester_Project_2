import { save } from "../../storage/save.js";
//import { load } from "../../storage/load.js";
import { fetchProfile } from "../../pages/fetch_profile.js";
//import { createProfilePage } from "../../pages/fetch_profile.js";

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

      fetchProfile();
      console.log(fetchProfile);

      location.href = `./profile_page.html?view=profile&name=${result.name}`;

      /*createProfilePage();
      console.log(createProfilePage);
      const name = profile.name;
      console.log("Profile Name", name);
      location.href = `./profile_page.html?view=profile&name=${profile.name}`;*/
    } else {
      alert("Error! Login failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
