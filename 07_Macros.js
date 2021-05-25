/* Macros */

// One really useful thing about vim is the ability to combine multiple commands and actions into a single key or macro.
// The "q" key initiates the creation of a macro. After typing "q", you must press any letter in order to assign this macro to a key.
// So, typing "qw" would start recording a macro that will be accessable to the "w" key.
// After recording all the keystrokes, press "q" again to end the macro recording.
// To access the macro, you must use the "@" symbol followed by the letter ("w" in this case) you assigned the macro to.
// If you want to use the same macro again, typing "@@" will invoke the previously invoked macro again.

// Let's record a macro to convert this function to implicitly return the object
// We can start the macro recording and assign it to the "w" key by typing "qw". It is important to pay attention to where your cursor is.
// Once the macro is recording, we can use the "^" to go to the beginning of the line, just to make sure it starts from the same place every time we execute it.
// Now let's "f{" to go to the curly brace
// Then let's use "x" to remove the brace
// Next we use "J" (shift + j) to bring the line below up onto the current line
// Then we "ct{" and add a "("
// Then escape and "$" to go to the end of the line
// Use "%" to follow the curly brace to its corresponding brace
// Use "a)" to add a ")" after the curly brace.
// Finally, escape, go to the next line with "j", and delete the last curly brace with "dd".
// Press "q" to finish the recording.
// Go to the next use case and press "@w" to invoke the macro
// You can use "@@" on the last use case to invoke the same macro
const test = () => {
  return {
    type: "UPDATE_DATA",
    payload: 1,
  };
};

const test2 = () => {
  return {
    type: "SET_DATA",
    payload: 2,
  };
};

const test3 = () => {
  return {
    type: "REMOVE_DATA",
    payload: 3,
  };
};
