var inputEls  = document.querySelectorAll("input");
var hourEls = document.querySelectorAll(".hour");
// Set date on header with the right format
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY")
    $("#currentDay").text(currentDate);
}
displayDate();

// Figure out the present hour, past, future
// Assign classes based on this
// Iterate over each of the hours in the planner
// Compare with current hour to assign classes that correspond to past/ present/ future
$.each(hourEls, function(i, hourEls){
    console.log(`i ${i}`);
    console.log(`hourEls.textContent: ${hourEls.textContent}`);
    if (moment().format("hh a") === hourEls.textContent) {
        console.log("match hour")
        console.log(hourEls.nextElementSibling.classList);
        hourEls.nextElementSibling.className = "present";
        console.log(hourEls.nextElementSibling.classList);
    } else if (moment().format("hh a") > hourEls.textContent) {
        console.log("greater hour");
        hourEls.nextElementSibling.className = "past";
    } else if (moment().format("hh a") < hourEls.textContent) {
        console.log("lesser hour");
        hourEls.nextElementSibling.className = "future";
    }
})

var currentHour = moment().format("hh a");
$("#currentHour").text(currentHour);

// Use moment to compare the "hour" text with calculated hour

// Save inputs and persist to local storage

// Listener for save buttons