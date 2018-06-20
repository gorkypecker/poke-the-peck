var pecks = 0;
var skinColors = ["#fae7do", "#dfc183", "#aa724b", "#ffcc99", "#feb186", "#c8aca3", "#e8cda8", "#7b4b2a"];
var peckDelay = 6900;

updateCount();
generatePeck();

function generatePeck() {
	var newPeck = document.createElement("div");
	$(newPeck).addClass("peck");
	$(newPeck).append("<div class='peck-c'></div><div class='peck-b-l'></div><div class='peck-b-r'></div>");
	var topRand = Math.floor(Math.random() * ($("body").height() - 50)));
	var leftRand = Math.floor(Math.random() * ($("body").width() - 50)));
	$(newPeck).css({
		display:"none",
		position:"absolute",
		top:topRand,
		left:leftRand,
		transform:"rotate(" + Math.floor(Math.random() * 360) + "deg)"
	});

	var skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
	$(newPeck).children().css({
		background: skinColor
	});


	$("body").prepend(newPeck);
	$(newPeck).fadeIn(420);
	peckFade(newPeck);
}

$("body").on("click", ".peck", function() {
	$(this).stop();
	$(this).off();
	$(this).remove();
	pecks++;
	updateCount();
	generatePeck();
	
});

function peckFade(p) {
	$(p).fadeOut(peckDelay, function() { 
		$(this).off();
		$(this).remove();
		$("body").css({
			background: "red",
			transition: "background 2s"
		});
		$(".peck").remove();
	});
	if (peckDelay > 690) {
		peckDelay -= 69;
	}
}

function updateCount() {
	$("#peck-count").text(pecks);
	if (pecks === 69) {
		$("body").css({
			background: "#222",
			transition: "background 2s, color 2s",
			color: "white"
		});
	}
	else if (pecks === 420) {
		$("body").css({
			background: "#586f56",
			transition: "background 2s, color 2s",
			color: "white"
		});
	}
}
