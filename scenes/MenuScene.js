import kaboom from "kaboom"
import { GameScene } from './GameScene';

scene('game-scene', GameScene)

scene("menu-scene", () => {
  
  add([
    sprite("menu-bg"),
    scale(0.5)
  ])

  add([
    sprite("border"),
    scale(0.2)
  ])

	add([
		text("Adventure game for Bibe <3"),
		pos(50, 30),
		scale(0.20),
	]);

  add([
		text("Creator: Mark(Bibe)"),
		pos(80, 420),
		scale(0.20),
	]);

  function addButton(txt, p, f) {
    const startBtn = add([
      text(txt),
      pos(p),
      area({ cursor: "pointer", }),
      scale(0.5),
      origin("center"),
    ]);
  
    startBtn.onClick(f)
  
    startBtn.onUpdate(() => {
      if (startBtn.isHovering()) {
        const t = time() * 10
        startBtn.color = rgb(
          wave(0, 255, t),
          wave(0, 255, t + 2),
          wave(0, 255, t + 4),
        )
        startBtn.scale = vec2(1.1)
      } else {
        startBtn.scale = vec2(1)
        startBtn.color = rgb()
      }
    })
  }

  addButton("Start", vec2(170, 150), () => go('game-scene'))

});