//import { load } from "../../storage/index_storage.js";
//import { API_BASE_URL } from "../../api/apiUrls.js";
//import { updateAvatarListener } from "../../listeneres/profile/update_avatar_listener.js";

//const profile = load("profile");
//console.log("Profile Stored", profile);

//export const name = profile.name;
//console.log("Profile Avatar", avatar);

//const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
//console.log("updateAvatarNameURL :", updateAvatarNameURL);

//const updateAvatarURL = `${updateAvatarNameURL}/media`;
//console.log("updateAvatarURL :", updateAvatarURL);

//const avatarToUpdate = updateAvatarListener;

/*let payLoad = {
  name: name,
  avatar: name,
};*/
//console.log("PayLoad :", payLoad);

/*const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payLoad),
};*/
//console.log("Options :", options);

/*const token = localStorage.getItem("accessToken");
//console.log("Token Stored :", token);

fetch(updateAvatarURL, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({
    name: name,
    avatar: avatarToUpdate,
  }),
})
  .then((res) => {
    return res.json(res);
  })
  .then((data) => console.log(data));*/

//updateAvatarForm

import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
//import { updateAvatar } from "../../api/profile/profile_index.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const nameUser = profile.name;
//console.log("Profile Name", nameUser);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + nameUser;
//console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
//console.log("updateAvatarURL :", updateAvatarURL);

export async function updateAvatar(name = nameUser, postData) {
  const token = localStorage.getItem("accessToken");
  //console.log("Token Stored :", token);

  const path = updateAvatarURL;
  //console.log("Path Url :", path);

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
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  };

  const response = await fetch(path, options);

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Your avatar could not be updated!");
}

updateAvatar();

console.log(updateAvatar);
