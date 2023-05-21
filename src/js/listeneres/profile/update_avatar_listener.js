import { load } from "../../storage/load.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
import { updateAvatar } from "../../api/profile/updateAvatar.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Avatar", avatar);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
console.log("updateAvatarURL :", updateAvatarURL);

const form = document.querySelector("form#updateAvatarForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const newData = Object.fromEntries(formData.entries());
  console.log("newData :", newData);
  const params = new URLSearchParams(Object.fromEntries(formData.entries()));
  console.log("Params :", params.toString());
  const newAvatar = newData.updateAvatar;
  console.log("newAvatar :", newAvatar);

  console.log("formData :", [...formData]);

  if (formData) {
    updateAvatar(updateAvatarURL, newAvatar);
  }
});
