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
// TODO: Fix how hours are being compared. Some incorrectly labeled past or future
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
// TODO: Fix so that you can update one input, but keep the rest
$(".saveBtn").on("click", function() {

    var timeBlock = $(this).siblings(".hour").text();
    var event = $(this).siblings("input").val();
    // if hour exists within eventsArr, then modify timeblock
    //if hour does not exist yet, push new pair
    if (eventsArr = []) {
        eventsArr.push({"timeBlock": timeBlock, "event": event});
    }
    // check for an existing stored event at that time, and update it    
    for (var i =0; i< eventsArr.length; i++) {
        if (eventsArr[i].timeBlock.includes(timeBlock)) {
            eventsArr[i].event = event;
        } else { // TODO: Still overwrites if a new timeblock is saved
            eventsArr.push({"timeBlock": timeBlock, "event": event}); // just this line was the old version
        }
    
    }
    
    



localStorage.setItem("eventsArr", JSON.stringify(eventsArr));
})


// Get stored elements and show them again
//if (inputEls === )// check if empty on reload
function displayEvents (){
    storedEvents = JSON.parse(localStorage.getItem("eventsArr"));
    // Create array of all hours in timeblocks
    var hoursArr = [];
    for (var k = 0; k <hourEls.length; k++) {
        hoursArr.push(hourEls[k].textContent);
    }
    // Check if the hour of the stored event exists in any of the available hours
    // Place the stored event in the input element corresponding to the hour
    for (var i = 0; i < storedEvents.length; i++) {
        if (hoursArr.includes(storedEvents[i].timeBlock)) {
            var j = hoursArr.indexOf(storedEvents[i].timeBlock);
            hourEls[j].nextElementSibling.value = storedEvents[i].event;
        }
    }
}
displayEvents();

// TODO: Fix misaligned sections