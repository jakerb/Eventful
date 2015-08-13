/*
 * Eventful - Simulate mouse events in JS
 */

var pointer = $('.pointer');
var queue = [],
	moveX,
	moveY,
	moveTo,
	keyPress,
	click,
	speed = 300,
	totalSpeed = 0;

var eventful = {

	event:function(input, data) {

		totalSpeed = totalSpeed + speed;

		if(input == "mouse") {
			moveX = data['moveX'] != false ? data['moveX'] : false; if(moveX) { queue.push({ X: moveX }); moveX = 0; }
			moveY = data['moveY'] != false ? data['moveY'] : false; if(moveY) { queue.push({ Y: moveY }); moveY = 0; }
			moveTo = data['moveTo'] != false ? data['moveTo'] : false; if(moveTo) { queue.push({ To: moveTo }); }
			click = data['click'] != false ? data['click'] : false; if(click) { queue.push({ click: click }); click = 0; }
		} 

		if(input == "keyboard") {
			//@TODO
		}
	},

	go:function() {
		for (var i = 0; i <= queue.length - 1; i++) {
			if(queue[i]['click']) {
				pointer.animate({opacity: 1 }, totalSpeed, function() { $(moveTo).trigger('click'); })
			} 


			if(queue[i]['X']) {
				pointer.animate({Y: queue[i]['X'] }, speed);
			}
			if(queue[i]['Y']) {
				pointer.animate({left: queue[i]['Y'] }, speed);
			}
			if(queue[i]['To']) {
				if($(queue[i]['To'])) {
					var to = $(queue[i]['To']);
					var toY = to.position().top - pointer.position().top;
					var toX = to.position().left - pointer.position().left;
					pointer.animate({top: toY, left: toX }, speed);

				}
			}
		};
	}


	
};

