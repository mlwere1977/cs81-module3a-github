// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!"; // Returns a greeting string with the user's name
}

// Function Farewell.
// This function takes one argument called (MyName) which is a string
function farewell(MyName) {
  console.log("Goodbye, " + MyName + "!"); // Inside the function, it uses console.log() to print a farewell message to the console.
}

// Function LogEntry
// This is a function called LogEntry with two parameters (CurrentDate) and (MyMessage)
function logEntry(CurrentDate, MyMessage) {
  console.log(`[${CurrentDate}] ${MyMessage}`); // It uses console.log() to print a formatted message to the console.
}

// Function Thank
// This function takes one argument (Name) and prints a thank-you message
function thank(Name) {
  console.log("Thank you, " + Name + "!"); // Outputs a thank-you message to the console
}

// Call the functions
console.log(greet("Mukwaya")); // Calls the greet function and logs the returned greeting
farewell("Mukwaya"); // Calls the farewell function with the name "Mukwaya"
logEntry("2025-07-03", "Systems rebooted successfully."); // Logs a system message with a date
thank("Mukwaya"); // Calls the thank function to express gratitude