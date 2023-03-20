// Get references to all the necessary DOM elements
// const attendingRadio = document.querySelector('input[name="attendance"]');
const attendingRadios = document.querySelectorAll('input[name="attendance"]');
// const guestRadio = document.querySelector('input[name="guest"]');
const guestRadios = document.querySelectorAll('input[name="guest-attendance"]');
const guestDetails = document.querySelector("#guest-info");
const dinnerDetails = document.querySelector("#dinner-options");
// const transportDetails = document.querySelector("#transport-details");

// Add event listeners to the attendingRadio element
// attendingRadio.addEventListener("change", function () {
//   if (attendingRadio.value === "Yes") {
//     // Show the dinner details section
//     dinnerDetails.classList.remove("hidden");
//   } else {
//     // Hide the dinner details section
//     dinnerDetails.classList.add("hidden");
//   }
//   console.log(attendingRadio.value);
// });

// Add event listeners to the attendingRadios elements
attendingRadios.forEach(function (attendingRadio) {
  attendingRadio.addEventListener("change", function () {
    if (attendingRadio.value === "Yes") {
      // Show the dinner details section
      dinnerDetails.classList.remove("hidden");
    } else {
      // Hide the dinner details section
      dinnerDetails.classList.add("hidden");
    }
    console.log(attendingRadio.value);
  });
});

// Add event listeners to the guestRadio element
// guestRadio.addEventListener("change", function () {
//   if (guestRadio.value === "yes") {
//     // Show the guest details section
//     guestDetails.classList.remove("hidden");
//   } else {
//     // Hide the guest details section
//     guestDetails.classList.add("hidden");
//   }
// });

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

// Add event listeners to the transportRadio element
// transportRadio.addEventListener("change", function () {
//   if (transportRadio.value === "yes") {
//     // Show the transport details section
//     transportDetails.classList.remove("hidden");
//   } else {
//     // Hide the transport details section
//     transportDetails.classList.add("hidden");
//   }
// });

// Get DOM elements
// const attendSelect = document.getElementById("attend");
// const dinnerSection = document.getElementById("dinner-section");
// const bringGuestsSelect = document.getElementById("bring-guests");
// const guestSection = document.getElementById("guest-section");
// const numGuestsSelect = document.getElementById("num-guests");
// const guestNamesDiv = document.getElementById("guest-names");
// const guestNamesSection = document.getElementById("guest-names-section");
// const songRequestsSection = document.getElementById("song-requests-section");
// const transportationSection = document.getElementById("transportation-section");
// const questionsSection = document.getElementById("questions-section");
// const guestRadioYes = document.getElementById("guest-yes");
// const guestDetails = document.getElementById("guest-details");

// // Show/hide sections based on user input
// attendSelect.addEventListener("change", function () {
//   if (this.value === "yes") {
//     dinnerSection.classList.remove("hidden");
//     songRequestsSection.classList.remove("hidden");
//     transportationSection.classList.remove("hidden");
//     questionsSection.classList.remove("hidden");
//   } else {
//     dinnerSection.classList.add("hidden");
//     bringGuestsSelect.value = "";
//     guestSection.classList.add("hidden");
//     guestNamesDiv.innerHTML = "";
//   }
// });

// guestRadioYes.addEventListener("change", function () {
//   console.log("Radio button checked:", guestRadioYes.checked);
//   if (guestRadioYes.checked) {
//     guestDetails.classList.remove("hidden");
//   } else {
//     guestDetails.classList.add("hidden");
//   }
// });

// bringGuestsSelect.addEventListener("change", function () {
//   if (this.value === "yes") {
//     guestSection.classList.remove("hidden");
//   } else {
//     guestSection.classList.add("hidden");
//     numGuestsSelect.value = "";
//     guestNamesDiv.innerHTML = "";
//   }
// });

// numGuestsSelect.addEventListener("change", function () {
//   const numGuests = parseInt(this.value);

//   // Show guest names section
//   guestNamesSection.style.display = "block";

//   // Create input fields for guest names, dinner selections, and dietary restrictions
//   let guestInputs = "";
//   for (let i = 1; i <= numGuests; i++) {
//     guestInputs += `
//   <div>
//     <label for="guest${i}-name">Name of Guest ${i}:</label>
//     <input type="text" id="guest${i}-name" name="guest${i}-name" required>
//   </div>
//   <div>
//     <label for="guest${i}-dinner-selection">Guest ${i} Dinner Selection:</label>
//     <select id="guest${i}-dinner-selection" name="guest${i}-dinner-selection" required>
//       <option value="" disabled selected>Please select</option>
//       <option value="beef">Beef</option>
//       <option value="salmon">Salmon</option>
//       <option value="vegetarian">Vegetarian</option>
//     </select>
//   </div>
//   <div>
//     <label for="guest${i}-dietary-restrictions">Guest ${i} Dietary Restrictions:</label>
//     <input type="text" id="guest${i}-dietary-restrictions" name="guest${i}-dietary-restrictions">
//   </div>
// `;
//   }
//   guestNamesDiv.innerHTML = guestInputs;
// });
