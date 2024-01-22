$(document).ready(function() {

    console.log("hello");
    // Function to get the current date and display it
    function displayCurrentDate() {
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      $('#currentDay').text(currentDate);
      console.log(currentDate)
      ;
    }
   // Function to create time blocks
  function createTimeBlocks() 
  {
    const workdayStartHour = 9; // Assuming workday starts at 9 AM
    const workdayEndHour = 17; // Assuming workday ends at 5 PM
console.log(workdayStartHour, workdayEndHour);
    const currentHour = dayjs().hour();
console.log(currentHour);
    // Get the schedule container
    const scheduleContainer = $('.container');

    for (let hour = workdayStartHour; hour <= workdayEndHour; hour++) {
      const timeBlock = $('<div>').addClass('row time-block');
console.log(timeBlock);
 

   });
  
  
