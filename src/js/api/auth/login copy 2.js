import { API_LOGIN_URL } from "../../api/apiUrls.js";
import { save } from "../../storage/save.js";

export async function loginUser(email, password) {
  const response = await fetch(`${API_LOGIN_URL}`, {
    method: "post",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const profile = await response.json();
    save("token", profile.accessToken);
    delete profile.accessToken;
    save("profile", profile);
    alert("You have successfully logged in!");
    return profile;
  }

  throw new Error(response.statusText);
}
