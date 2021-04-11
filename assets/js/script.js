var inputEls  = $("input");
var hourEls = $(".hour");
var eventsArr = [];
var storedEvents = [];
// Set date on jumbotron with the right format
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY")
    $("#currentDay").text(currentDate);
}
displayDate();


// Iterate over each of the hours in the planner
// Compare with current hour to assign classes that correspond to past/ present/ future
function styleHourSections(){

    var currentTime = moment();
    var currentHr = currentTime.format("hh a");
    var uiHrsArray = []

   for (var i =0; i< hourEls.length; i++){
        uiHrsArray.push(hourEls[i].getAttribute("data-hour"));

        if (moment(currentHr,"hh a").isSame(moment(uiHrsArray[i],"hh a"),"hour")) {
            hourEls[i].nextElementSibling.className = "present";
        } else if (moment(currentHr,"hh a").isAfter(moment(uiHrsArray[i],"hh a"),"hour")) {
            hourEls[i].nextElementSibling.className = "past";
        } else if (moment(currentHr,"hh a").isBefore(moment(uiHrsArray[i],"hh a"),"hour")) { 
            hourEls[i].nextElementSibling.className = "future";
        }
   }
}
styleHourSections();
setInterval(styleHourSections, 10000);

// Listener for save buttons to save inputs to local storage
$(".saveBtn").on("click", function() {

    var timeBlock = $(this).siblings(".hour").text();
    var event = $(this).siblings("input").val();
    localStorage.setItem(timeBlock, event);
})

inputEls.each(function() {
    var getTimeblock = $(this).siblings(".hour").text();
    $(this).val(localStorage.getItem(getTimeblock));
})
    
