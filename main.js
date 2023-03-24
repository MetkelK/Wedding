// Get references to all the necessary DOM elements
const attendingRadios = document.querySelectorAll('input[name="attendance"]');
const dinnerSelections = document.querySelectorAll(
  'input[name="dinner-selection"]'
);
const guestRadios = document.querySelectorAll('input[name="guest-attendance"]');
const guestDetails = document.querySelector("#guest-info");
const dinnerDetails = document.querySelector("#dinner-options");

// Add event listeners to the attendingRadios elements
attendingRadios.forEach(function (attendingRadio) {
  attendingRadio.addEventListener("change", function () {
    if (attendingRadio.value === "Yes") {
      // Show the dinner details section
      dinnerDetails.classList.remove("hidden");
      dinnerSelections.forEach((dinner) => {
        dinner.setAttribute("required", "");
        console.log(dinner);
      });
    } else {
      // Hide the dinner details section
      dinnerDetails.classList.add("hidden");
      dinnerSelections.forEach((dinner) => {
        dinner.removeAttribute("required", "");
        console.log(dinner);
      });
    }
    console.log(attendingRadio.value);
  });
});

// Add event listeners to the guestRadio element
guestRadios.forEach(function (guestRadio) {
  guestRadio.addEventListener("change", function () {
    if (guestRadio.value === "Yes") {
      // Show the guest details section
      guestDetails.classList.remove("hidden");
    } else {
      // Hide the guest details section
      guestDetails.classList.add("hidden");
    }
    console.log(guestRadio.value);
  });
});
