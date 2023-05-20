//updateAvatarForm

import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
//import { updateAvatar } from "../../api/profile/profile_index.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Avatar", avatar);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
console.log("updateAvatarURL :", updateAvatarURL);

export function updateAvatarListener() {
  const updateAvatarForm = document.getElementById("updateAvatarForm");
  console.log("Update Avatar Form :", updateAvatarForm);

  if (updateAvatarForm) {
    updateAvatarForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      console.log("Form :", form);
      const formData = new FormData(form);
      console.log("Form Data :", formData);
      const avatarToUpdate = Object.fromEntries(formData.entries());
      console.log("avatarToUpdate :", avatarToUpdate);

      return avatarToUpdate;
    });
  }
}

updateAvatarListener();

console.log(updateAvatarListener);
