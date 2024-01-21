// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
// display the current day
var today = dayjs();
$('#currentDay').text(today.format('MMM D,YYYY'));

// event listiner to save any information added to the schedule
$('.saveBtn').on('click', function (){  
  // console.log(this);
var todoTime = $(this).parent().attr('id');
var text = $(this).siblings('.description').val();
  localStorage.setItem(todoTime, text);
});

// display information in local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

// change css class if timeblocks are in the past, present or future
function displayCurrentHour() {
var currentHour = dayjs().format('H')

var timeBlock = $('.time-block');

$.each(timeBlock, function() {
 
  var scheduleHour = parseInt($(this).attr('id').split('hour-')[1]);
    console.log(currentHour);
    console.log(scheduleHour);
    console.log(this)

  if (scheduleHour < currentHour) {
    $(this).addClass('past')
    $(this).removeClass('present')
    $(this).removeClass('future')
  }
  else if (scheduleHour == currentHour) {
    $(this).removeClass('past')
    $(this).addClass('present')
    $(this).removeClass('future')
  }
  else {
    $(this).removeClass('past')
    $(this).removeClass('present')
    $(this).addClass('future')
  }
});
}

displayCurrentHour()


});
// var hourNineEl = $('#hour-9');
// var hourTenEl = $('#hour-10');
// var hourElevenEl = $('#hour-11');
// var hourTwelveEl = $('#hour-12');
// var hourThirteenEl = $('#hour-13');
// var hourFourteenEl = $('#hour-14');
// var hourFithteenEl = $('#hour-15');
// var hourSixteenEl = $('#hour-16');
// var hourSeventeenEl = $('#hour-17');



// var saveBtn = $('.saveBtn');