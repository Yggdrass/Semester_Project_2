export async function registerUser(url, userData) {
  console.log(
    "registerUser() Url :",
    url,
    "registerUser() userData :",
    userData
  );

  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(url, postData);
    console.log("registerUser()) Response :", response);
    const result = await response.json();
    console.log("registerUser() Result :", result);
    if (response.ok) {
      alert("You have successfully registered with our website!");
    } else {
      alert("Error! Registration failed!");
    }
    return result;
  } catch (error) {
    console.log(error);
  }
}
