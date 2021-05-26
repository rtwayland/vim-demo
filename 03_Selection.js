/* Visual or Selection Mode */

// The "v" key will put you in "visual" mode.
// Use other key commands from normal mode to navigate
// "V" (shift + v) will select the entire line
// The escape key will put you back in normal mode.

// Try various combinations of selecting and unselecting text
// "ve" will select from the cursor to the end of the word
// "v$" will select from the cursor to the end of the line
const script = document.createElement("script");

/* Copy & Paste */

// "y" is for "yank" or copy
// "Y" (shift + y) or "yy" copies the whole line. (I always use "yy")
// "p" is for paste AFTER the cursor
// "P" (shift + p) is for paste BEFORE the cursor

// Try selecting and copying the below string and pasting it after "Friday"
// "Saturday"
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// The yank command can also be combined with other commands
// "ye" would copy the text from the cursor to the end of the word
// Try copying the text and pasting it inside the quotation marks at the end of the array
// Sat
const daysShort = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", ""];

/* Inside & All */

// In addition to adding motion commands to selection commands ("v$"), you can also add further specificity with the "i" and "a" keys.
// "yi(" would copy everything "inside" a set of parenthesis the cursor is within. "inside" meaning, excluding the parenthesis.
// Whereas "va(" would select everything inside a set of parenthesis, including the parenthesis.
// Or stated in terms of the command, it would select "all" of the parenthesis and what they contain.

// Move your cursor within the function parenthesis
// Use "yi(" to copy the contents of the parenthesis
// Then paste what you have copied inside the console.log
function print(name, greeting) {
  console.log();
}

// Use the "yy" command to copy all of the console.log line
// Then paste it on the next line and alter it to log the alternate variables.
function print2(name, greeting) {
  let name2 = name + "2";
  let greeting2 = greeting + "2";
  console.log(name, greeting);
}

/* Granular Control */

// When a block of text is selected in "visual" mode,
// you can toggle between the two ends of the selection with the "o" key.
// This is useful when you might need to expand your selection
// but you don't need to restart from the beginning.

function print2(name, greeting) {
  let name2 = name + "2";
  let greeting2 = greeting + "2";
  console.log(name, greeting);
  console.log(name2, greeting2);
}
