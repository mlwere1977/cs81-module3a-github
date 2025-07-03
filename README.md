# Journal.js

This project includes a straightforward JavaScript file (`journal.js`) that shows how to create and use basic functions for a journaling or logging system. Every function has a distinct function pertaining to message logging or user interaction.

## The Functions Overview

### 1. `greet(personName)`
**Goal:** Provides a customized greeting.
**The parameters are as follows:**
   `personName` (string): The individual to greet's name.
**Returns:** A string such as `Hello, Mukwaya!"

### 2. `farewell(personName)`
**Goal:** Outputs a final message to the console.
**The parameters are as follows:**
   `personName` (string): The individual's name to bid farewell to.
 **Output:** Records `"Goodbye, Mukwaya!"` to the console.

### 3. `logEntry(entryDate, journalMessage)`
- **Goal:** Records a journal entry along with a timestamp.
**The parameters are as follows:**
   `entryDate` (string): The entry date (e.g., `"2025-07-03"`).
   `journalMessage` (string): The content of the journal entry.
 **Output:** Logs a formatted message like `[2025-07-03] Systems rebooted successfully.`

### 4. `thank(personName)`
**Goal:** Prints a message to the console saying "thank you."
**The parameters are as follows:**
   `personName` (string): The recipient's name.
**Output:** Logs `"Thank you, Mukwaya!"` to the console.

### 5. `getTodayDate()`
**Goal:** The current date is returned in the format `YYYY-MM-DD`.
**The parameters are as follows:**
A string such as `"2025-07-03"` is returned.


### 6. `emphasizeNote(noteText)`
**Purpose:** An important message is highlighted by printing it in uppercase with asterisks.
**The parameters are as follows:**
   `noteText` (string): The point to highlight.
A message such as `*** BACKUP COMPLETED ***` is logged.


### This Code can be used as follows: using (JavaScript)

```javascript
console.log(greet("Mukwaya"));
farewell("Mukwaya");
logEntry(getTodayDate(), "Started journaling with new functions.");
thank("Mukwaya");
emphasizeNote("backup completed");