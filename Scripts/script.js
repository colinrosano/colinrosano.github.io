const consentIdContent = document.querySelector(".consent-id-content");
const copyButton = document.querySelector(".copy-button");

// set consent ID in modal

document.addEventListener("DOMContentLoaded", function () {
  const osanoConsentUUID = localStorage.getItem("osano_consentmanager_uuid");

  document.querySelector(".verifyConsent").onclick = function (event) {
    event.preventDefault();
    consentIdContent.innerHTML = osanoConsentUUID;
  };
});

// copy consent uuid to clipboard
const copyConsentId = () => {
  const copyAlert = document.querySelector(".copyAlert");
  navigator.clipboard.writeText(consentIdContent.textContent);
  copyAlert.style.display = "block";
  copyAlert.innerHTML = "✅ Copied!";
};

copyButton.addEventListener("click", copyConsentId);
