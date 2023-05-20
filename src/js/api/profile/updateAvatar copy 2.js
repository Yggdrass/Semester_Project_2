//const token = localStorage.getItem("accessToken");
//console.log("Token Stored :", token);

const postData = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ avatar: "${userData}" }),
};
console.log("PostData :", postData);

export async function updateAvatar(url, userData) {
  console.log(
    "updateAvatar() Url :",
    url,
    "updateAvatar() userData :",
    userData
  );

  try {
    const response = await fetch(url, postData);
    console.log("registerUser()) Response :", response);
    const result = await response.json();
    console.log("registerUser() Result :", result);
    if (response.ok) {
      alert("You have successfully updated your avatar!");
    } else {
      alert("Error! Update failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}

updateAvatar();
