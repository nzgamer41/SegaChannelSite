SEGA CHANNEL
======

This is **NOT** an emulator or related at all with the real Sega Channel cartridge.

## Setup:
Since the site is entirely made in plain HTML5, CSS and JS, there is no need necessarily for any sort of special software package such as Apache2 or PHP or MySQL or whatever.
Honestly, you can just launch index.html from the folder and it will appear.

## Issues:
At the moment, I am encountering issues with Google Chrome not liking the autoplay functions inside the HTML, and I could see it causing more issues in future. In order to combat this I need to implement something that gets past Google's requirement of an interaction before DOM elements will autoplay, something like a click to enter frame MIGHT be doable, not sure yet.

Firefox doesn't encounter this issue, but one could assume this blocking of autoplay elements feature will eventually end up in Firefox.

Right now I use a browser identifier to find out whether it's chrome, then slightly modify different things so the page will run nicely.
