# uber-eats-clone
A clone of [Uber Eats](https://www.ubereats.com/?slr=1) built with React and pure CSS.

Made the site responsive to smaller screen sizes (which the Uber Eats team didn't for some reason).

Recreated the slide system to be more dynamic. Even though I ran into some issues with the [Element.scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) with the `smooth behavior` in Chromium (seems like a bug), I managed to achieve almost the same result utilizing `scroll-behavior` from CSS.

I made this project so that I could train better my CSS, so I chose to utilize the CSS alternatives to some things that would be possible to do but utilizing JavaScript.

Although not everything was perfect, I classify this project as success, I learned a lot of things of CSS (it's quite powerful tbh). There are still some things left to do like cleaning the code, extracting hooks and make so that the listing of items be adjustable to changes in viewport (it already varies when viewing of different viewports, but you need to reload the site for these changes to take effect).
