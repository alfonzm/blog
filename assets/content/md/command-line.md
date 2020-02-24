---
layout: post-with-cover
title:  "Command Line Fu or: How I Learned to Stop Worrying and Love the Terminal"
date: 2018-5-7 00:00:00 +0800
categories: dev
comments: true
---

A few years back when then-15-year-old me just started learning software development I always hear about this "terminal," along with its other counterparts—bash, command line, CLI, the command prompt—and how it's so useful and how it makes a developer's life easier.

<figure>
  <em>
    <img src="/images/commandlinefu/hughjackman.jpg" />
  </em>
  <figcaption>Hugh Jackman in Swordfish—best hacking scene in a movie ever</figcaption>
</figure>

Since then I've always been intrigued and wanted to learn how to use and master it, but a few "Beginner Terminal Usage" tutorials later, I just can't get to appreciate how a couple `cd`'s and `pwd`'s and `ls`'s would help me aside from looking cool (like a hacker in the movies). I mean isn't that what Finder/Windows Explorer is for?

Fast forward a few years of professional software development experience later, terminal usage has become second nature to me (and should to you too!) and it definitely _does_ make one's life easier—and not just for programming!

This blog post is a love letter to "Past Me" who always wanted to be a command line fu master but just didn't have any idea where to go next after the `cd` and `pwd` tutorials—an answer to a question he's always asking: what real-life applications can I actually do with the terminal?



### Version Control (Git)

Remember that time when you make changes to your source code but want to save a copy of the older file just incase you want to revert back to that version? Of course you do, you posted this on Facebook during college while working on a school project:

_![](/images/commandlinefu/files.jpg)_

<p class="img-caption">PROJECT, PROJECT - Copy, PROJECT - Copy (2), project_new, project_new2, project_newest, projecttest, LATEST, LATEST - Copy, LATEST - Copy (2), PROJECT_hardcopypass, PROJECTOFDOOM, projectofawesome, finalproject, backup of final, superfinalproject</p>

Enter version control (a.k.a. source control), with [Git](http://github.com/) being the most popular one. It solves that problem—you make "savepoints" of your code called _commits_ and you can revert to them anytime. You usually then push your commits to a version control repository host like [GitHub](http://github.com/) or [GitLab](http://gitlab.com/).

### SSH

![](/images/commandlinefu/im_an_idiot.png)

<p class="img-caption"> Relevant XKCD. </p>

SSH (Secure Socket Shell) is a way to access a remote computer through the terminal. Think of it as using the terminal of another computer, from your computer—how cool is that!

```bash
$ ssh remote_username@remote_host
```

For example, you can use SSH to deploy your website to a server—you SSH into your Unix/Linux server, install and setup a [LAMP stack](https://en.wikipedia.org/wiki/LAMP_(software_bundle)), then clone the Git repository of your website's source code into your server's public HTML directory. From then on, you just do a `git pull` from your server everytime you push updates to your code—no need for those clunky time-wasting FTP GUI applications!



### Edit text/source code files

When you edit files in your local computer you'd definitely use a text editor, right? What if you need to edit files from a remote server via SSH like config files for instance? Well there's Vi/Vim for that, a text editor for the command line.

It's got a lot of powerful features and keybindings, and the learning curve is pretty steep, but it's all worth it and just takes a bit of practice and habit before you actually master it.

_![](/images/commandlinefu/vim.gif)_

<p class="img-caption">Source: vimgifs.com</p>

P.S. Other alternatives include nano and emacs, but you'll probably want to just stick with Vim for now, trust me. And you don't want to get into those vim vs. emacs wars, too!



### Install utilities with a package manager

[Homebrew](https://brew.sh/) is a package manager for macOS, equivalent to Linux's `apt`. Basically, like what it says on their website, it installs stuff you need that Apple didn't. And it's really simple too! To install Node.js on your system for example, you just do:

```bash
$ brew install node
```

And that's it! No more messy installers and reading installation guides and stuff.

While we're at it and installed node, there's also `npm`, a package manager for Node modules. [Npm modules](https://www.npmjs.com/) are usually used (but not limited) for Node.js and front-end web development, like SASS/LESS compilers or linters. You'll learn more about it as you start learning more about the Node environment.

```bash
$ npm install -g node-sass

# Compiles all SASS files in /scss into /css
$ node-sass scss/ -o css/
```



### Install apps

Speaking of Brew, there's a special Brew utility extension called Cask. You know how when you download macOS apps, you'd open the .dmg file and drag the icon to the Applications folder? Well with Cask, you can install these apps directly through the terminal with just one command, like you would with brew packages!

```bash
# First, install Cask using Brew
$ brew tap caskroom/cask

# Then install some apps using cask
$ brew cask install google-chrome
$ brew cask install spotify
$ brew cask install dropbox
```

To see the list of available casks, check out their [website](https://caskroom.github.io/).



### Efficiently Batch-Delete/Update Files

Want to delete all `.jpg` files?

```
$ rm -rf *.jpg
```

Want to move all PDF files from the Downloads folder to the Desktop?

```
$ mv ~/Downloads/*.pdf ~/Desktop/
```

Want to copy files whose filenames contain the string _document_ to Documents folder?

```
$ cp *document* ~/Documents/
```

You get the point. For everything else, a simple [AskUbuntu](https://askubuntu.com/) or [SuperUser](https://superuser.com/) search will most likely net you an answer.



### Download YouTube videos

Yep! No need to use those clunky unreliable YouTube converter thingy websites.

```bash
# Install youtube-dl via brew
$ brew install youtube-dl

# Download a YouTube video!
$ youtube-dl https://www.youtube.com/watch?v=xxxxxxxxxxx

# Or just extract the audio
$ youtube-dl --extract-audio https://www.youtube.com/watch?v=xxxxxxxxxxx
```

There's a lot of options as well, like choosing the video quality and formats. Check out the [documentation](https://github.com/rg3/youtube-dl/blob/master/README.md#readme) for more.



### Convert Videos

While we're on the topic of videos: `ffmpeg` is a really handy tool for working with videos. Here are a few examples:

Convert a .mov video to mp4:

```
$ ffmpeg -i video.mov output.mp4
```

Extract audio from the video:

```
$ ffmpeg -i video.mp4 -vn audio.mp3
```



### Print silly ASCII art—with rainbow colors!

And finally, we're down to the most important commands!

```bash
$ brew install cowsay
$ brew install fortune
$ gem install lolcat

$ fortune
$ cowsay "Hello world"
$ lolcat -h
```

Or just pipe everything!

<script id="asciicast-303020" src="https://asciinema.org/a/303020.js" async></script>

How can you say no to the power of the terminal with that?!

### Conclusion

_"Woohoo! I'm a command line expert now! What do I do next?"_

Good for you! You might want to:

- learn more about [dotfiles](https://dotfiles.github.io/)
- check out some cool commands and tricks at [commandlinefu.com](http://www.commandlinefu.com/commands/browse)
- try [pimping your terminal with ZSH](http://jilles.me/badassify-your-terminal-and-shell/) which is another kind of shell (the default one is Bash)
- or try [mastering Vim](http://www.openvim.com/)

Good luck!

— Alfonz

&nbsp;
