import { load } from "../../storage/index_storage.js";
import { API_BASE_URL } from "../../api/apiUrls.js";
import { updateAvatarListener } from "../../listeneres/profile/update_avatar_listener.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Avatar", avatar);

const updateAvatarNameURL = `${API_BASE_URL}/auction/profiles/` + name;
console.log("updateAvatarNameURL :", updateAvatarNameURL);

const updateAvatarURL = `${updateAvatarNameURL}/media`;
console.log("updateAvatarURL :", updateAvatarURL);

const avatarToUpdate = updateAvatarListener;

let payLoad = {
  name: name,
  avatar: avatarToUpdate,
};
console.log("PayLoad :", payLoad);

const options = {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payLoad),
};
console.log("Options :", options);

const token = localStorage.getItem("accessToken");
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
  .then((data) => console.log(data));
