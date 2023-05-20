import { load } from "../storage/load.js";
import { API_SINGLE_PROFILE_URL } from "../api/apiUrls.js";

const profile = load("profile");
console.log(profile);

const name = profile.name;
console.log(name);

const profileUrl = `${API_SINGLE_PROFILE_URL}` + name;
console.log("fetchProfile URL:", profileUrl);

const profilePageContainer = document.getElementById("profile-container");
//console.log(profilePageContainer);

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
    //location.href = `./profile_page.html/?view=profile&name=${profile.name}`;
  } catch (error) {
    console.log(error);
  }
}

fetchProfile();

//console.log("Function :", fetchProfile);
//console.log("Profile Name :", profile.name);

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
                <div class="createEndDate mb-3 pxl-3 pt-2">
                  <label for="createEndDate" class="form-label">Date End</label>
                  <div class="d-flex">
                    <input
                      type="text"
                      class="form-control"
                      id="createEndDate"
                      placeholder="../../...."
                    />
                    <i class="fa-solid fa-calendar-days mx-4"></i>
                  </div>
                </div>

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

//console.log("Function :", createProfilePage);
