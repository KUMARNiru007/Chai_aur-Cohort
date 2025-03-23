/**
 * Challenge 6: Enhanced Clock ⏰

### Digital Clock Display

- Display the current time in HH:MM:SS format.
- The time should update every second.
- Numbers should be padded with leading zeros (e.g., 01:05:08).
- Use a clear and readable font for better visibility.

### Analog Clock Face

- The clock should feature a circular face with numbers 1 to 12.
- Include three hands to indicate:
  - Hour (shortest and thickest)
  - Minute (medium length and thickness)
  - Second (longest and thinnest)
- The center point should be marked with a dot.

### Hand Movement

- The second hand should move every second (rotating 6 degrees per second).
- The minute hand should move smoothly (rotating 6 degrees per minute).
- The hour hand should consider both hours and minutes for its position.
- The hands should rotate smoothly instead of jumping.

### Date Display

- Display the current date below the clock.
- The format should include day, month, and year.
 */



const digitalClock = document.getElementById('digital-clock');
const date = document.getElementById('date');
const clock = document.getElementById('clock');
const hourHand = document.querySelector('.hour');   
const minuteHand = document.querySelector('.minute'); 
const secondHand = document.querySelector('.second');

const showTime = function() {
    // get current time and date
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let am_pm ='AM';

    // Setting time for 12 year format
    if(hours > 12){
      hours-=12;
      am_pm ='PM';
    }
    else if (hours ===0 ){
      hours = 12;
      am_pm = 'AM';
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes= minutes < 10 ? '0' + minutes : minutes;
    seconds= seconds < 10 ? '0' + seconds : seconds;

    let currentTime = hours + ':' + minutes + ':' + seconds + ' ' + am_pm;

    // Displaying time
    digitalClock.innerText = currentTime;
}

showTime(); // calling the function showTime
setInterval(showTime, 1000); // 1000ms = 1s calling function showtime every second

// Displaying date 
const day = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let weekDate = day.getDate();
let year = day.getFullYear();
let month = day.getMonth();
let weekName =day.getDay();

const week = weekDays[weekName];

weekDate = weekDate < 10 ? '0' + weekDate : weekDate;
month = month < 10 ? '0' + month : month;

let currentDate = "     " +
         weekDate+
        " : " +
        month +
        " : " +
        year +" - " +
        week;

date.innerText = currentDate;

// Analog Clock 

function setupClock() {
  // Remove transitions from CSS to prevent any jump
  hourHand.style.transition = 'none';
  minuteHand.style.transition = 'none';
  secondHand.style.transition = 'none';
  
  // Initial position
  updateClockHands();
  
  // Update the clock more frequently for smooth movement
  setInterval(updateClockHands, 50);
}

function updateClockHands() {
  const time = new Date();
  
  // Calculate precise positions including milliseconds for smoothness

  const seconds = time.getSeconds() + time.getMilliseconds() / 1000;
  const minutes = time.getMinutes() + seconds / 60;
  const hours = (time.getHours() % 12) + minutes / 60;
  
  // Calculate exact degrees for each hand
  const hourDegrees = hours * 30;      
  const minuteDegrees = minutes * 6;  
  const secondDegrees = seconds * 6;   
  
  // Apply rotations
  
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

// Initialize the clock
setupClock();