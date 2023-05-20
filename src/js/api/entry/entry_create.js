export async function createEntry(url, entryData) {
  console.log(
    "createEntry() Url :",
    url,
    "createEntry() entryData :",
    entryData
  );

  try {
    const entryData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    };

    const response = await fetch(url, entryData);
    //console.log("createEntry()) Response :", response);
    const result = await response.json();
    //console.log("createEntry() Result :", result);
    if (response.ok) {
      alert("Your entry have successfully been created!");
    } else {
      alert("Error! Registration failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

createEntry();
//console.log("Function :", createEntry);
