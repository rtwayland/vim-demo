/* Altering text */

// "d" is for delete. It will delete your selection or the motion you specify. You will REMAIN in "normal" mode.
// "c" is for change. It will delete your selection or the motion you specify. However, you will be placed in "insert" mode.
// These commands will wait for a motion keypress before executing.
// In both cases, the deleted text will be placed in your copy register.

// Using "de", delete "urday" from "Saturday" below.
// Then paste it onto the end of "Sat" for the next variable
const sat = "Saturday";
const saturday = "Sat";

// Using "ci(" (or "ca{") remove all the function parameters and replace it with "params"
function combinedParams({ one, two, three, four, five, six }) {
  console.log(params);
}

/* Undo & Redo */

// To undo a change, use the "u" command.
// To redo a change, use the ctrl + r command.

// "dd" or "cc" will "delete" or "change" an entire line
// Use "dd" to delete the line below after placing your cursor on that line
// Then use "u" and then "ctrl + r" to "undo" and "redo" the change.

console.log("Have a great day!");

/* Delete & Change variations */

// "D" (shift + d) and "C" (shift + c) will "delete" or "change" from where the cursor is to the end of the line. (short for "d$" or "c$")

// After placing your cursor after the semicolon, use "D" to quickly delete the inline comment below.
// Or use "C" to remove the comment and update it with different text.
const day = "Monday"; // This is the first day of the week

// I use "dj" and "dk" (delete the line the cursor is on and the line above/below) quite a lot.
// You can also use other combinations like number of lines ("d4j" delete this line and 4 lines down)
// or file-wide motions
// "dgg" delete this line to the top of the file
// "dG" delete this line to the bottom of the file

/* Replace */
