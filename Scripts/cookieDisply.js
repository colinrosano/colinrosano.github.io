// visitor-display.js
document.addEventListener("DOMContentLoaded", function () {
  const osano_consentmanager_uuid = localStorage.getItem(
    "osano_consentmanager_uuid"
  );
  document.getElementById("cookie-display").textContent =
    osano_consentmanager_uuid
      ? `Your Consent ID: ${osano_consentmanager_uuid}`
      : "No visitor ID found";
});
