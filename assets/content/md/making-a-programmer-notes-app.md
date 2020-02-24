---
layout: post-with-cover
title:  "Making a Programmer Notes App Part 1: Overview"
date: 2016-8-8 00:00:00 +0800
categories: webdev electron
comments: true
---

Hello, I'm devlogging my process on making a programmer notebook app for macOS using Electron.

### The Problem

I take down programming notes and cheat sheets a LOT on my Mac's Notes app. It usually looks like this:

![](/images/prog-notebook/1.png)

While it usually gets the job done, it just isn't meant to be a "programming notebook":

- A not-monospace font. Though we can change the font, it takes several keystrokes and clicks. And that's _everytime_ we make a new note, since at the moment there is no way to set the default font. I want a monospace font right off the bat.
- No markdown support.
- Tags/categories feature. Yes we can organize notes into folders, and I do use that. But when I want notes to belong to multiple categories, folder organization can't handle that.

Things I do like about the Notes app are:

- Auto-saving. I don't have to open notes from files, or save new notes into files, then open them again when I need to.
- It syncs across all my Apple devices.
- It's just really easy and efficient to use in general. Just create a new note, type stuff in, use some hotkeys to change the format (e.g. Cmd+Shift+H to set to Heading), close the app, open it again, continue where you left off, etc. No need to click save buttons or type in the Note title and stuff.

#### Other options:
- A text editor like Sublime/Atom — what better app to take notes about programming on than the actual app you write programs on? Sure, but using a text editor would mean saving/opening files scattered everywhere on the disk. Besides, I would prefer to just have Sublime windows for actual projects, and have a separate app for note-taking.
- Evernote — it's too cluttered and overkill for a programming notebook.
- Something else I haven't heard of that might suit my needs, but it doesn't really matter because...

### The Actual Problem

To be honest, I just really _really_ want to make something in Electron.

### ...Electron?

[Electron](http://electron.atom.io) (by GitHub) is a framework for creating native applications using web technologies. Atom, Slack, and Visual Code Studio among others are all made with Electron. I've always wanted to try and make something with it ever since I learned about it earlier this year.

![](/images/prog-notebook/2.png)

<p class="img-caption">Cross-platform apps made in HTML, CSS and JS.</p>

And that's where this I'll-be-making-a-programming-notebook-app thing comes in—an attempt to create a Notes-esque app but more programmer-centric, using Electron. I'm envisioning it as a Markdown editor app, on steroids, with all the nice features we love in macOS Notes.

On my next post(s) I will talk about my current progress with the development and a mini-tutorial on how to get started with creating Electron apps. You can find the source code [in this GitHub repository](https://github.com/AlfonzM/md-editor). Be warned, I am not the best modern-JS coder! And I will probably be porting this and use an actual JS framework like React in the future, depending on how large the project gets.

— Alfonz

&nbsp; 

__Programmer Notebook Log Series:__

- [Programmer Notebook Log #1 – Overview]()
- [Programmer Notebook Log #2 – Creating a Markdown Editor in Electron](/markdown-editor-in-electron)
- [Programmer Notebook Log #3 – Adding Core Functionality](/programming-notebook-core-functionality)
