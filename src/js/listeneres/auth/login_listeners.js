import { loginUser } from "../../api/auth/login.js";
import { API_LOGIN_URL } from "../../api/apiUrls.js";

const loginURL = `${API_LOGIN_URL}`;
console.log("loginUrl :", loginURL);

export function loginFormListener() {
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
    });
  }
}

loginFormListener();
