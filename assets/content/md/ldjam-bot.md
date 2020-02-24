---
layout: post-with-cover
title:  "LDJAM Bot tweets your games"
categories: gamedev ludumdare
date: 2015-9-9 00:00:00 +0800
image: "/images/ldjambot/cover.png"
comments: true
---

A few months back I was itching to try and make some cool stuff with Python for days. One day I had this idea for a Twitter bot that selects a random game from the <a href="http://ludumdare.com/compo">Ludum Dare</a> website and tweets it along with the dev's username and the game's primary screenshot.

I used [BeautifulSoup](http://www.crummy.com/software/BeautifulSoup/bs4/doc/) to select a random game from the Ludum Dare website, pull the HTML and parse it to get the game title, developer username/Twitter handle and the game's primary screenshot. I then tweet all those using [tweepy](http://www.tweepy.org).

# How it works

_Disclaimer: This is probably a really dirty implementation, and I'm open for suggestions. If you have any, leave a comment below!_


1. Select a random page number from [this page](http://ludumdare.com/compo/ludum-dare-33/?action=preview). Say, page 5.
	![](/images/ldjambot/1.png)


1. Select a random game from the page in Step 1 and get the game's entry page URL.
	
	![](/images/ldjambot/2.png)

1. To make sure we don't tweet the same game more than once, the bot checks a .txt file that contains the list of all game URL's that were previously tweeted. If the URL in Step 2 already exists, we don't want to tweet that again, so go back to Step 1. Else, append the URL to this list.
	
	![](/images/ldjambot/3.png)

1. We have now selected the LD game to tweet. So now we get the game title and the dev's username or his Twitter handle. Thankfully, most of this stuff is provided for in the Twitter meta tags so it's easier to fetch them using bs4. The game's first screenshot image is also downloaded using `urllib.request`.

	![](/images/ldjambot/meta.png)

1. The "Twitter username" field when editing your Ludum Dare profile is really vague – a lot of people type in "twitter.com/username", or "http://twitter.com/username" when all you really need is just your plain username and it's automatically prepended with a @. This means I have to clean it up a bit so it properly mentions the developer in the tweet.

		if 'http://twitter.com/' in twitterHandle:
		    twitterUser = twitterHandle.replace("http://twitter.com/", "")
		elif 'https://twitter.com/' in twitterHandle:
		    twitterUser = twitterHandle.replace("https://twitter.com/", "")
		elif 'http://www.twitter.com/' in twitterHandle:
		    twitterUser = twitterHandle.replace("http://www.twitter.com/", "")
		elif 'https://www.twitter.com/' in twitterHandle:
		    twitterUser = twitterHandle.replace("https://www.twitter.com/", "")

1. Prepare the tweet, making sure it fits 140 characters by trimming the title and adding an ellipsis:

		tweet = title + ' by ' + author + ' - ' + url + ' #LDJAM #gamedev #indiedev' 

		if len(tweet) > 140:
		charactersToTrim = len(tweet) - 137
		title = title[:-charactersToTrim] + '...'
		tweet = title + ' by ' + author + ' - ' + url + ' #LDJAM #gamedev #indiedev' 

1. Finally, tweet it! The tweepy library has a method to post a tweet with media.

		tweetStatus = api.update_with_media('img.jpg', tweet)

1. At this point I would simply run the python script every 30 minutes using CRON or a bash script. I also use [Notifier](https://pypi.python.org/pypi/pync) to ping me a native OS X notification so I would know when the bot actually tweets a game.

		Notifier.notify(title + ' by ' + author + ' ' + twitterHandle, contentImage='img.jpg', appIcon='pp.png', title='@LDJAMBot', open='http://twitter.com/ldjambot')

Overall it was a fun little Python experiment that turned into a Twitter account currently sitting at 400 followers!

LDJAM Bot has been running and tweeting Ludum Dare games since LD33. Check out it out in action [here](http://twitter.com/ldjambot)!

— Alfonz
