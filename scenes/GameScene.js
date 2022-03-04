import k from "../kaboom";
import { npcText, healthText, tableText, wallText, gemText } from "../utils/textFunctions";
import { maps, mapConfig, potions, potionConfig, floors, floorsConfig, environment, environmentConfig, treasures, treasuresConfig, house, houseConfig } from "../map/map";
import { HappyEndScene } from "./FinalScene";

export function GameScene() {
  layers(['bg', 'game', 'table', 'ui'], 'game')

  // Debugger - check collide
  // debug.inspect = true

  // INIT VARS
  let curDialog = 0

  // ADD FLOORS - TILES
  addLevel(floors[0], floorsConfig)

  // SELECT CURRENT MAP
  addLevel(maps[0], mapConfig)
  
  // ADD BACKGROUND
  add([sprite('bg'), origin('center'), scale(0.5), layer('bg')])
 
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
      gems: 0,
      score: 0
    }
  ])

  // ADD TREASURE MAP
  addLevel(treasures[0], treasuresConfig)

  // ADD HOUSES
  addLevel(house[0], houseConfig)

  // ADD ENVIRONMENT MAP
  addLevel(environment[0], environmentConfig)
  
  // ADD FINAL SCENE
  scene('happy-end-scene', HappyEndScene)

  // WHEN PLAYER REACH THE MAX GEMS - GO TO END SCENE
  faune.onUpdate(() => {
    if(faune.gems === 10 ) {
        go("happy-end-scene", 1000)
    }
  })

  // CAM POSITION
  faune.onUpdate(() => {
    camPos(faune.pos)
  })

  // TEST KABOOM - IT GIVES SPEED
  // const kaboom = add([
  //   pos(width() * 0.5, height() * 0.5),
  //   sprite('kaboom'),
  //   area({width: 20, height: 20}),
  //   solid(),
  //   scale(0.5),
  //   'kaboom'
  // ])

  // COLLIDE - FAUNE - TABLE
  onCollide("faune", "table", (faune, table) => {
    const dialogs = [
      [ "table-4", "Szia Bibe!" ],
      [ "table-4", "Egyetlen feladatod van" ],
      [ "table-4", "ebben a szimpla rpg game-ben" ],
      [ "table-4", "Keresd meg mind a 10 db dragakovet..." ],
      [ "table-4", "1337" ],
    ]

    // TABLE TEXT INTERACTION
    const textbox = add([
      rect(width() - 300, 100, { radius: 16 }),
      origin("center"),
      pos(center().x + 80, height() - 50),
      outline(2),
    ])

    // TABLE TEXT INTERACTION
    const txt = add([
      text("Szia Bibe!", { size: 16, width: width() - 300 }),
      pos(textbox.pos),
      origin("center")
    ])

    // TABLE TEXT INTERACTION
    const txt2 = add([
      text('Space-el tudsz tova`bb le`pni...', {size: 10, width: width() - 300}),
      pos(center().x + 80, height() + 20),
      origin("center")
    ])
    
    // TABLE TEXT INTERACTION
    onKeyPress("space", () => {
      if (curDialog === 4) {
        destroy(textbox)
        destroy(txt)
        destroy(txt2)
      }
      curDialog = (curDialog + 1) % dialogs.length
      updateDialog()
    })

    // TABLE TEXT FUNCTION
    function updateDialog() {
      const [ char, dialog ] = dialogs[curDialog]
      txt.text = dialog
      txt2
    }
  });

  // COLLIDE - FAUNE - TEST KABOOM
  onCollide("faune", "kaboom", (faune, kaboom) => {
    destroy(kaboom)
    faune.speed = 5
  });

  // COLLIDE - FAUNE - HOUSE 
  onCollide("faune", "house", (faune, house) => {
    house.opacity = 0.5
    wait(3, () => {
      house.opacity = 1
    })
  });

  // COLLIDE - FAUNE - TREE 
  onCollide("faune", "tree", (faune, tree) => {
    tree.opacity = 0.5
    wait(3, () => {
      tree.opacity = 1
    })
  });

  // COLLIDE - FAUNE - TEDDY 
  onCollide("faune", "teddy", (faune, teddy) => {
    npcText('DE CUKIII! ♥', "125,55,255" , faune)
    scoreLabel.value += 10
    scoreLabel.text = `SCORE: ${scoreLabel.value}`
  });

  // COLLIDE - FAUNE - GEMS
  onCollide('faune', 'gem', (faune, gem) => {
    const gemText = add([
      text('+1', {size: 10, font: 'sink'}),
      pos(gem.pos),
    ])
    updateGemQty(1),
    gemLabel.value += 1,
    gemLabel.text = `GEMS: ${gemLabel.value}`,
    addScore(50),
    scoreLabel.value += 50,
    scoreLabel.text = `SCORE: ${scoreLabel.value}`,
    gem.scale = 0.75,
    destroy(gem)
    wait(4, () => {
      destroy(gemText)
    })
  })
  
  // USER INTERFACE LABELS
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

  // UI FUNCTIONS
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
  }

  // CHEST INTERACTION
  onKeyPress("space", () => {
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

  // FAUNE ACTIONS
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

// KEYBOARD ARROW ACTIONS
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