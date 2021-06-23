export function notRefresh() {
  let alreadyFetch = localStorage.getItem("userAPI");

  if (alreadyFetch) {
    return true;
  } else {
    return false;
  }
}
