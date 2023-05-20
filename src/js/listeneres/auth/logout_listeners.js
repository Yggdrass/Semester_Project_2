import { logout } from "../../api/auth/logout.js";
//import { updateLoginVisibility } from "../../ui/auth.js";

export function logoutListener() {
  const logoutButton = document.querySelector(".logout-button");

  try {
    logoutButton.addEventListener("click", (event) => {
      event.preventDefault();

      // Sends to the API
      logout();
    });
  } catch (error) {
    console.log(error);
  }
}

logoutListener();
