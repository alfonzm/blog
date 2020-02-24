---
layout: post-with-cover
title:  "Designing Levels for Necromorph"
categories: gamedev ludumdare
date: 2015-9-15 00:00:00 +0800
image: "images/necromorph/cover.png"
comments: true
---

Last week I <a href="#">made a post about</a> our latest Ludum Dare game, Necromorph. This time I'd like to talk more about our thought process while designing the levels for our short game.

I was focusing on making the level design both challenging and satisfying in a not-frustrating kind of way. More importantly, I wanted it to be self-teaching. Although the game works like a usual platformer game where you can jump and kill enemies, the game has a few unusual mechanics which I don't want to explicitly explain to the player. I wanted the level design itself to teach the player, and the player to learn by doing. Also, the game was too short anyway that pretty much the whole game is a tutorial, kind of like Portal.

Anyway, without further ado let's hop right on to the first level!

# Level I: The Cavern

_The Cavern_ is the intro "tutorial" level where we teach the player the basic mechanics of the game. The Arrow Keys + Z controls are slapped right into your face and you're kind of inside a pit where you have no other choice but to jump over the spikes.

![](/images/necromorph-levels/lv1-1.gif)

<p class="img-caption">Pretty basic platformer stuff.</p>

The only way to go through the first jump to the left and the second jump to the right is by _holding_ the jump button. If the player only taps the jump button, he will most likely not reach the platform. This teaches the player that the game has variable jump – you can make short jumps by quickly tapping Z, or bigger ones by holding it down much longer.

Just to make sure that the player gets this, we then give him a much longer jump over a strip of spikes. The only way to land on the other side successfully is to hold the jump button all the way through – the maximum distance a jump can reach.

![](/images/necromorph-levels/lv1-2.gif)
<p class="img-caption">Hold that jump button down or you'll end up like this!</p>

The next section introduces a new platform type – wooden platforms. The only path is by going through the wooden platforms in which the player learns you can go up and down through them by pressing the down arrow. Kids' stuff.

Finally you arrive at the first exit door with an up arrow above it. So you stand in front of it and press, well, the up arrow and level 1 is complete.

<!-- ![](/images/necromorph-levels/lv1-3.gif) -->

# Level II: The Chasm

On to the next level. You are now introduced to the first enemy, the melee knight. The knight is idle and harmless with a big-ass X button above him, teaching the player the attack mechanic. So now you attack the knight with two strikes, and BOOM. You transform into the knight.

![](/images/necromorph-levels/lv2-1.gif)

Next, I wanted to introduce another enemy type right away – the archer. How I did this was I created two pathways for the player: a) the platform on the top with a block that shields you from his shots, or b) the small ledge and platform below, out of the archer's reach.

_![](/images/necromorph-levels/lv2-2.png)_

Either way, you are safe and most likely won't get killed by the arrows. This way, you are given time to breathe and study the archer's behavior in a not-frustrating and not-under-pressure way. You might learn that 1) the archer only shoots when you are a certain distance from him, and 2) there's a short window between his attacks.

![](/images/necromorph-levels/lv2-3.gif)

With the help of your knowledge about wooden platforms in Level 1, you wait for the archer to fire once more then you go in for the kill. _Bam_, now you're the archer. You walk a bit and realize that archers are more agile and walk faster. You then see two more enemies on the right. You are kind of given the option to choose which one to transform into by killing it second.

The rest of the level is then pretty straightforward until you get to the last enemy blocking the wooden platform, teaching you that bows can shoot upwards:

![](/images/necromorph-levels/lv2-5.png)

# Level III: The Hollow

The first section of The Hollow is pretty interesting: you see an archer on the left, and one below guarded by a knight. Instinctively, as shown above, you might take down the first archer on the left, kill the knight with two shots, then walk towards the second archer:

![](/images/necromorph-levels/lv3-1.gif)

However, there is a slightly better approach: take down the archer behind the knight first by jumping and shooting, _then_ kill the meat shield knight. This is one section of the game where there's a little strategy or puzzle involved – sometimes you might want to plan out the order of your attacks.

![](/images/necromorph-levels/lv3-2.gif)

All that happens while a little bat-looking guy is flapping his wings over some spikes. This is the 3rd enemy type and its ability is a flappy-bird like control where you hover up a bit when the jump button is pressed. I explicitly show this to the player by placing the bat above the spikes while he is constantly hovering.

_To be continued..._

— Alfonz

<!-- To utilize the new flying mechanic, I made the next  -->

[Play Necromorph on itch.io >>](http://supernaught.itch.io/necromorph)
<br>
[Ludum Dare Entry Page >>](http://ludumdare.com/compo/ludum-dare-33/?action=preview&uid=25961)
