# Eventful
A simple mouse simulation tool for JS.

This was an experiment to simulate mouse functionality within a page; this tool is currently very limited due to not
having enough time to add extra functionality, but you get the idea.

[View demo on codepen](http://codepen.io/jakebown/pen/eNoEjx)

# Events 
You can move the mouse in both X and Y direction by adding it to the queue using the following function

<pre>
eventful.event("mouse", {
	moveX: 10,
	moveY: 10
});
</pre>

This will move the mouse left 10px and down 10px one after the other, you can also move the mouse to an element on the page
by using the <code>moveTo</code> property:

<pre>
eventful.event("mouse", {
	moveTo: '.element',
	click: true
});
</pre>

using the <code>click</code> property, you can click the element that you have moved to, this can be used on links and buttons within the DOM.

You can also set the <code>speed</code> of how fast the simulation plays through in ms, to change this, simply update the speed propery:

<pre>
speed = 300;
</pre>

