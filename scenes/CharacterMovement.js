// import type { Key } from 'kaboom'
import k from "../kaboom";
import { maps, mapConfig } from '../maps';
import { npcText, healthText } from "../textFunctions";

const {
  pos,
  sprite,
  origin,
  area,
  solid,
  keyIsDown,
  scale,
  width,
  height
}  = k

export function CharacterMovement() {

  //  DAMAGES, HEALS
  const WALL_DAMAGE = -5;
  const SPIKE = -5;
  const APPLE_HEAL = 15;
  
  // ADD BACKGROUND
  add([sprite('bg'), layer('bg')])

  // SELECTED MAP
  addLevel(maps[0], mapConfig)

  add([
    pos(192, 64),
    sprite('down-stairs'),
    area(),
    'down-stairs'
  ])

  const faune = add([
    pos(width() * 0.5, height() * 0.5),
    sprite('faune'),
    origin('center'),
    area({width: 32, height: 32}),
    "faune",
    {
      health: 100,
      speed: 120,
      score: 0
    }
  ])

  
  const scoreLabel = add([
    text('0', { size: 6, font: "sink"}),
    // pos(365,275),
    pos(width() - 150, height() - 40),
    layer('ui'),
    {
      value: faune.score
    },
    scale(2),
    fixed()
  ]) 

  faune.onUpdate(() => {
    camPos(faune.pos)
  })

  onCollide("faune", "wall", (faune, wall) => {
    // run_action = false;
    // destroy(faune)
    updatePlayerHealth(WALL_DAMAGE)
  });

  function wallText(f) {
    const obj = add([
      text('WALL', { size: 6, font: "sink"}),
      pos(f.pos)
    ])
    wait(1, () => {
      destroy(obj)
    })
  }

  onCollide("faune", "wall", (faune, wall) => {
    // run_action = false;
    wallText(faune)
  });


  onCollide("faune", "teddy", (faune, teddy) => {
    // run_action = false;
    npcText('OMG, SO CUTE! ♥', "125,55,255" , teddy)
    scoreLabel.value += 10
    scoreLabel.text = scoreLabel.value
  });

  onCollide('faune', 'down-stairs', (faune, downStairs) => {
    updatePlayerHealth(APPLE_HEAL)
    healthText(APPLE_HEAL, "127,255,0")
  })

  onUpdate('faune', (f) => {
    add([
      text(faune.health, { size: 8, font: "sink"}),
      pos(width() - 350, height() - 35),
      origin("center"),
      layer("ui"),
      fixed()
    ]);
  })
  

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

  function updatePlayerHealth(healthPoints){
    faune.health += healthPoints;
    faune.health = Math.max(faune.health, 0);
    faune.health = Math.min(faune.health, 100);

    healthBar.width = 50 * (faune.health / 100);

    if (faune.health < 20) healthBar.color = rgb(255,0,0);
    else if (faune.health < 50) healthBar.color = rgb(255,127,0);
    else healthBar.color = rgb(0,255,0);

    if (faune.health <=0){
        destroy(faune);
        for (let i = 0; i < 500; i++) {
            wait(0.01 *i, ()=>{
                makeExplosion(vec2(rand(0,MAP_WIDTH,), rand(0, MAP_HEIGHT)), 5, 10, 10);
                play("explosion", {
                    detune: rand(-1200, 1200)
                });
            });
        }
        wait(2, ()=>{
            go("endGame");
        });
    }
  }

  function addScore (playerScore) {
    faune.score += playerScore
  }

  faune.play('idle-down')

  faune.action(() => {
    const left = keyIsDown('left')
    const right = keyIsDown('right')
    const up = keyIsDown('up')
    const down = keyIsDown('down')

    const speed = 2
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

// bullet 

// action('bullet', (b) => {
// 	b.move(b.dir * 200, 0)
// })

// function shootRight() {
//   if (playerRight) {
//     spawnBullet(player.pos.add(5,0), 1)
//   }
// }

// function shootLeft() {
//   if (playerLeft) {
//     spawnBullet(player.pos.add(-5,0), -1)
//   }
// } 

// function spawnBullet(p, dir) {
//   add([
//     rect(5,1), 
//     pos(p), 
//     origin(vec2(-3, -20)), 
//     color(255, 255, 0),
//     'bullet',
//     { dir: dir },
//   ])
// }

// spawnBullet(player.pos.add(5,0), 1)