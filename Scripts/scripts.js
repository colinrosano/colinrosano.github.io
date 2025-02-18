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

// async function getSubjectRightsRequests() {
//   const response = await fetch(
//     "https://api.osano.com/v1/subject-rights/requests",
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${osanoApiKey}`,
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data;
// }

// // Example usage
// getSubjectRightsRequests()
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

function promptForApiKeyAndFetchRequests() {
  const userApiKey = prompt("Please enter your API key:");
  if (userApiKey) {
    getSubjectRightsRequestsWithKey(userApiKey)
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  } else {
    console.error("API key is required to fetch subject rights requests.");
  }
}

async function getSubjectRightsRequestsWithKey(apiKey) {
  const response = await fetch(
    "https://api.osano.com/v1/subject-rights/requests",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// Example usage
promptForApiKeyAndFetchRequests();
