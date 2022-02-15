import kaboom from "kaboom";

loadSprite("border", "/border.png");

kaboom({
	width: 480,
	height: 360,
	scale: 2,
});

scene("menu", () => {

	add([
		text("Adventure game for Bibe <3"),
		pos(240, 80),
		scale(3),
	]);

	add([
		rect(160, 20),
		pos(240, 180),
		"button",
		{
			clickAction: () => go('game'),
		},
	]);

	add([
		text("Play game"),
		pos(240, 180),
		color(0, 0, 0)
	]);

	add([
		rect(160, 20),
		pos(240, 210),
		"button",
		{
			clickAction: () => window.open('https://kaboomjs.com/', '_blank'),
		},
	]);

	add([
		text("Learn Kaboom.js"),
		pos(240, 210),
		color(0, 0, 0)
	]);

	action("button", b => {

		if (b.isHovered()) {
			b.use(color(0.7, 0.7, 0.7));
		} else {
			b.use(color(1, 1, 1));
		}

		if (b.isClicked()) {
			b.clickAction();
		}

	});

});