import { logout } from "../../api/auth/index_api_auth.js";
import { updateLoginVisibility } from "../../pages/loginVisibility.js";

export function logoutListener() {
  try {
    logout();
    updateLoginVisibility();
    location.href = "./";
  } catch {
    return alert("There was a problem logging out");
  }
}
