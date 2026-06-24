# Macondo

My personal website and developer portfolio.

I built this website because I wanted a personal website that actually felt personal.

A lot of portfolios look nice, but after a while they all start feeling the same. Since this website was supposed to represent me, I wanted every feature to exist because I liked it.

Not because it was trendy.

Not because it was professional.

Just because I thought it was cool.

---

## The Idea

The idea was simple.

Build a personal website where everything somehow connects back to me.

I spent quite a bit of time researching portfolio websites, hero sections, layouts, animations, and random ideas I found online. I wanted something that was:

* memorable
* catchy
* colourful
* fun

I don't remember the fourth thing I originally wrote in my journal.

After looking around and taking inspiration from different places, I slowly started building my own version.

This website is basically a collection of things I thought were cool combined into one place.

---

## The Dock

I don't own a MacBook.

I use a very respectable potato laptop.

But I absolutely love the macOS aesthetic.

I use MyDockFinder because I really like how docks work. They do the same job as navigation bars, but somehow feel much more interactive.

Because of that, I decided not to build a traditional navbar.

Instead, I built a dock.

Every dock icon opens a modal inspired by the Preferences window from MyDockFinder. The entire navigation system of the website revolves around this idea.

Unfortunately, CSS had other plans.

The dock modal was one of the most annoying parts of the project because everything wanted to stack vertically. I spent way too much time fighting layouts before finally getting things where they were supposed to be.

I don't even remember the exact bug anymore.

I only remember suffering.

---

## The Avatar Menu

I wanted my social media links to feel a little more fun than a row of icons.

So I hid them behind my avatar.

When you click the avatar, the icons burst out in four directions around it.

Originally I wanted the icons to appear in uneven positions around the avatar.

I failed.

Instead I accidentally built a perfectly symmetrical radial menu.

At some point I decided it looked cool enough and left it alone.

Sometimes bugs become features.

---

## The Arrow

I wanted an arrow pointing toward the avatar.

I originally found a reference on Freepik and wanted something similar.

The problem is that I am not very good at illustrations.

After trying a few different things, I ended up generating an arrow and somehow it looked a lot like something from Excalidraw, which is one of my favourite tools.

So the arrow accidentally ended up matching something I already liked.

I also added the text:

"clik me"

Yes, it is missing a letter.

No, I am not fixing it.

I think it looks better this way.

---

## The Cat

The cat is my favourite feature on the website.

And also the feature that caused me the most pain.

I remember watching a Fireship video where he talked about how developers love flexing on top of other people's work. That idea got permanently stuck in my brain.

So when I started looking for ways to add a cat to my website, I did some research.

I found:

* oneko.js
* cat.js
* catify

oneko.js was lightweight and polished.

cat.js was cute.

Catify was broken.

Naturally, I picked Catify.

Catify was a side project by Yobert and had the most potential, but it also had the most problems.

At first I wanted to redesign the cat entirely.

After thinking about how much work drawing sprites would be, I quickly abandoned that idea.

Instead I started fixing Catify.

Then I kept fixing Catify.

Then I kept fixing Catify.

Then I spent roughly ten hours fixing Catify.

Over the course of the project I probably fixed somewhere between 15 and 30 bugs.

The jumping animation was weird.

The movement logic was weird.

The animation system was weird.

Everything about Catify was painful.

At one point the cat started walking backwards.

I called this phenomenon:

**Moonwalking.**

I spent hours trying to understand why the cat was moonwalking.

I even asked Claude for help.

Claude did not help.

Instead, Claude suggested changes in other parts of the codebase which introduced even more bugs.

Things somehow got worse.

The cat was still moonwalking.

I was mentally exhausted.

Eventually I stopped asking AI and started reading the source code myself.

The bug turned out to be a tiny mistake.

The direction variable was reversed.

`1 = right`

`0 = left`

I had them swapped.

The moonwalking stopped.

Then another bug appeared.

The animation frames were switching way too quickly because `astep++` was being incremented every time the update function ran.

Since update ran constantly, the cat looked absolutely possessed.

After moving the increment so it only happened while the cat was actually walking, everything finally worked.

The cat walked correctly.

The animations behaved correctly.

And I got my sanity back.

The moment I changed the cat's colour to orange, it stopped feeling like Catify's cat and started feeling like my cat.

The cat randomly decides whether it wants to walk around or stand idle using `Math.random()`.

If you click it, it immediately becomes idle and responds with one of its carefully crafted dialogue options:

* meow
* meow meow
* meow meow meow
* purrrrrrrr

There is also a special message that only my friends will understand.

If you know what Space Monkey means, you are probably one of them.

At one point I wanted to use a flexing cat emoji as part of the dialogue.

Unfortunately it was gigantic.

So I scrapped the idea.

After roughly ten hours of debugging, the commit that finally ended the moonwalking saga was:

> dude just fixed the cat

A fitting end to a very long battle.

---

## The Catify Situation

One thing worth mentioning is that the Catify codebase became a little messy while I was working on it.

Part of that came from experimentation.

Part of that came from debugging.

Part of that came from GitHub Desktop doing GitHub Desktop things.

As I kept testing different fixes and approaches, some sections of code ended up duplicated.

Would I like to clean it up someday?

Probably.

Was I more concerned about stopping the cat from moonwalking?

Absolutely.

---

## Fonts, Tooltips and Other Things

I spent a lot of time tweaking little details.

I added tooltips.

I experimented with fonts from Google Fonts.

I changed colours.

I moved things around.

I kept adjusting small pieces until they felt right.

Most people probably won't notice those changes.

I notice them.

And that's enough for me.

---

## Built With

* HTML
* CSS
* JavaScript

No frameworks.

Just me, a text editor, a cat, and several hours of debugging.

---

## Inspirations

A lot of things inspired this project:

* Fireship
* Catify
* MyDockFinder
* Excalidraw
* Freepik
* CodePen
* Google Fonts

This website is basically a collection of things I thought were cool combined into one place.

---

## Writing This README

Believe it or not, writing this README was also painful.

Not Catify painful.

Not moonwalking-cat painful.

But still painful.

I originally thought writing the README would take a few minutes.

Then I realized I had forgotten half the bugs, half the decisions, and half the reasons why things were built the way they were.

At some point I ended up digging through old journal entries, screenshots, commit messages, and memories of me slowly losing my sanity while debugging a cat.

I also used ChatGPT to help me piece together the story of the project because after spending so many hours building it, I had completely forgotten parts of the journey.

Turns out remembering what you built can sometimes be harder than building it.

Especially when a large percentage of the project involved debugging a moonwalking orange cat.

So if this README feels unusually detailed, that's because it was reconstructed from journal entries, screenshots, commit history, and conversations about why I voluntarily spent ten hours fixing Catify.

---

## Final Thoughts

This website isn't trying to be the most professional portfolio on the internet.

It's supposed to feel like me.

It's a collection of experiments, ideas, inspirations, bugs, mistakes, things I borrowed, things I modified, and things I spent way too long fixing.

The dock exists because I like docks.

The arrow exists because I thought it looked cool.

The radial menu exists because normal social links are boring.

The cat exists because I watched a Fireship video and accidentally spent ten hours becoming emotionally attached to a broken open-source cat.

If someone visits this website and leaves remembering only two things, I hope they remember:

1. My username.
2. The orange cat.

And if they somehow remember the moonwalking bug too, then this README has done its job.

From somebodyouknow!
