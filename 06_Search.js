/* Search */

/* Line/Character Search */

// To avoid having to tap the "l" key repeatedly to move your cursor right to a desired character,
// or even using "w" to jump from word to word,
// you can use the "f"/"F" and "t"/"T" commands to jump directly to specified characters.

// "f" will find the next matching character in front of your cursor.
// "F" (shift + f) will find the next matching character behind your cursor.
// "t" and "T" behave exactly the same way except instead of placing the cursor on the desired character
// your cursor will be placed just before the character.

// Let's use what we've learned up until now to convert this function to an arrow function.
// With our cursor at the beginning of the line, we can use "ce" or "ciw" to change "function" to "const"
// Hit escape to re-enter "normal" mode, then use "f(" to jump to the first parenthesis
// Enter "insert" mode with "i" and add an equal sign, then escape.
// Then use "t{" to move your cursor to just before the curly brace.
// Enter "insert" mode again and add the fat arrow "=>". Then escape.
function getName(id) {
  return names[id];
}

// Let's practice integrating these find commands into our change commands
// Use "w" to go to the beginning of "getNames"
// Then let's change "get" to be "fetch"
// We can use "ctN" to "change to N"
// Then we can type "fetch" and escape
// If we were to use "f" instead of "t" in "ctN", it would have "changed THROUGH N" instead of just until "N"
const getNames = () => {};

// Sometimes, multiple characters will match your "f"/"t" search.
// You can jump next or previous with ";" or "," (semicolon or comma)

// Use "f\" to find the first "\" character. Then move back and forth using the ";" and ","
// This is especially usefull if you want to perform an action on each of these characters.
// The "." command could be used to quickly execute the same action on each instance.

// Fix the string to use forward slashes instead of back slashes.
const url = `\api\sms\attachments\${id}`;

/* File/Word Search */

// While your cursor is over a word, the "*" command can be used to search forward for the next occurance of that word.
// "#" will do the name but in reverse.
// In both cases, "n" (for next) can be used to jump to the next occurance.
// "N" (shift + n) (for...previous. Opposite of next) can be used to jump to the previous occurance.

// Test out "*" or "#" on firstName or lastName
// Then use "n" and "N" to navigate to other occurances
const firstName = "George";
const lastName = "Costanza";

console.log(firstName);
console.log(lastName);

const fullName = firstName + lastName;

/* Global File Search */

// If you need to do a global search of the file, use the "/" key to initiate a search. Type your search term and then hit enter.
// The "n" and "N" keys are used the same way as a word search.
// It is case insensitive

// Try searching for the word "search" in this document by typing "/search" then enter.
