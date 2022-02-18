import kaboom from "kaboom"
import { GameScene } from './GameScene';

scene('game-scene', GameScene)

scene("menu-scene", () => {

  add([
    rect(width() - 120,height()),
    pos(60,0),
    color(100,25,35)
  ])

  add([
    rect(width() - 120,height() - 350),
    pos(60,60),
    color(255,255,255),
    opacity(0.25)
  ])
  

  add([
    sprite("border"),
    pos(65,3),
    scale(0.2)
  ])

	add([
		text("ADVENTURE GAME FOR BIBE ♥", {size: 12, font: 'sink'}),
		pos(120, 80),
		scale(1),
	]);

  add([
		text("Creator: Mark(Bibe)", {size: 12, font: 'sink'}),
		pos(150, 380),
		scale(1),
	]);

  function addButton(txt, p, f) {
    const startBtn = add([
      text(txt, {size: 16, font: 'sink'}),
      pos(p),
      area({ cursor: "pointer", }),
      scale(0.5),
      origin("center"),
    ]);
  
    startBtn.onClick(f)
  
    startBtn.onUpdate(() => {
      if (startBtn.isHovering()) {
        const t = time() * 1
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

  addButton("START", vec2(240, 150), () => {
    go('game-scene')
  })

});