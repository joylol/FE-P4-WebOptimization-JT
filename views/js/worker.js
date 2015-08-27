//Fix: Calculates phase for updatePosition function in main.js; reduces js bottleneck. 
onmessage = function (e) {
	var docScroll = e.data;
	var phaseCalc;
	for (var i = 0; i < 30; i++) {
		phaseCalc = Math.sin((docScroll / 1250) + (i % 5));
	}
	postMessage(phaseCalc);
};