# Pragmatic Vim

## Modes

### Command

What makes Vim so special (and scary). Every key maps to a command. Get back to `Command` mode by pressing the `esc` key.

### Insert

The mode everyone is used to. Get into `Insert` mode by pressing the `i` key (or `a`... or other combinations...)

`i` will put the cursor into insert mode just before the cursor position.

`I` will put the cursor into insert mode at the beginning of the line.

`a` will put the cursor into insert mode just after the cursor position.

`A` will put the cursor into insert mode at the end of the line.

`o` will OPEN a new line after the line the cursor is on.

`O` will OPEN a new line before the line the cursor is on.

### Visual

Selection or highlight mode. Get into `Visual` mode by pressing the `v` key. The text is selected while moving the curor and will exit visual mode when an alteration is made or `esc` is pressed.

Pressing the uppercase `V` will select the entire line, and any movement will maintain the whole-line selection.

## Navigation/Motion

### Arrows

`h` === LEFT

`j` === DOWN

`k` === UP

`l` === RIGHT

### Same Line

`$` === End of line

`0` === Beginning of line

`^` === Beginning of line at first char

### File

`G` === End of file

`gg` === Beginning of file

### Page

`L` === Move the cursor to the end of the page

`H` === Move the cursor to the beginning of the page

`M` === Move the cursor to the middle of the page

### Words

`w` === next word

`W` === next word (skipping punctuation)

`b` === previous word

`B` === previous word (skipping punctuation)

`e` === end of word

`E` === end of word (skipping punctuation)

### Larger Blocks

`{` === next empty line (paragraph)

`}` === previous empty line (paragraph)

### Matching Blocks

`%` will move the cursor back and forth between two enclosing block marks (e.g. `{ }`, `( )`, `[ ]`).

This is one of the movements I use most when working with code.

### Distance

You can preface any of these commands by a number to move that many actions.

`2w` will jump ahead by two words.

`12j` will move the cursor down 12 lines. This is why using relative line numbers is so useful. You can see at a glance how many lines up or down you need to move, and it will only take you 2 or 3 keypresses.

## Alterations

### Change/Delete

`c` for CHANGE

`d` for DELETE

These commands will wait for a motion keypress before executing.

`ce` will delete from the cursor to the end of the word and place you in `insert` mode.

`dj` will delete the entire current line and the line below, keeping you in `command` mode.

#### Line

`C` delete from the cursor to the end of the line, putting you in insert mode.

`D` delete from the cursor to the end of the line, keeping you in command mode.

`cc` delete the entire line, putting you in insert mode.

`dd` delete from the entire line, keeping you in command mode.

#### Character

`s` will delete the character at the cursor position and enter insert mode.

`x` will delete the character at the cursor position and keep you in command mode. (like the `del` key)

`X` will delete the character before the cursor position and keep you in command mode. (like `backspace`)

#### Replace

`r` is for REPLACE

It will replace the character the cursor is on with the next character entered.

If the cursor was at the beginning of the word `Mouse` (on the `M`), and the `rH` command was given, `Mouse` would then become `House`.

### Repeat

`.` will repeat the last command.

This is a very powerful command that will save a ton of time.

### Copy/Paste

`y` is for YANK

Yank follows the same rules as `c` or `d` in that it waits for a motion command before executing.

`yy` will copy the entire line.

`yj` will copy the entire current line and the line below.

`y$` will copy from the cursor position to the end of the line.

`p` is for PASTE

Lower case will past AFTER the cursor, whereas `P` will paste BEFORE.

If an entire line is copied (meaning the line contains a \n), `p` will paste on the next line and `P` will paste on the line before the cursor.

### Undo/Redo

`u` is for UNDO

`ctrl + r` is for REDO

### Advanced Enclosures

Vim also has the concept of `inside` or `all` in regards to enclosing spaces.

`ci(` will CHANGE all text INSIDE enclosing PARENS.

`ca(` will CHANGE ALL text within the enclosing PARENS, including the parens themselves.

`ciw` will delete the current word (regardless of where the cursor is in the word), and put you in insert mode.

## Searching

### By Line

`f` will search the line for the next character you input, and put the cursor on top of it.

`F` will search the line in reverse for the next character you input, and put the cursor on top of it.

`t` will search the line for the next character you input, and place the cursor right before it, not on top of it.

`T` will search the line in reverse for the next character you input, and place the cursor right before it, not on top of it.

`;` will jump to the next instance.

`,` will jump to the previous instance.

`f` and `t` can also be combined with other commands as the movement part of the command.

`vf]` will select from the current cursor position through the `]` character (if there is one).

### From Word

`*` will search forward for the word under your cursor.

`#` will search backward for the word under your cursor.

`n` will jump to the next occurance.

`N` will jump to the previous occurance.

### Global (File)

`/` will put you in `Search` mode. Everything you type, until you press `Enter` will be part of your search.

`n` will jump to the next occurance.

`N` will jump to the previous occurance.

## Resources

### Cheat Sheet

#### https://devhints.io/vim

### Interactive Learning

#### https://www.openvim.com/tutorial.html

#### https://vim-adventures.com/
