var inputEls  = $("input");
var hourEls = $(".hour");
var eventsArr = [];
var savedEvents = [];
// Set date on jumbotron with the right format
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY")
    $("#currentDay").text(currentDate);
}
displayDate();


// Iterate over each of the hours in the planner
// Compare with current hour to assign classes that correspond to past/ present/ future
function styleHourSections(){
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

// Listener for save buttons to save inputs to local storage
$(".saveBtn").on("click", function() {

    var timeBlock = $(this).siblings(".hour").text();
    var event = $(this).siblings("input").val();
    eventsArr.push({"timeBlock": timeBlock, "event": event});


localStorage.setItem("eventsArr", JSON.stringify(eventsArr));
})


// Get stored elements and show them again
//if (inputEls === )// check if empty on reload
function displayEvents (){
    storedEvents = JSON.parse(localStorage.getItem("eventsArr"));

    for (var i = 0; i < storedEvents.length; i++) {
        if (hourEls[i].textContent === storedEvents[i].timeBlock) {
            hourEls[i].nextElementSibling.value = storedEvents[i].event;
        }
    }
}
displayEvents();


