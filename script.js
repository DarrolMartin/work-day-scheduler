$(document).ready(function() {
console.log("hello");
// console.log("hello");
    // Function to get the current date and display it
    function displayCurrentDate() {
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      $('#currentDay').text(currentDate);
// console.log(currentDate)
      ;
    }
   // Function to create time blocks
    function createTimeBlocks() 
    {
        const workdayStartHour = 9; // Assuming workday starts at 9 AM
        const workdayEndHour = 17; // Assuming workday ends at 5 PM
// console.log(workdayStartHour, workdayEndHour);
        const currentHour = dayjs().hour();
// console.log(currentHour);
        // Get the schedule container
        const scheduleContainer = $('.container');

        for (let hour = workdayStartHour; hour <= workdayEndHour; hour++) {
            const timeBlock = $('<div>').addClass('row time-block');
// console.log(timeBlock);
    // Create hour element
    const hourElement = $('<div>').addClass('col-md-1 hour');
    hourElement.text(dayjs().hour(hour).format('hA'));

        // Create description textarea
        const descriptionElement = $('<textarea>').addClass('col-md-10 description');

         // Set past, present, or future class based on the current hour
         if (hour < currentHour) {
                descriptionElement.addClass('past');
            } else if (hour === currentHour) {
                descriptionElement.addClass('present');
            } else {
                descriptionElement.addClass('future');
            }
            // Retrieve saved text from localStorage and set it in the description textarea
      const savedText = localStorage.getItem(`hour-${hour}`);
      if (savedText) {
        descriptionElement.val(savedText);
      }
            
                // Create save button
      const saveBtn = $('<button>').addClass('col-md-1 saveBtn').html('<i class="fas fa-save"></i>');

            // Save button click event
            saveBtn.on('click', function() {
              const textToSave = descriptionElement.val();
              localStorage.setItem(`hour-${hour}`, textToSave);
              alert('Text saved successfully!');
            });
      
            // Append elements to time block
            timeBlock.append(hourElement, descriptionElement, saveBtn);
      
            // Append time block to schedule container
            scheduleContainer.append(timeBlock);
          }
        }
      
        // Display current date and create time blocks on page load
        displayCurrentDate();
        createTimeBlocks();


        
      });
      
            
