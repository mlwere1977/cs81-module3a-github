// Name: Mukwaya Lwere
// Class: CS 81 JavaScript
// Module 2 Assignment 2C: Commute Simulation
// Date: 06/29/2025

// This script simulates my daily commute from my home to Santa Monica College step-by-step using Google Maps' realistic travel speeds, as specified in the assignment.
// My personal Data 
const myName = "Mukwaya Lwere";         // myName stores my name.
const myCommuteDistance = 12;      // Commute distance in miles from my home to Santa Monica College
const myTransportMode = "walking";     // Transport option "driving", "bus", or "walk"
const myLandmark = "Central Park"; // The landmark i pass on my way to school 
const myLandmarkMile = 6;          // At which what distance do i  pass the landmark

// Setting mySpeed Based on Google Maps Averages for walking, driving, or by bus
let myspeed = 0; // Variable named myspeed is created and set to zero. Depending on the  mode of transportation, this variable will store the commuters speed (in miles per hour).
if (myTransportMode === "driving") { // The structure checks the value of myTransportMode (which is defined as "driving")
  myspeed = 30; // myspeed is set to 30 mph (a typical city driving average from Google Maps).
} else if (myTransportMode === "bus") { // myspeed is set to 12 mph (average city bus speed, including stops, per Google Maps).
  myspeed = 12; // Google Maps average bus speed (with stops)
} else if (myTransportMode === "walking") {
  myspeed = 3;  // myspeed is set to 3 mph (average walking speed).
}
 else if (myTransportMode === "bike") {
  myspeed = 15; // Google Maps average biking speed
}  else {
  myspeed = 0;  //If myTransportMode is set to anything else (such as "teleport" or "skateboard"), myspeed stays at zero.
}

// Begin the Commute Simulation 
console.log(`${myName}'s Commute Simulation from Home to Santa Monica College by ${myTransportMode}`); //  Prints a Commute Simulation Header
console.log(`Starting commute of ${myCommuteDistance} miles by ${myTransportMode}.`); // Prints the Starting Message
// Prints the distance traveled and the way I get there, such as "Starting commute of 12 miles by driving."
for (let mile = 1; mile <= myCommuteDistance; mile++) { // Prints the Starting Message
  if (mile === myLandmarkMile) { // The for loop extends from 1 to the distance of my commute (for example, 1 to 12).
    console.log(`Mile ${mile}: Woow, there is  ${myLandmark}!`); // Prints a unique message: Mile 6: Central Park, Woow!
  } else if (mile === myCommuteDistance) {
    console.log(`Mile ${mile}: Arrived to Santa Monica College!`); // Prints: Mile 12: Arrived to Santa Monica College!
  } else {
    console.log(`Mile ${mile}: Cruising along...`); // Prints: Mile X: Cruising along... for all other miles.
  }
}

// Commute Time Calculation 
if (myspeed > 0) { // The code first determines whether my travel speed, expressed in miles per hour, myspeed, is greater than 0.
  //     This avoids division by zero or negative speeds and guarantees that I have a legitimate form of transportation (such as walking, driving, or taking the bus).
    const commuteTime = myCommuteDistance / myspeed; // It divides myCommuteDistance, or the number of miles I travel, by myspeed to determine the total commute time if the speed is valid.
  //  For instance, my commute will take an hour if i am  traveling 12 miles at 12 mph.
    console.log(`Total commute time: ${commuteTime.toFixed(2)} hours.`); // For a cleaner display, the result is formatted to two decimal places using.toFixed(2) (e.g., 1.00 hours).
    // The console displays the following message:
    // One hour was spent commuting in total
} else { // It prints: "Commute time cannot be calculated due to unknown transport mode" if myspeed is 0 or less, which may occur if the transport mode is unknown or not handled in your code.
  console.log("Commute time cannot be calculated due to unknown transport mode."); //    This keeps mistakes like dividing by zero at bay and lets the user know exactly what's wrong.
}
/*
Writting the Analysis and Reflection  of the Commute Project

Prediction vs. Result:
At first, I thought the program would print out every mile of my commute, show a special message at the landmark, and calculate how long my commute would take overall depending on the mode of transportation I chose. 
I anticipated that switching from "walking" to "driving" would result in a much shorter commute and that special outputs or errors would occur when entering an unknown mode or a distance of 0. 
These expectations were met by the actual outcomes: when I switched modes, the commute time adjusted appropriately, and the messages showed up at the appropriate miles.

Analysis:
Because the `for` loop iterates from 1 to the value of `myCommuteDistance`, printing a message for each mile, the code functions as intended. 
The loop's `if` statement makes sure the right messages are shown at the appropriate times by checking for the landmark and the arrival mile. 
{myCommuteDistance` is divided by `myspeed`, which is determined by the mode of transportation, to determine the commute time. 
In the event that the mode is not detected, the code prints an error message rather than attempting the calculation, and `myspeed` remains at 0. 
This structure guarantees that the logic and data input are directly reflected in the output.

Exploration Insights:
Since the loop condition was false from the beginning, it makes sense that when I set `myCommuteDistance` to 0, the loop did not execute and no miles were printed. 
The program displayed the message "Commute time cannot be calculated due to unknown transport mode" when I selected an unknown transport mode, such as "teleport." 
This is because the error message was displayed and `myspeed` remained 0 because the conditional logic for speed failed to recognize the input. 
These tests demonstrate the value of strong conditional logic: always include a `else` case to deal with unexpected inputs, and make sure that your calculations and loop conditions take into account edge cases, such as zero or negative values. 
This guarantees that the program provides understandable, useful feedback in every situation and avoids runtime errors.
*/
