export async function updateAvatar(url, userData) {
  console.log(
    "registerUser() Url :",
    url,
    "registerUser() userData :",
    userData
  );

  try {
    const token = localStorage.getItem("accessToken");
    //console.log("Token Stored :", token);

    const postData = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    };
    console.log("PostData :", postData);

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
