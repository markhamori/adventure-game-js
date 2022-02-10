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

  const map = [
    [
      'ycc)cc^ccw',
      'a        b',
      'a      * b',
      'a    (   b',
      '%        b',
      'a    (   b',
      'a   *    b',
      'a        b',
      'xdd)dd)ddz',
    ]
  ]

  const levelCfg = {
    width: 48,
    height: 48,
    'a': [sprite('left-wall'), solid(), 'wall'],
    'b': [sprite('right-wall'), solid(), 'wall'],
    'c': [sprite('top-wall'), solid(), 'wall'],
    'd': [sprite('bottom-wall'), solid(), 'wall'],
    'w': [sprite('top-right-wall'), solid(), 'wall'],
    'y': [sprite('top-left-wall'), solid(), 'wall'],
    'z': [sprite('bottom-right-wall'), solid(), 'wall'],
    'x': [sprite('bottom-left-wall'), solid(), 'wall'],
    '%': [sprite('left-door'), solid(), 'door'],
    '^': [sprite('top-door'), 'next-level'],
    '$': [sprite('stairs'), 'next-level'],
    '*': [sprite('slicer'), 'slicer', { dir: -1 }, 'dangerous'],
    '}': [sprite('skeletor'), 'dangerous', { dir: -1, timer: 0 }, 'skeletor'],
    ')': [sprite('lantern'), solid()],
    '(': [sprite('fire-pot'), solid()],
    ']': [sprite('grass-tile-light')],
  }

  addLevel(map, levelCfg)

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