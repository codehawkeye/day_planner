// load up the HTML first!!!!!
$(document).ready(function () {
// Get the date with moment
console.log(moment().format("dddd, MMMM Do"))
// Put date on page 
$("#currentDay").text(moment().format("dddd, MMMM Do"))

// get the current hour
    var currentHour = moment().hours();
    console.log(currentHour)

// make a forEach loop that goes over the hour blocks
    $(".time-block").each(function () {
        
    })
    
    // get the value from the HTML for the current hour block
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

//    check to see if currentHour is greater > or < blockHour
    
// add CSS classes according to time
    $(this).addClass("past");
    $(this).addClass("present");
    $(this).addClass("future");
    

})