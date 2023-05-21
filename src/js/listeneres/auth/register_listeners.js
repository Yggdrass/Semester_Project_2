import { registerUser } from "../../api/auth/register.js";
import { API_REGISTER_URL } from "../../api/apiUrls.js";

const registerURL = `${API_REGISTER_URL}`;

/**
 * This form gathers information from a form and passes it into the function registerUser().
 */
export function registerFormListener() {
  const registerForm = document.querySelector("#registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      console.log("Form :", form);
      const formData = new FormData(form);
      const userToRegister = Object.fromEntries(formData.entries());
      console.log("userToRegister :", userToRegister);

      registerUser(registerURL, userToRegister);
      console.log("registerUser() :", registerUser);
    });
  }
}

registerFormListener();
