speed = 300;

eventful.event("mouse", {
	moveX: 10,
	moveY: 10
});

eventful.event("mouse", {
	moveX: 110,
	moveY: 400
});

eventful.event("mouse", {
	moveTo: '.button',
	click: true
});

eventful.go();