---
layout: post-with-cover
title:  "Making a Programmer Notes App Part 3: Persisting Data"
date: 2016-8-23 00:00:00 +0800
categories: webdev electron
comments: true
---

This is the third of a devlog series in which I'm building a note-taking app for programmers. Last week's progress was making a simple markdown editor in Electron. This past week I've added most of the core note-taking functionalities.

- create a note
- load the notes on startup and display them on a sidebar list
- edit the notes and auto-save them to a local database
- delete a note

Other stuff I've worked on are making the editor feel like an actual IDE editor, and also adding tags (or categories) to notes.

Also, since Log #2, I've switched to a new boilerplate. I used [sindersorhus's electron-boilerplate](http://github.com/sindresorhus/electron-boilerplate) instead because I wanted my project to be as thin and minimal as possible and still have all the stuff I need.

## Persisting the notes to a local storage

There's multiple options to store data to a local database in Electron:

1. [electron-json-storage](https://github.com/jviotti/electron-json-storage)
2. localStorage
3. [lowdb](https://github.com/typicode/lowdb)

I went with lowdb mostly because it uses lodash API which is useful for querying. The other options also seem to be suited for stuff like user settings and defaults, as opposed to large texts with metadata for the notes app.

Creating a new note and saving it to the database looks something like this:

```javascript
// Require lowdb
var low = require('lowdb');

// Initialize database
var db = low(__dirname + '/notesdb.json');

// Save note
var newNote = {'id': uuid.v4(), 'body':'Type something...', 'updated_at': new Date().getTime()}
db.get('notes').push(newNote).value()
```

And retrieving notes is as simple as:

```javascript
db.defaults({'notes': []}).value()
var notes = db.get('notes').value()

notes.map(function(note){
  // Do something with note...
  // console.log(note.body)
  // console.log(note.updated_at)
});
```

## Adding Text Editor-ish Features

One of my important goals for the app is to make the markdown editor feel as close to what programmers are most comfortable on as possible, i.e. IDE's and text editors like Sublime Text or Atom. Thanks to [Ace Editor](https://ace.c9.io), an embeddable editor in Javascript—we can do just that!

I converted my editor `textarea` into an Ace Editor:

__HTML template (index.html)__

```html
<div id="editor">
  <pre id="editor-textarea"></pre>
</div>
```

And used the following settings:

__Renderer process (app.js)__

```javascript
editor = ace.edit("editor-textarea");
editor.setTheme("ace/theme/github");
editor.session.setMode("ace/mode/markdown");
editor.setOptions({
  showGutter: false,
  fontFamily: 'Menlo',
  showLineNumbers: false,
  fontSize: '9pt',
  wrap: true,
  cursorStyle: 'slim smooth',
  showPrintMargin: false,
  highlightActiveLine: false
});

editor.container.style.lineHeight = 1.4;
```

Now we have a markdown editor with markdown syntax highlighting and IDE/text editor keystrokes. Oh and it's highly customizable too!

![](/images/prog-notebook3/editor.png)

## Adding Tags

Finally, one other important functionality is the ability to add tags to notes. For this, I used the [tags-input](https://github.com/developit/tags-input) module with some custom CSS. Here's the result:

<img src="/images/prog-notebook3/tags.gif" class="shadowed">

## Conclusion

This past week I've finished most of the important functionalities and it's actually pretty usable at this stage. From here on out, I'll be focusing more on the design and UX for the app.

— Alfonz

&nbsp; 

__Programmer Notebook Log Series:__

- [Programmer Notebook Log #1 – Overview](/programmer-notebook)
- [Programmer Notebook Log #2 – Creating a Markdown Editor in Electron](/markdown-editor-in-electron)
- [Programmer Notebook Log #3 – Adding Core Functionality]()
