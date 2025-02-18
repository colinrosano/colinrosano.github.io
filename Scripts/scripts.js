// display modal with consent UUID on button click
document.addEventListener("DOMContentLoaded", function () {
  const osano_consentmanager_uuid = localStorage.getItem(
    "osano_consentmanager_uuid"
  );

  const modal = document.getElementById("consentModal");
  const span = document.getElementsByClassName("close")[0];
  const consentUUID = document.getElementById("consentUUID");

  document.querySelector(".verifyConsent").onclick = function (event) {
    event.preventDefault();
    consentUUID.innerHTML = `To verify your consent, please reach out to us at privacy@company.com and provide us with your unique consent ID. <br> Your consent UUID is: ${osano_consentmanager_uuid}`;
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// show cookie banner
var cookieBannerLink = document.querySelector(".cookieBannerLink");

cookieBannerLink.addEventListener("click", () => window.Osano.cm.showDialog());
