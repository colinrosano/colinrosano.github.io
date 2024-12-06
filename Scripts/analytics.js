// this is an analytics script

// Function to set a cookie
function setCookie(name, value, days) {
  // Calculate expiration date
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();

  // Set the cookie with name, value, and expiration
  document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
}

setCookie("analyticsCookie", "someData", 365);
