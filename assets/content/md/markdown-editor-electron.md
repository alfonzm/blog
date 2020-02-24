---
layout: post-with-cover
title:  "Making a Programmer Notes App Part 2: Markdown Editor in Electron"
date: 2016-8-15 00:00:00 +0800
categories: webdev electron
comments: true
---

This is the second entry of my devlog series in which I'm building a programmer-centric note-taking app for macOS. In this post I'll talk about step #1, or, how to create a simple markdown editor in Electron.

# Setting up Electron

I used [this boilerplate](https://github.com/sindresorhus/electron-boilerplate) to get an Electron project up and running right away.

```bash
$ git clone https://github.com/szwacz/electron-boilerplate markdown-editor
$ cd markdown-editor
$ npm install && npm start
```

There's a lot of things included in the boilerplate, but there's only three files that we really need for now.

#### The Main Process – index.js

When an Electron app is started, the process that is run first is called the __main process__, specified in __package.json__'s `main` field. This is where we can create windows (`BrowserWindow` instances), display a GUI and do all other OS-centric things.

#### The Renderer Process – app/app.js

The other process is called the __renderer process__, which is where most of the application and GUI-related logic goes.

#### The GUI – app/app.html

And finally, since Electron uses web pages as its GUI, we need HTML templates.

What `npm start` does is basically just run [`electron-prebuilt`]((https://github.com/electron-userland/electron-prebuilt))'s `electron .` command to build and run the app.

The initial boilerplate looks like this right off the box.

![](/images/prog-notebook2/1.png)

Perfect! Now we can start messing around with the template.

# Creating the UI

For now what I'm aiming for is just a basic markdown editor window with two columns, the editor on the left and the Markdown-ed HTML output on the right.

The HTML that Electron renders as its GUI is in __app/app.html__. Let's add the two columns in our HTML template body.

__app.html:__

```html
<div class="container">
  <textarea id="editor">Hello World</textarea>
  <div id="output">
    <h1>Hello World</h1>
  </div>
</div>
```

And add in the appropriate styles in __main.less__ until we get something like this:

![](/images/prog-notebook2/2.png)

<p class="img-caption">That's a 100% height 50% width textarea and div with some paddings.</p>

It's pretty much done at this point. Now we just need to add the part where typing stuff in the textarea displays the Markdown output on the right div. Should be kids' stuff with plain 'ol jQuery.

# Markdown Editor

First, install the jQuery library:

```
$ npm install jquery --save
```

Then add the following to __app/app.js__, which is where our GUI code should go.

```javascript
// ... other imports
import $ from 'jquery';

// Get references to #editor and #output
$editor = $('#editor');
$output = $('#output');

// Removed some of the boilerplate code

$(document).ready(function(){
  // Whenever we type text in the textarea,
  // display that text into the output div
  $editor.on('input propertychange', function(){
    $output.html($(this).val());
  });
});
```

Now when we type stuff into the textarea, the output div should display that text as well.

![](/images/prog-notebook2/3.gif)

And we now have a Markdown editor! ...Almost. It's rendering stuff out on the display div, but we need it to actually display Markdown formatted text.

# Actual Markdown Editing Part

There's a library called [marked](https://www.npmjs.com/package/marked) that converts strings into markdown HTML, i.e. `# hello` into `<h1>hello</h1>`.

Install marked into our dependencies:

```bash
$ npm install marked --save
```

Import the library in __app.js__

```
import marked from 'marked';
```

Then we simply pass the textarea value into a `marked()` function, which returns the Markdown-ed HTML. Still in __app.js__:

```javascript
$editor.on('input propertychange', function(){
  var outputHtml = marked($(this).val());
  $output.html(outputHtml);
});
```

And that's it! Now when you try typing Markdown syntax into the editor it should display Markdown formatted text on the output window:

![](/images/prog-notebook2/4.gif)

<p class="img-caption">It's an actual Markdown editor!</p>

# One last thing

The Markdown-ed output looks ugly by its native vanilla HTML styles. Let's fix that by using a Markdown stylesheet. I'm going with GitHub's.

We include the stylesheet in __main.less:__

```sass
@import (less) "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.4.0/github-markdown.css";
```

GitHub's Markdown stylesheet is applied to `.markdown-body`'s, so in __app.html__:

```html
<div id="output" class="markdown-body">
```

# Conclusion

![](/images/prog-notebook2/5.png)

And there you have it, a fully working GitHub-flavored Markdown editor. To build it to a native macOS application, simply run `npm run release` and it should create DMG, zip and app files into a dist folder.

On my next posts I will be adding more features like creating new notes and auto-saving them to disk.

— Alfonz

&nbsp;

- [Programmer Notebook Log #1 – Overview](/programmer-notebook)
- [Programmer Notebook Log #2 – Creating a Markdown Editor in Electron]()
- [Programmer Notebook Log #3 – Adding Core Functionality](/programming-notebook-core-functionality)
