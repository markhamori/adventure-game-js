import k from "../kaboom";
import { npcText, healthText, tableText, wallText, gemText } from "../utils/textFunctions";
import { maps, mapConfig, potions, potionConfig, floors, floorsConfig, environment, environmentConfig, treasures, treasuresConfig } from "../map/map";
import { updateDialog } from "../utils/dialogFunction";
import { HappyEndScene } from "./FinalScene";

export function GameScene() {
  layers(['bg', 'game', 'table', 'ui'], 'game')

  // debug.inspect = true

  //  DAMAGES, HEALS
  const WALL_DAMAGE = -5;
  const SPIKE = -5;
  const POTION_HEAL = 15;

  // ADD FLOORS - TILES
  addLevel(floors[0], floorsConfig)

  // ADD POTION MAP
  // addLevel(potions[0], potionConfig)

  // SELECTED MAP
  addLevel(maps[0], mapConfig)
  
  // ADD BACKGROUND
  add([sprite('bg'), layer('bg')])
 

  // ADD PLAYER
  const faune = add([
    sprite('faune'),
    pos(width() * 0.5, height() * 0.5),
    origin('center'),
    solid(),
    body({weight: 0}),
    area({width: 20, height: 20}),
    "faune",
    {
      health: 100,
      speed: 2,
      gems: 10,
      score: 0
    }
  ])

  // ADD TREASURE MAP
  addLevel(treasures[0], treasuresConfig)

  // ADD ENVIRONMENT MAP
  addLevel(environment[0], environmentConfig)

  // const sword = add([
  //   pos(),
  //   sprite("sword"),
  //   origin("bot"),
  //   rotate(0),
  //   follow(faune, vec2(-4, 5)),
  //   spin(),
  // ])

  scene('happy-end-scene', HappyEndScene)

  faune.onUpdate(() => {
    if(faune.gems === 10 ) {
      const endText = add([
        text('Wow. Congratz! You did it!!!', {size: 15, font: 'sink'}),
        origin('center'),
      ])
      wait(2, () => {
        go("happy-end-scene", 1000)
      })
    }
  })

  const kaboom = add([
    pos(width() * 0.5, height() * 0.5),
    sprite('kaboom'),
    area({width: 20, height: 20}),
    solid(),
    scale(0.5),
    'kaboom'
  ])

  onCollide("faune", "table", (faune, table) => {
    const dialogs = [
      [ "table-4", "Hi Bibe!" ],
      [ "table-4", "You have one task in this" ],
      [ "table-4", "cute little game." ],
      [ "table-4", "Collect all of the missing gemstones..." ],
      [ "table-4", "So it will bring light into our lives!" ],
    ]
    let curDialog = 0

    // Text bubble
    const textbox = add([
      rect(width() - 300, 100, { radius: 16 }),
      origin("center"),
      pos(center().x + 80, height() - 50),
      outline(2),
    ])

    // Text
    const txt = add([
      text("Hi Bibe!", { size: 16, width: width() - 300 }),
      pos(textbox.pos),
      origin("center")
    ])

    const txt2 = add([
      text('Press space to continue the dialog...', {size: 10, width: width() - 300}),
      pos(center().x + 80, height() + 20),
      origin("center")
    ])

    // Update the on screen sprite & text
    function updateDialog() {
      const [ char, dialog ] = dialogs[curDialog]
      txt.text = dialog
      txt2
    }
    
    onKeyPress("space", () => {
      if (curDialog === 4) {
        destroy(textbox)
        destroy(txt)
        destroy(txt2)
      }
      curDialog = (curDialog + 1) % dialogs.length
      updateDialog()
    })
  });

  onCollide("faune", "kaboom", (faune, kaboom) => {
    destroy(kaboom)
    faune.speed = 5
  });

  faune.onUpdate(() => {
    camPos(faune.pos)
  })

  onCollide("faune", "wall", (faune, wall) => {
    // run_action = false;
    // destroy(faune)
    updatePlayerHealth(WALL_DAMAGE)
  });

  onCollide("faune", "tree", (faune, tree) => {
    tree.opacity = 0.5
    wait(3, () => {
      tree.opacity = 1
    })
  });

  onCollide("faune", "wall", (faune, wall) => {
    // run_action = false;
    wallText(faune)
  });

  onCollide("faune", "teddy", (faune, teddy) => {
    // run_action = false;
    npcText('OMG, SO CUTE! ♥', "125,55,255" , teddy)
    scoreLabel.value += 10
    scoreLabel.text = `SCORE: ${scoreLabel.value}`
  });

  onCollide('faune', 'gem', (faune, gem) => {
    updateGemQty(1),
    gemLabel.value += 1,
    gemLabel.text = `GEMS: ${gemLabel.value}`,
    addScore(50),
    scoreLabel.value += 50,
    scoreLabel.text = `SCORE: ${scoreLabel.value}`,
    gem.scale = 0.75,
    wait(2, () => {
      gem.scale = 1,
      destroy(gem)
    })
  })

  // onCollide('faune', 'potion', (faune, potion) => {
  //   updatePlayerHealth(POTION_HEAL)
  //   destroy(potion)
  //   healthText(POTION_HEAL, "127,255,0")
  // })

  // onUpdate('faune', (f) => {
  //   add([
  //     text(faune.health, { size: 8, font: "sink"}),
  //     pos(width() - 350, height() - 35),
  //     origin("center"),
  //     layer("ui"),
  //     fixed()
  //   ]);
  // })
  
  // ADD UI
  const scoreLabel = add([
    text('SCORE: 0', { size: 5, font: "sink"}),
    pos(width() - 200, height() - 40),
    layer('ui'),
    {
      value: faune.score,
    },
    scale(2),
    fixed()
  ]) 

  add([
    text("HEALTH", { size: 8, font: "sink"}),
    pos(width() - 450, height() - 35),
    origin("center"),
    layer("ui"),
    fixed()
  ]);

  const healthHolder = add ([
    rect(52,12),
    pos(width() - 395, height() - 35),
    color(100,100,100),
    origin("center"),
    layer("ui"),
    fixed()
  ]);

  const healthHolderInside = add ([
      rect(50,10),
      pos(width() - 395, height() - 35),
      color(0,0,0),
      origin("center"),
      layer("ui"),
      fixed()
  ]);

  const healthBar = add ([
      rect(50,10),
      pos(width() - 420, height() - 40),
      color(0,255,0),
      layer("ui"),
      fixed()
  ]);

  const gemLabel = add([
    text('GEMS: 0', { size: 5, font: "sink"}),
    pos(width() - 300, height() - 40),
    layer('ui'),
    {
      value: faune.gems,
    },
    scale(2),
    fixed()
  ]) 

  function updateGemQty(gem, score){
    faune.gems += gem;
  }

  function addScore (playerScore) {
    faune.score += playerScore
  }

  function updatePlayerHealth(healthPoints){
    faune.health += healthPoints;
    faune.health = Math.max(faune.health, 0);
    faune.health = Math.min(faune.health, 100);

    healthBar.width = 50 * (faune.health / 100);

    if (faune.health < 20) healthBar.color = rgb(255,0,0);
    else if (faune.health < 50) healthBar.color = rgb(255,127,0);
    else healthBar.color = rgb(0,255,0);

    // if (faune.health <=0){
    //     destroy(faune);
    //     for (let i = 0; i < 500; i++) {
    //         wait(0.01 *i, ()=>{
    //             makeExplosion(vec2(rand(0,MAP_WIDTH,), rand(0, MAP_HEIGHT)), 5, 10, 10);
    //             play("explosion", {
    //                 detune: rand(-1200, 1200)
    //             });
    //         });
    //     }
    //     wait(2, ()=>{
    //         go("endGame");
    //     });
    // }
  }

  // ******************************* CREATE BULLET
  // const BULLET_SPEED = 500

  // function spawnBullet(p) {
	// 	add([
	// 		rect(12, 48),
	// 		area(),
	// 		pos(p),
	// 		origin("center"),
	// 		color(127, 127, 255),
	// 		outline(4),
	// 		move(RIGHT, BULLET_SPEED),
	// 		cleanup(),
	// 		// strings here means a tag
	// 		"bullet",
	// 	])
	// }

  onKeyPress("space", () => {
		// spawnBullet(faune.pos.sub(16, 0))
		// spawnBullet(faune.pos.add(16, 0))
    // sword.spin()
    let interacted = false
    every("chest", (c) => {
      if (faune.isTouching(c)) {
        if (c.opened) {
          c.play("close")
          c.opened = false
        } else {
          c.play("open")
          c.opened = true
        }
        interacted = true
      }
    })
	})

  faune.play('idle-down')

  faune.action(() => {
    const left = isKeyDown('left')
    const right = isKeyDown('right')
    const up = isKeyDown('up')
    const down = isKeyDown('down')

    const speed = faune.speed
    const curAnim = faune.curAnim()

    if(left) 
    {
      if (curAnim !== 'walk-side') {
        faune.play('walk-side')
      }
  
      faune.flipX(true)

      faune.pos.x -= speed
    }
    else if (up)
    {
      if (curAnim !== 'walk-up') {
        faune.play('walk-up')
      }

      faune.pos.y -= speed
    }
    else if (down)
    {
      if (curAnim !== 'walk-down') {
        faune.play('walk-down')
      }

      faune.pos.y += speed
    }
    else if (right)
    {
      if (curAnim !== 'walk-side') {
        faune.play('walk-side')
      }
  
      faune.flipX(false)

      faune.pos.x += speed
    }
    else
    {
      const direction = curAnim.split('-').pop() ?? 'down'
      faune.play(`idle-${direction}`)
    }
  }) 

  createArrow('arrow-up', 'up', width() - 80, height() - 85)
  createArrow('arrow-down', 'down', width() - 80, height() - 55)
  createArrow('arrow-left', 'left', width() - 110, height() - 55)
  createArrow('arrow-right', 'right', width() - 50, height() - 55)
}

function createArrow(spriteName, key, x, y) {
  const arrow = add([
    pos(x,y),
    sprite(spriteName),
    fixed(),
    opacity(1),
    scale(0.25)
  ])

  arrow.action(() => {
    arrow.opacity = keyIsDown(key) ? 1 : 0.5
  })
}

// function spin() {
// 	let spinning = false
// 	return {
// 		id: "spin",
// 		update() {
// 			if (spinning) {
// 				this.angle += 1200 * dt()
// 				if (this.angle >= 360) {
// 					this.angle = 0
// 					spinning = false
// 				}
// 			}
// 		},
// 		spin() {
// 			spinning = true
// 		},
// 	}
// }