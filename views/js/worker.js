//Not used in this iteration. 
//Fix: Calculates phase for updatePosition function in main.js; reduces js bottleneck. 
onmessage = function (e) {
	var docScroll = e.data;
	var slidingPizzaNumber = window.innerHeight / 30;
	var phaseCalc = [];
	for (var i = 0; i < slidingPizzaNumber; i++) {
		phaseCalc = Math.sin((docScroll / 1250) + (i % 5));
	}
	postMessage(phaseCalc);
};