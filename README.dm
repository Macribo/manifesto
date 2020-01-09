I been writing code in the bundle.js like an asshole.
A bundler takes all the files you tell it to, and bundles them together when you are ready to push your code. This lets you write more complex code which has dependencies and stuff. But you never write directly into the bundle, because it's a whole massive file of all your codebase, Better by far to work in small discreete specific modules and then run the bundler and let it pull all the separate components into a single long file which anyway if you start coding in it directly will just be overwritten next time your run the bundler.

But I started the project about a year ago and forgot a bunch of all the bundler stuff, what files to include - etc. And I didn't leave any documentation to help remember the steps. I Chose the hacky solution of just writing things direct to bundle.js. Now that I've got some logic to implement, I gotta bother extracting the bits I need from the bundle and transfer line (test) by line (test again) to the file that handles the thing I want to do - IE route the counting/fibonacci/multiples of 8 & fairy-ring fairy tree chat stuff into a file called dm.js //short for dungeonMaster.js

Also TODO re-implement a little script that sets full-screen on mobile. App will nicer if browser window is (f11) fullscreen on mobile - but there may be a good deal of re-styling to get it to look good. Worth it, but lets get a bit more of the app flow going first.

There's that stuff - and then the last big chunk before launch (Hopefully 'Seachtain na Gaeilge' March 2020) which is letting users buy persistant storage for 2 euro. So anyone can play join interact for free - but you gotta pay to be able to save your character and skip these early boring tutorial style lessons. That's back-end stuff with heroku and mongoDB.


