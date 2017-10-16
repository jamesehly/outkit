# Outkit

Outkit is a javascript library for creating UI components that communicate. You
can use the growing library of components or easily create your own custom UI
components. _It's as powerful as your imagination._


## Quick Start

To use Outkit from the precompiled library, simply include this script tag in
your document.

```html
<script src='https://unpkg.com/outkit@0.2.6/dist/outkit.min.js' type='text/javscript'></script>
```

Then, in your own script, instantiate outkit objects using the global outkit
variable.

```javascript
var myLayout = new outkit.HorizontalLayout("#my-layout-element");
```

## Why was Outkit created?
Outkit was created to aid UI developers in creating their own user experiences.
It strikes me as odd that as front-end developers we've often been tasked with
using premade toolkits because they are readily available and easy to use. This
sometimes leads to situations where we're sacrificing usability in favor of ease
of development. Many developers, myself included, tend to shy away from making
our own components because it's too difficult or too time consuming.

Or, we've developed components in particular frameworks that cannot be easily
moved to other projects. And obviously, creativity suffers if websites are made
with the same tools, especially when those tools have to do with how a website
looks and functions . I envisioned a dependency free toolkit that allowed,
components to be automatically animated when they have changes in state, a way
for components to be composed in relationships, and a way for them to relay
infomation to one another so that the various parts could function as a whole.
Outkit was born out of these ideas.