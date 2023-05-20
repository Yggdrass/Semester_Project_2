//updateAvatarForm

/*import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
//import { updateAvatar } from "../../api/profile/profile_index.js";

const profile = load("profile");
console.log("Profile Stored", profile);

export const nameUser = profile.name;
console.log("Profile Avatar", nameUser);

const token = localStorage.getItem("accessToken");
console.log("Token Stored :", token);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
console.log("updateAvatarURL :", updateAvatarURL);

export async function updateAvatar(name = nameUser, postData) {
  const token = localStorage.getItem("accessToken");
  console.log("Token Stored :", token);

  const path = updateAvatarURL;
  console.log("Path Url :", path);

  if (!name) {
    throw new Error("You must pass in a valid name to update your avatar");
  }

  if (!token) {
    throw new Error("You must be logged in to update your avatar");
  }

  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  };

  const response = await fetch(path, options);

  if(response.ok) {
    return await response.json();
  }

  throw new Error("Your avatar could not be updated!");
}
*/

//updateAvatarForm

import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
import { updateAvatar } from "../../api/profile/profile_index.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Avatar", avatar);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
//console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
//console.log("updateAvatarURL :", updateAvatarURL);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("updateAvatar");
  console.log("Update Avatar Form :", form);
});

const form = document.getElementById("updateAvatarForm");
console.log("Update Avatar Form :", form);

export function updateAvatarListener() {
  if (form) {
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      console.log("Form :", form);
      const formData = new FormData(form);
      console.log("Form Data :", formData);
      const avatarToUpdate = Object.fromEntries(formData.entries());
      console.log("avatarToUpdate :", avatarToUpdate);

      // Sends to the API
      updateAvatar(updateAvatarURL, avatarToUpdate);
      console.log("Avatar To Update :", avatarToUpdate);

      console.log(updateAvatar);
    });
  }
}

updateAvatarListener();

console.log(updateAvatarListener);
