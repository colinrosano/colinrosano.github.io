const button = document.getElementById("getConsentBtn");

function showConsent() {
  console.log(Osano.cm.getConsent());
}

button.addEventListener("click", showConsent);
