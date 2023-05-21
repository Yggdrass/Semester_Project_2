import { load } from "../storage/load.js";
import { API_SINGLE_PROFILE_URL } from "../api/apiUrls.js";

const profile = load("profile");
//console.log("User Profile :", profile);

const name = profile.name;
//console.log("Profile Name :", profile.name);

const profileUrl = `${API_SINGLE_PROFILE_URL}` + name;
//console.log("fetchProfile URL:", profileUrl);

const profilePageContainer = document.getElementById("profile-container");
//console.log(profilePageContainer);

//const updateAvatarFormContainer = document.getElementById(
//  "updateAvatar-container"
//);
//console.log(updateAvatarFormContainer);

const entryFormContainer = document.getElementById("createEntryForm-container");
//console.log(entryFormContainer);

const token = localStorage.getItem("accessToken");
//console.log("AccessToken :", token);

export async function fetchProfile() {
  try {
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    //console.log("Get Data :", getData);

    const response = await fetch(profileUrl, getData);
    //console.log("fetchProfile() Response :", response);

    const profile = await response.json();
    //console.log("fetchProfile() profile :", profile);

    createProfilePage(profile);
    //console.log("Function :", fetchProfile);

    //createUpdateAvatar();
    //console.log("Function :", fetchProfile);

    createEntryForm();
    //console.log("Function :", createEntryForm);
  } catch (error) {
    console.log(error);
  }
}

fetchProfile();
//console.log("Function :", fetchProfile);

export function createProfilePage(profile) {
  profilePageContainer.innerHTML += `<div class="artListingsContainer profileCard mx-auto mb-5">
  <div class=" container px-4 py-3">
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
</div>

`;
}

export function createEntryForm() {
  entryFormContainer.innerHTML += `
<!-- Create Entry Container -->
      <div id="ceateEntryContainer" class="artListingsContainer d-flex-column mx-auto mt-3">
        <!-- Create Entry Card -->
        <div class="createEntryCard mx-auto mb-5">
          <div class="container px-4 py-3">
            <div class="row pb-3">
              <h3 class="createEntryCardTitle">create entry</h3>
            </div>

            <div class="row pb-3">
              <form id="createEntry">
                <!-- Entry Title -->
                <div class="mb-3">
                  <label for="createEntryTitle" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="createEntryTitle"
                    placeholder="Title of entry"
                  />
                </div>

                <!-- Entry End Date -->

                <form class="row">
                  <label for="date" class="col-1 col-form-label">Date</label>
                  <div class="col-5">
                    <div class="input-group date" id="datepicker">
                      <input type="date" class="form-control" id="date"/>
                      <span class="input-group-append">
                        <span class="input-group-text bg-light d-block">
                          <i class="fa fa-calendar"></i>
                        </span>
                      </span>
                    </div>
                  </div>
                </form>
                

                <!-- Entry Media Gallery -->
                <div class="mb-3 pt-2">
                  <label for="formEntryGallery" class="form-label"
                    >Media gallery</label
                  >
                  <input
                    class="form-control"
                    type="file"
                    id="formEntryGallery"
                    multiple
                  />
                </div>

                <!-- Entry Description -->
                <div class="mb-3 pt-2">
                  <label for="createEntryDescription" class="form-label"
                    >Description</label
                  >
                  <textarea
                    class="form-control"
                    id="createEntryDescription"
                    rows="3"
                    placeholder="Write a description of the entry"
                  ></textarea>
                </div>

                <!-- Submit Entry Button -->
                <div class="col-12 d-flex justify-content-md-end pt-3">
                  <button class="button buttonPostEntry" type="submit">
                    post entry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>`;
}

/*
export function createUpdateAvatar() {
  updateAvatarFormContainer.innerHTML += `<form id="updateAvatarForm" method="put">
  <div class="form-floating">
    <input
      required
      type="url"
      class="form-control"
      id="avatar"
      name="updateAvatar"
      placeholder="Avatar URL"
    />
    <label for="avatar">Avatar URL</label>
  </div>
  <button class="button buttonUpdateAvatar" type="submit">
    update avatar
  </button>
</form>`;
}
*/
