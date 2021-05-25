/* Command/Normal Mode */

/* Basic Nav */

// Use the h, j, k, and l keys to move left, down, up, and right
// Use the $ sign to jump to the end of the line
// Use the 0 to jump to the beginning of the line
// With your cursor on line 16, test the difference between 0 and ^ (zero and caret)

const nums = [1, 2, 3, 4];

const numStrings = ["one", "two", "three", "four"];

function test() {
  const ob = {
    letters: ["a", "b", "c", "d"],
  };
}

/* Word Nav */

// "w" will move your cursor to the next word.
// "W" will move your cursor to the next word, skipping punctuation.
// "b" will move your cursor to the previous word.
// "B" will move your cursor to the previous word, skipping punctuation.
// "e" will move your cursor to the end of a word.
// "E" will move your cursor to the end of a word, skipping punctuation.

const ob = { first: { middle: { end: "last" } } };

const last = ob.first.middle.end; // Navigate this line using the word navigators

/* File Nav */

// Use "G" (shift + g) to jump to the last line of the file
// Use "gg" to jump to the first line of the file
// You can type a number followed by "G" (shift + g) to go to a specific line number
// Type 38G (38 + shift + g) to get to this line specifically

// If you want to move your cursor up or down the page in sections,
// you can use "ctrl + f" to move down a page,
// "ctrl + d" to move down half a page,
// "ctrl + b" to move up a page,
// or "ctrl + u" to move down half a page.

/* Controlling View */

// Sometimes you might not want to move your cursor, but you want the page to be positioned around your cursor.
// Use "zz" to scroll the page so that your cursor is in the middle of the view.
// Use "zt" to scroll the page so that your cursor is at the top of the view.
// Use "zb" to scroll the page so that your cursor is at the bottom of the view.

// You can also manually scroll the page up using "ctrl + y",
// or down using "ctrl + e"

/* Blocks */

// Use the "%" key to move the cursor to the corresponding block

// Place your cursor inside the function parameter list and test out the % key
// Then place your cursor on the first curlly brace and test out the % key
function blocks(first, second, third) {
  const fourth = first + second + third;
  return [first, second, third, fourth];
}

/* Number Distance */

// You can preface any distance command with a number to specify a greater distance.
// From this line, if you typed 10j you would move your cursor down 10 lines.
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// From the beginning of this line type 10w to get to this WORD.

// Yay! The last line of the file!