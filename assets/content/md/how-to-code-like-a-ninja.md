---
layout:   post-with-cover
title:    "How to Code Like a Ninja"
date:     2019-1-28 00:00:00 +0800
tags:     dev
comments: true
---

I've always been a firm believer that one of the most important traits of a great programmer is efficiency in typing code—keyboard shortcuts, macros, those sort of stuff that would save you a few milliseconds every time but when multiplied to almost every few lines of code, you potentially code 2, 3 times faster. I would cringe whenever I watch someone coding use the mouse very frequently to do things.

In this quick blog post I'm listing some of my favorite efficiency tricks and shortcuts for Sublime Text, most of which should also be doable in other modern text editors like Atom and Visual Code.

### Moving the cursor around

- `Cmd+Left/Right arrow` moves to the beginning or end of line
- `Cmd+Up/Down arrow` moves to the beginning or end of file
- `Alt+Left/Right arrow` moves to the beginning or end of previous/next word

Holding `Shift` with the above shortcuts will select text instead of moving.

- `Ctrl+G` to go to a line number
- `Cmd+R` to skip to a "symbol". For example, function names, or CSS selectors in a CSS stylesheet, or headers in markdown file, etc

And my personal favorite:

- `Ctrl+-` to "jump back." Remember that moment when you're writing in line X of file Y, then you go do something else in a different tab/file, then you want to go back to that line X in file Y but you couldn't remember where that was? This shortcut'll do just that—it will return your cursor back to that line you just previously edited.

### Opening files

`Cmd+T` to search and open files in a new tab.

![](/images/sublime/openfiles.gif)

I still see people who would look for a file among the hundreds of files and folders on the sidebar—you should almost never do that as long as you know the filename you're looking for!

### Manipulating lines of code

![](/images/sublime/lines.gif)

- `Cmd+Shift+D` to duplicate line
- `Cmd+J` to join the line below
- `Ctrl+Shift+K` or `Cmd+X` (with no text highlighted) to delete whole line
- `Ctrl+Cmd+Up/Arrow` to move current/selected lines up or down.

These also work when multiple lines are highlighted. Which leads us to...

### Multiple cursors

There's this really cool trick to select multiple lines by holding Ctrl+Shift and pressing Up/Down arrow keys to add lines. Alternatively you could Cmd+click on text to manually add cursors.

![](/images/sublime/multiple.gif)

Or, you could use Ctrl+Cmd+G to find and select matches of the highlighted text.

![](/images/sublime/multiple2.gif)

### Some key bindings

Time for some key bindings! Open up Key Bindings - User file and add the following shortcuts.

```json
[
  { "keys": ["ctrl+tab"], "command": "next_view" },
  { "keys": ["ctrl+shift+tab"], "command": "prev_view" },
  { "keys": ["alt+shift+r"], "command": "reveal_in_side_bar"},
  { "keys": ["ctrl+i"], "command": "reindent", "args": {"single_line": false }}
]
```

`Ctrl+Tab` and `Ctrl+Shift+Tab` will now cycle through tabs left to right and vice versa (just like in Chrome).
`Ctrl+I` will automatically indent your code.
`Alt+Shift+R` to reveal the current file's location in the sidebar. Useful for when you need to see files in the same directory.

### Conclusion

The way I did it was I'd familiarize one shortcut at a time until they gradually become second nature, e.g. for this week I'd get used to multiple lines selection, next week would be cursor movement shortcuts, etc. Remember to keep discovering new shortcuts by looking at your editor's menu bar items!

Happy coding!

— Alfonz
