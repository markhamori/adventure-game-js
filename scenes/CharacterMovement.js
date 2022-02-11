// import type { Key } from 'kaboom'
import k from "../kaboom";
import { maps, mapConfig } from '../maps';

const {
  pos,
  sprite,
  origin,
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
  
  add([sprite('bg'), layer('bg')])

  addLevel(maps[0], mapConfig)

  const scoreLabel = add([
    text('0', { size: 6, font: "sink"}),
    pos(365,275),
    layer('ui'),
    {
      value: "SCORE"
    },
    scale(2)
  ]) 

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
    area(),
    "faune",
    {
      health: 100,
      score: 0
    }
  ])

  onCollide("faune", "wall", (f, w) => {
    // run_action = false;
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

  onCollide("faune", "wall", (f, w) => {
    // run_action = false;
    wallText(f)
  });

  function teddyText(t) {
    const obj = add([
      text('OMG, SO CUTE! ♥', { size: 6, font: "sink"}),
      pos(t.pos)
    ])
    wait(2, () => {
      destroy(obj)
    })
  }

  onCollide("faune", "teddy", (f, t) => {
    // run_action = false;
    teddyText(t)
  });

  onCollide('faune', 'down-stairs', (f, ds) => {
    updatePlayerHealth(APPLE_HEAL)
  })

  add([
    text("HEALTH", { size: 8, font: "sink"}),
    pos(30, 280),
    origin("center"),
    layer("ui"),
  ]);

  const healthHolder = add ([
    rect(52,12),
    pos(80, 280),
    color(100,100,100),
    origin("center"),
    layer("ui"),
  ]);

  const healthHolderInside = add ([
      rect(50,10),
      pos(80, 280),
      color(0,0,0),
      origin("center"),
      layer("ui"),
  ]);

  const healthBar = add ([
      rect(50,10),
      pos(55, 275),
      color(0,255,0),
      layer("ui"),
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