import { loginUser } from "../../api/auth/login.js";

export async function loginListener(event) {
  event.preventDefault();
  const form = document.getElementById("loginForm");
  const data = new FormData(form);
  const email = data.get("email");
  const password = data.get("password");
  try {
    const { name } = await loginUser(email, password);
    location.href = `./profile_page?view=profile&name=${name}`;
    return;
  } catch {
    return alert(
      "Either your username was not found or your password is incorrect"
    );
  }
}
