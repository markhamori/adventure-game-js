// import type { Key } from 'kaboom'
import k from "../kaboom";

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
  const faune = add([
    pos(width() * 0.5, height() * 0.5),
    sprite('faune'),
    origin('center')
  ])
  
  add([
    text('ADVENTURE GAME', 10),
    pos(width() - 200, height() - 10),
    origin('center'),
    scale(0.25)
  ])


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