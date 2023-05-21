/**
 * Removes the user from their localStorage so that they can't access the website. Also it sends them to the index.html page.
 */

export function logout() {
  localStorage.clear();
  location.href = "./index.html";
}
