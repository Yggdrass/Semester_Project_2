import { loginUser } from "../../api/auth/login.js";
import { API_LOGIN_URL } from "../../api/apiUrls.js";
import { fetchProfile } from "../../pages/fetch_profile.js";
//import { load } from "../storage/load.js";

const loginURL = `${API_LOGIN_URL}`;
//console.log("loginUrl :", loginURL);

export async function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const userToLogin = Object.fromEntries(formData.entries());
      console.log("userToLogin :", userToLogin);

      // Sends to the API
      loginUser(loginURL, userToLogin);
      fetchProfile();
      console.log(fetchProfile);

      location.href = `./profile_page.html?view=profile&name=${userToLogin.name}`;
    });
  }
}

loginFormListener();

//const name = load("profile.name");
