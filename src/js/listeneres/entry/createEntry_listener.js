import { loginUser } from "../../api/auth/login.js";
import { API_CREATE_ENTRY_URL } from "../../api/apiUrls.js";
import { createEntry } from "../../api/entry/entry_create.js";
//import { load } from "../storage/load.js";

const createEntryURL = `${API_CREATE_ENTRY_URL}`;
//console.log("createEntryURL :", createEntryURL);

export async function createEntryListener() {
  const createEntryForm = document.querySelector("#createEntry");
  //console.log("Create Entry Form :", createEntryForm);

  if (createEntryForm) {
    createEntryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const entryToCreate = Object.fromEntries(formData.entries());
      console.log("userToLogin :", entryToCreate);

      // Sends to the API
      loginUser(createEntryURL, entryToCreate);
      createEntry();
      console.log("Function :", createEntry);
    });
  }
}

createEntryListener();
