/*const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");*/

import { load } from "../storage/load.js";

const profile = load("profile");
console.log("Profile Stored", profile);

const name = profile.name;
console.log("Profile Name", name);

const url = "https://api.noroff.dev/api/v1/auction/profiles/" + name;
console.log("fetchProfile:", url);

const profileContainer = document.querySelector(".profile-container");
console.log("profileContainer :", profileContainer);

const token = localStorage.getItem("accessToken");

export async function fetchProfile() {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, getData);
    console.log("fetchProfile() Response :", response);
    const profile = await response.json();
    console.log("fetchProfile() profile :", profile);
    console.log("fetchProfile() profile :", profile.name);

    //profileContainer.innerHTML += "";

    createProfilePage(profile);
  } catch (error) {
    console.log(error);
  }
}

let profileToCreate = profile;

function createProfilePage() {
  profileToCreate.for(function (profile) {
    profileContainer.innerHTML = `<div class="profileCard mx-auto mb-5">
  <div class="container px-4 py-3">
    <div class="row pb-3">
      <!-- Profile Image -->
      <div class="col-4">
        <img
          src="${profile.avatar}"
          alt="Your Avatar"
          class="img-thumbnail"
        />
      </div>

      <!-- Profile Name & Tokens -->
      <div
        class="col-8 d-flex-column align-items-center justify-content-md-center m-auto"
      >
        <h5 class="profileUserName p-2">Name: ${profile.name}</h5>
        <h5 class="profileUserEmail p-2">Email: ${profile.email}</h5>
        <h5 class="profileUserToken p-2">Tokens: ${profile.credits}</h5>
      </div>
    </div>
  </div>

  <!-- Profile Description -->
  <div class="profileDescription mt-2">
    <h5 class="profileDescriptionTitle">Description</h5>
    <p class="profileDescriptionText">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      porttitor ullamcorper tempus. Vestibulum volutpat gravida justo,
      non hendrerit ligula feugiat nec. Aenean tortor turpis, tincidunt
      vitae orci ac, vehicula euismod nisi. Proin sagittis, est in
      viverra rutrum, orci sapien vulputate magna, quis tincidunt dui
      lacus sed eros. Morbi vitae metus ac diam tristique dignissim.
    </p>
  </div>

  <!-- Reset Password Button -->
  <div class="d-flex align-items-center justify-content-md-center py-5">
    <h5 class="resetPasswordTitle px-3">change password</h5>
    <button class="buttonResetPassword px-3">reset</button>
  </div>
</div>
</div>`;
  });
}
