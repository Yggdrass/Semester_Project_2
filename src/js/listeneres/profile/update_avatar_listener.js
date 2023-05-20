import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
import { updateAvatar } from "../../api/profile/profile_index.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Avatar", avatar);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
console.log("updateAvatarURL :", updateAvatarURL);

const form = document.querySelector("#updateAvatarForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const newAvatar = Object.fromEntries(formData.entries());
  console.log(newAvatar);

  console.log([...formData]);

  if (formData) {
    updateAvatar(updateAvatarURL, newAvatar);
  }
});
