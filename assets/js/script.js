var inputEls  = $("input");
// Set date on jumbotron with the right format
function displayDate() {
    var currentDate = moment().format("dddd, MMMM Do, YYYY")
    $("#currentDay").text(currentDate);
}
displayDate();


// Iterate over each of the hours in the planner
// Compare with current hour to assign classes that correspond to past/ present/ future
function styleHourSections(){
    var hourEls = $(".hour");
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

// Listener for save buttons to save inputs to local storage
$(".saveBtn").on("click", function() {
var savedEvents = {
    hour: $(this).siblings(".hour").text(),
    event: $(this).siblings("input").val(),
};

localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
})


// Get stored elements and show them again
