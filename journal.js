// Greet a person by name and return a friendly message
function greet(personName) {
  return "Hello, " + personName + "!"; // Builds a personalized greeting
}

// Say goodbye to someone by name
function farewell(personName) {
  console.log("Goodbye, " + personName + "!"); // Prints a farewell message to the console
}

// Record a journal entry with a date and message
function logEntry(entryDate, journalMessage) {
  console.log(`[${entryDate}] ${journalMessage}`); // Formats and prints the journal entry
}

// Express appreciation to someone by name
function thank(personName) {
  console.log("Thank you, " + personName + "!"); // Outputs a thank-you message
}

// Get today's date in YYYY-MM-DD format
function getTodayDate() {
  const now = new Date();
  return now.toISOString().split("T")[0]; // Extracts just the date portion
}

// Highlight an important note by surrounding it with asterisks
function emphasizeNote(noteText) {
  console.log("*** " + noteText.toUpperCase() + " ***"); // Makes the note stand out visually
}

// Call the functions to demonstrate how they work
console.log(greet("Mukwaya")); // Show a greeting
farewell("Mukwaya"); // Say goodbye
logEntry("2025-07-03", "Systems rebooted successfully."); // Log a past event
thank("Mukwaya"); // Show appreciation
logEntry(getTodayDate(), "Started journaling with new functions."); // Log something using today's date
emphasizeNote("backup completed"); // Highlight a critical message