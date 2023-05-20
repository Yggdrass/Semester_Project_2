import { load } from "../../storage/index_storage.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const userName = profile.name;
//console.log("Profile Avatar", avatar);

export async function updateAvatar(url, userData) {
  console.log(
    "updateAvatar() Url :",
    url,
    "updateAvatar() userData :",
    userData
  );

  try {
    const token = localStorage.getItem("accessToken");
    //console.log("Token Stored :", token);

    let payLoad = {
      name: userName,
      avatar: userData,
    };

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payLoad),
    };
    console.log("PostData :", postData);

    const response = await fetch(url, postData);
    console.log("getItem() Response :", response);
    const result = await response.json();
    console.log("getItem() Result :", result);
    if (response.ok) {
      alert("You have successfully updated your avatar!");
      location.reload();
    } else {
      alert("Error! Update failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
