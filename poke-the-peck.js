var pecks = 0;

var peckDelay = 6900;

updateCount();
generatePeck();

function generatePeck() {
	var newPeck = document.createElement("div");
	$(newPeck).addClass("peck");
	var topRand = Math.floor(Math.random() * ($("body").height() - 100));
	var leftRand = Math.floor(Math.random() * ($("body").width() - 100));
	$(newPeck).css({
		display:"none",
		position:"absolute",
		top:topRand,
		left:leftRand,

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
		$(this).remove();
		$("body").css({
			background: "red",
			transition: "background 2s"
		});
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
