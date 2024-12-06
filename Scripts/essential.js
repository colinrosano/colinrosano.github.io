// this is an essential script and will not be blocked.

// Function to set a cookie
function setCookie(name, value, days) {
  // Calculate expiration date
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();

  // Set the cookie with name, value, and expiration
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
}

setCookie("essentialCookie", "this must be placed", 365);
