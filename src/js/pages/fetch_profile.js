import { load } from "../storage/load.js";

const profile = load("profile");
//console.log("Profile Stored", profile);

export const name = profile.name;
//console.log("Profile Name", name);

export const fetchProfileUrl =
  "https://api.noroff.dev/api/v1/auction/profiles/" + name;
//console.log("fetchProfile url :", fetchProfileUrl);

const profileContainer = document.getElementById("profile-container");
//console.log("profileContainer :", profileContainer);

const entryFormContainer = document.getElementById("ceateEntryContainer");
//console.log("entryContainer :", entryFormContainer);

export async function fetchProfile() {
  try {
    const token = localStorage.getItem("accessToken");
    //console.log("Token Stored :", token);

    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    //console.log(getData);
    //console.log(fetchProfile);

    const response = await fetch(fetchProfileUrl, getData);
    //console.log("fetchProfile() Response :", response);
    const profile = await response.json();
    //console.log("fetchProfile() profile :", profile);

    //createProfilePage(profile);

    profileContainer.innerHTML += `<!-- Page Title -->
    <div class="d-flex-column text-center">
      <h1 class="homePageTitle py-1">${profile.name}'s profile page</h1>
    </div>

    <!-- Profile Container -->
    <div class="artListingsContainer d-flex-column mx-auto mt-5">
      <!-- Profile Card -->
      <div class="profileCard mx-auto mb-5">
        <div class="container px-4 py-3">
          <div class="row pb-3">
            <!-- Profile Image -->
            <div class="col-4">
              <img
                src="${profile.avatar}"
                alt="Your avatarimage"
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
          <h5 class="profileDescriptionTitle">Profile Bio :</h5>
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

    entryFormContainer.innerHTML += `<!-- Create Entry Card -->
    <div class="createEntryCard mx-auto mb-5">
      <div class="artListingsContainer px-4 py-3">
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
            <label for="date" class="col-1 col-form-label">Date</label>
            <div class="col-5">
              <div class="input-group date" id="datepicker">
                <input type="date" class="form-control" id="date"/>
                
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
    </div>`;
  } catch (error) {
    console.log(error);
  }
}

fetchProfile();
//console.log("fetchProfile Run :", fetchProfile());

/*export function createProfilePage(profile) {
  profileContainer.innerHTML += `<div class="profileCard mx-auto mb-5">
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
}
*/
