import { API_ALL_ENTRIES_URL } from "../../api/apiUrls.js";

const entriesContainer = document.getElementById("entries-container");
console.log("Entries Container :", entriesContainer);

const allEntriesUrl = `${API_ALL_ENTRIES_URL}`;
console.log("All Entries URL :", allEntriesUrl);

const search = document.getElementById("searchEntries");
console.log("Search Bar :", search);

export async function fetchAllEntries() {
  const response = await fetch(allEntriesUrl);
  let results = await response.json();
  console.log("Response Json :", results);

  results.forEach(function (entry) {
    entriesContainer.innerHTML += ` <!-- Art Listing Card -->
    <div class="listedArtCard mx-auto mb-5">
      <div class="container px-4 py-3">
        <!-- Image Showcase -->
        <div class="row pb-3">
          <div class="col-4">
            <img
              src="${entry.media}"
              alt="entry image"
            />
          </div>

          <!-- Card Info -->
          <div class="col-8">
            <h5 class="artTitle">Title: ${entry.title}</h5>
            <h5 class="artId">ID: ${entry.id}</h5>
            <h5 class="artCreated">Created: ${entry.created}</h5>
            <h5 class="artEnds">Ends: ${entry.endsAt}</h5>
          </div>
        </div>

        <!-- Card Description -->
        <div class="row">
          <h5 class="artDescriptionTitle">Description</h5>
          <p class="artDescriptionText">
          ${entry.description}
          </p>
        </div>

        <!-- Bids Made -->
        <div>
            <h4>bids made:</h4>
            <h4>${entry._count.bids}</h4>
        </div>


        <!-- Interaction Icons On Entry -->
        <div class="px-3 d-flex justify-content-md-end">
          <i class="fa-solid fa-gavel d-flex-row"></i>
        </div>
      </div>
    </div> `;
  });
}

fetchAllEntries();
console.log("Function", fetchAllEntries);

/* search.onkeyup = function () {
  console.log("On Key :", event);

  const searchValue = event.target.value.trim().toLowerCase();

  const filteredEntries = results.filter(function (entry) {
    if (entry.title.toString().toLowerCase().startsWith(searchValue)) {
      return;
    }
  });

  console.log("Filtered Entries :", filteredEntries);

  results = filteredEntries;

  fetchAllEntries();
}; */

//entriesContainer.innerHTML += "";

//results.forEach(function (result) {
/*entriesContainer.innerHTML += `<!-- Art Listing Card -->
        <div class="listedArtCard mx-auto mb-5">
          <div class="container px-4 py-3">
            <!-- Image Showcase -->
            <div class="row pb-3">
              <div class="col-4">
                <img
                  src="/src/images/company_logo_black_white.png"
                  alt="imageCarousel"
                />
              </div>

              <!-- Card Info -->
              <div class="col-8">
                <h5 class="artTitle">Title: Title Goes Here</h5>
                <h5 class="artId">ID: Art ID</h5>
                <h5 class="artCreated">Created: Date here</h5>
                <h5 class="artEnds">Ends: End Date Here</h5>
              </div>
            </div>

            <!-- Card Description -->
            <div class="row">
              <h5 class="artDescriptionTitle">Description</h5>
              <p class="artDescriptionText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitor ullamcorper tempus. Vestibulum volutpat gravida justo,
                non hendrerit ligula feugiat nec. Aenean tortor turpis,
                tincidunt vitae orci ac, vehicula euismod nisi. Proin sagittis,
                est in viverra rutrum, orci sapien vulputate magna, quis
                tincidunt dui lacus sed eros. Morbi vitae metus ac diam
                tristique dignissim.
              </p>
            </div>

            <!-- Interaction Icons On Entry -->
            <div class="px-3 d-flex justify-content-md-end">
              <i class="fa-solid fa-gavel d-flex-row"></i>
            </div>
          </div>
        </div>
`;*/
