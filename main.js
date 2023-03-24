// Get references to all the necessary DOM elements
const attendingRadios = document.querySelectorAll('input[name="attendance"]');
const dinnerDetails = document.querySelector("#dinner-options");
const dinnerSelections = document.querySelectorAll(
  'input[name="dinner-selection"]'
);
const guestRadios = document.querySelectorAll('input[name="guest-attendance"]');
const guestDetails = document.querySelector("#guest-info");
const guestName = document.querySelector("#guest-name");
const guestDinner = document.querySelectorAll(
  'input[name="guest-dinner-selection"]'
);
const transportation = document.querySelectorAll(
  'input[name="transportation"]'
);

// Add event listeners to the attendingRadios elements
attendingRadios.forEach(function (attendingRadio) {
  attendingRadio.addEventListener("change", function () {
    if (attendingRadio.value === "Yes") {
      // Show the dinner details section
      dinnerDetails.classList.remove("hidden");
      dinnerSelections.forEach((dinner) => {
        dinner.setAttribute("required", "");
      });
      guestRadios.forEach((radio) => {
        radio.setAttribute("required", "");
      });
      transportation.forEach((transport) => {
        transport.setAttribute("required", "");
      });
    } else {
      // Hide the dinner details section
      dinnerDetails.classList.add("hidden");
      dinnerSelections.forEach((dinner) => {
        dinner.removeAttribute("required", "");
      });
      guestRadios.forEach((radio) => {
        radio.removeAttribute("required", "");
      });
      transportation.forEach((transport) => {
        transport.removeAttribute("required", "");
      });
    }
  });
});

// Add event listeners to the guestRadio element
guestRadios.forEach(function (guestRadio) {
  guestRadio.addEventListener("change", function () {
    if (guestRadio.value === "Yes") {
      // Show the guest details section
      guestDetails.classList.remove("hidden");
      guestName.setAttribute("required", "");
      guestDinner.forEach((dinner) => {
        dinner.setAttribute("required", "");
      });
    } else {
      // Hide the guest details section
      guestDetails.classList.add("hidden");
      guestName.removeAttribute("required", "");
      guestDinner.forEach((dinner) => {
        dinner.removeAttribute("required", "");
      });
    }
  });
});
