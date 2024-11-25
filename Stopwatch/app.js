// let running = false; // will be true when stpowatch is running
// let startTime = 0;
// let elapsedTime = 0;
// let interval;

// const hoursElement = document.getElementById('hours');
// const minutesElement = document.getElementById('minutes');
// const secondsElement = document.getElementById('seconds');

// const startButton = document.getElementById('start');
// const resetButton = document.getElementById('reset');

// function formatTime(ms){
//     const totalSeconds = Math.floor(ms / 1000);
//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;
    
//     return{
//         hours: hours < 10 ? '0' + hours : hours,
//         minutes: minutes < 10 ? '0' + minutes : minutes,
//         seconds: seconds < 10 ? '0' + seconds :  seconds
//     }
// }

// function update()
// {
//     const time = formatTime(elapsedTime)
//     hoursElement.textContent = time.hours;
//     minutesElement.textContent = time.minutes;
//     secondsElement.textContent = time.seconds;
    
// };

// function startStopwatch(){
//     startTime = Date.now() - elapsedTime;
//     interval - setInterval(() =>{
//         elapsedTime = Date.now() - startTime;
//         update();
//     }, 1000)

//     running = true;
//     startButton.textContent = 'Stop' ;
// }
// function stopStopwatch() {
//     clearInterval(interval); // Stop the interval
//     running = false;
//     startButton.textContent = 'Start'; // Change button text back to "Start"
// }

// function resetStopwatch() {
//     clearInterval(interval); // Stop the interval if stopwatch was running
//     running = false;
//     elapsedTime = 0; // Reset elapsed time
//     update(); // Reset the display to 00:00:00
//     startButton.textContent = 'Start'; // Change button text to "Start"
// }

// // Event listeners for buttons
// startButton.addEventListener('click', () => {
//     if (running) {
//         stopStopwatch(); // If the stopwatch is running, stop it
//     } else {
//         startStopwatch(); // If the stopwatch is stopped, start it
//     }
// });

// resetButton.addEventListener('click', resetStopwatch); // Reset the stopwatch when the reset button is clicked

let running = false; // Indicates whether the stopwatch is running or stopped
let startTime = 0; // Store the start time in milliseconds
let elapsedTime = 0; // Store the elapsed time in milliseconds
let interval; // To store the setInterval reference

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const startStopButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

function formatTime(ms) {
    // Convert milliseconds into hours, minutes, and seconds
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format the hours, minutes, and seconds to always be 2 digits
    return {
        hours: hours < 10 ? '0' + hours : hours,
        minutes: minutes < 10 ? '0' + minutes : minutes,
        seconds: seconds < 10 ? '0' + seconds : seconds
    };
}

function updateClock() {
    const time = formatTime(elapsedTime);
    hoursElement.textContent = time.hours;
    minutesElement.textContent = time.minutes;
    secondsElement.textContent = time.seconds;
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime; // Adjust the start time based on how long the stopwatch ran
    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime; // Update the elapsed time
        updateClock(); // Update the displayed time
    }, 1000);

    running = true;
    startStopButton.textContent = 'Stop'; // Change button text to "Stop"
}

function stopStopwatch() {
    clearInterval(interval); // Stop the interval
    running = false;
    startStopButton.textContent = 'Start'; // Change button text back to "Start"
}

function resetStopwatch() {
    clearInterval(interval); // Stop the interval if stopwatch was running
    running = false;
    elapsedTime = 0; // Reset elapsed time
    updateClock(); // Reset the display to 00:00:00
    startStopButton.textContent = 'Start'; // Change button text to "Start"
}

// Event listeners for buttons
startStopButton.addEventListener('click', () => {
    if (running) {
        stopStopwatch(); // If the stopwatch is running, stop it
    } else {
        startStopwatch(); // If the stopwatch is stopped, start it
    }
});

resetButton.addEventListener('click', resetStopwatch); // Reset the stopwatch when the reset button is clicked