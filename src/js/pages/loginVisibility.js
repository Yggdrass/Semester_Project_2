import { load } from "../storage/index_storage.js";

export function loginVisibility() {
  const token = load("token");
  document.body.classList[token ? "add" : "remove"]("logged-in");
}
