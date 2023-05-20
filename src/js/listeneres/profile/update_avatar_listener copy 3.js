//updateAvatarForm

import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
//import { updateAvatar } from "../../api/profile/profile_index.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Avatar", avatar);

const token = localStorage.getItem("accessToken");
//console.log("Token Stored :", token);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
//console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
//console.log("updateAvatarURL :", updateAvatarURL);

const updateAvatarForm = document.querySelector("#updateAvatar");
console.log("Update Avatar Form :", updateAvatarForm);

const form = document.getElementById("updateAvatar");
console.log("Update Avatar Form :", form);

updateAvatarForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const payload = new FormData(form);
  console.log([...payload]);

  fetch(updateAvatarURL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      avatar: payload,
    }),
  })
    .then((res) => {
      return res.json(res);
    })
    .then((data) => console.log(data));
});
