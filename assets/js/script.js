var inputEls = document.querySelectorAll(".event-input");
// Set date on header with the right format
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY")
    $("#currentDay").text(currentDate);
}
displayDate();

// Figure out the present hour, past, future
// Assign classes based on this
console.log(inputEls);

var currentHour = moment().format("hh a");
$("#currentHour").text(currentHour);

// Use moment to compare the "hour" text with calculated hour

// Save inputs and persist to local storage

// Listener for save buttons