var inputEls  = document.querySelectorAll("input");
// Set date on jumbotron with the right format
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY")
    $("#currentDay").text(currentDate);
}
displayDate();


// Iterate over each of the hours in the planner
// Compare with current hour to assign classes that correspond to past/ present/ future
function styleHourSections(){
    var hourEls = document.querySelectorAll(".hour");
    $.each(hourEls, function(i, hourEls){
        if (moment().format("hh a") === hourEls.textContent) {
            hourEls.nextElementSibling.className = "present";
        } else if (moment().format("hh a") > hourEls.textContent) {
            hourEls.nextElementSibling.className = "past";
        } else if (moment().format("hh a") < hourEls.textContent) {
            hourEls.nextElementSibling.className = "future";
        }
    });
}
styleHourSections();

console.log(inputEls);
function saveEvents(event) {
console.log(`save the ${event}event`);
}

inputEls.forEach(input => {
    input.addEventListener("click", saveEvents);
});



// Save inputs and persist to local storage

// Listener for save buttons