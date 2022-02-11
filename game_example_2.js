import k from "./kaboom"
import { CharacterMovement } from './scenes/CharacterMovement'

const { scene, go, loadSprite, loadSpriteAtlas } = k

k({
  global:true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0,0,0,1]
})

const MOVE_SPEED = 120

// loadRoot('https://i.imgur.com/')
loadSprite('link-going-left', 'https://i.imgur.com/eiY5zyX.png')
loadSprite('link-going-right', 'https://i.imgur.com/yZIb8O2.png')
loadSprite('link-going-down', 'https://i.imgur.com/tVtlP6y.png')
loadSprite('link-going-up', 'https://i.imgur.com/UkV0we0.png')
loadSprite('bg', 'https://i.imgur.com/tKhzxh9.png')

// loadSprite('grass-1', 'T9tpXI4.png')
// loadSprite('grass-2', 'wzBKZcm.png')
// loadSprite('grass-3', 'zm2ZwLa.png')
// loadSprite('grass-4', 'EQyXHzF.png')
// loadSprite('grass-2', 'wzBKZcm.png')
// loadSprite('tall-grass-1', 'rCoOsRa.png')
// loadSprite('tall-grass-2', 'pSXKOGT.png')
// loadSprite('tree-1', 'UOfA0pM.png')
// loadSprite('tree-2', '2GQojWF.png')
// loadSprite('tree-3', 'kaq8Cq5.png')
// loadSprite('tree-4', 'UFHFl1h.png')
// loadSprite('tree-5', 'OlhP0OY.png')
// loadSprite('flower-1', 'Yzxr9Jr.png')
// loadSprite('flower-2', 'cy7pfxE.png')
// loadSprite('flower-3', 'Nr43Xyq.png')
// loadSprite('flower-4', 'tkokRhJ.png')
// loadSprite('mushroom-1', 'fUaiv4U.png')

// loadSprite('floor-1', 'kjiVSiw.png')

// loadSprite('wall-left', 'PhbwlZI.png')
// loadSprite('wall-right', 'qNJFgeA.png')
// loadSprite('wall-top-left', 'j2gzIbx.png')
// loadSprite('wall-top-right', 'LTUQhS4.png')
// loadSprite('wall-top', 'oqMjbxr.png')
// loadSprite('wall-bottom', 'oqMjbxr.png')
// loadSprite('wall-bottom-left', 'OkRvV6v.png')
// loadSprite('wall-bottom-right', '5G4Slsi.png')
// loadSprite('fence-1', 'QKLh2QM.png')
// loadSprite('fence-middle-connect', 'ERfxMOn.png')
// loadSprite('fence-bottom-left', '6aslZqt.png')
// loadSprite('fence-left-connect', 'HhNYOyv.png')
// loadSprite('fence-top-end', 'OGMRp1y.png')
// loadSprite('fence-right-end', 'mzHvCbp.png')
// loadSprite('kaboom', 'o9WizfI.png')
// loadSprite('bucket', 'CaSTkhF.png')
// loadSprite('wood-pile', 'LI1pEvj.png')

k.loadSpriteAtlas('https://i.imgur.com/V1rfdZM.png', {
  'faune': {
    x: 0,
    y: 0,
    width: 816,
    height: 34,
    sliceX: 24,
    anims: {
      'walk-down': { from:0, to: 7, loop: true, speed: 15},
      'walk-side': { from:8, to: 15, loop: true, speed: 15},
      'walk-side': { from:16, to: 23, loop: true, speed: 15},
      'idle-down': { from:1, to: 1},
      'idle-side': { from:10, to: 10},
      'idle-up': { from:19, to: 19},
    }
  }
})


scene("game", ({ level, score }) => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const maps = [
    [
      'dcccccccccccccccccccccccccccce',
      'a                            a',
      'a                            a',
      'a                            a',
      'a                            a',
      'a                            a',
      'a                            a',
      'fccccccccccccccccccccccccccccg',
    ]
  ]

  const levelCfg = {
    width: 32,
    height: 32,
    'a': [sprite('wall-left'), solid(), 'wall'],
    'b': [sprite('wall-right'), solid(), 'wall'],
    'c': [sprite('wall-top'), solid(), 'wall'],
    'd': [sprite('wall-top-left'), solid(), 'wall'],
    'e': [sprite('wall-top-right'), solid(), 'wall'],
    'f': [sprite('wall-bottom-left'), solid(), 'wall'],
    'g': [sprite('wall-bottom-right'), solid(), 'wall'],
    'm': [sprite('fence-right-end'), solid(), 'wall'],
    's': [sprite('fence-top-end'), solid(), 'wall'],
    'v': [sprite('fence-left-connect'), solid(), 'wall'],
    'x': [sprite('fence-1'), solid(), 'wall'],
    'y': [sprite('fence-middle-connect'), solid(), 'wall'],
    'z': [sprite('fence-bottom-left'), solid(), 'wall'],
    ']': [sprite('tall-grass-1')],
    '[': [sprite('tall-grass-2')],
    '.': [sprite('flower-1')],
    ',': [sprite('flower-2')],
    '-': [sprite('flower-3')],
    '^': [sprite('tree-1'), solid(), 'wall'],
    '´': [sprite('tree-2'), solid(), 'wall'],
    '`': [sprite('tree-3'), solid(), 'wall'],
    '2': [sprite('tree-5'), solid(), 'wall'],
    '{': [sprite('mushroom-1')],
    '1': [sprite('grass-1')],
    '9': [sprite('floor-1')],
    '8': [sprite('bucket')],
    '7': [sprite('wood-pile'), solid(), 'wall'],
  }

  addLevel(maps[level], levelCfg)

  // add([sprite('bg'), layer('bg')])

  const scoreLabel = add([
    text('0'),
    pos(10,680),
    layer('ui'),
    {
      value: score
    },
    scale(2)
  ]) 

  add([text('level ' + parseInt(level + 1)), pos(10,720), scale(2)])

  const faune = add([
    pos(width() * 0.5, height() * 0.5),
    sprite('faune'),
    origin('center')
  ])

  faune.play('idle-down')
  

  const player = add([
    sprite('link-going-right'),
    pos(20,190),
    {
      // right by default
      dir: vec2(1,0)
    }
  ])
  player.action(() => {
    player.resolve()
  })

  player.overlaps('next-level', () => {
    go("game", {
      level: (level + 1) % maps.length,
      score: scoreLabel.value
    })
  })

  keyDown('left', () => {
    player.changeSprite('link-going-left')
    player.move(-MOVE_SPEED, 0)
    player.dir = vec2(-1,0)
  })

  keyDown('right', () => {
    player.changeSprite('link-going-right')
    player.move(MOVE_SPEED, 0)
    player.dir = vec2(1,0)
  })

  keyDown('up', () => {
    player.changeSprite('link-going-up')
    player.move(0, -MOVE_SPEED)
    player.dir = vec2(0,-1)
  })

  keyDown('down', () => {
    player.changeSprite('link-going-down')
    player.move(0, MOVE_SPEED)
    player.dir = vec2(0,1)
  })
  
  function spawnKaboom(p) {
    const obj = add([sprite('kaboom'), pos(p), 'kaboom'])
    wait(1, () => {
      destroy(obj)
    })
  }

  keyPress('space', () => {
    spawnKaboom(player.pos.add(player.dir.scale(48)))
  })

  player.collides('door', (d)=> {
    destroy(d)
  })

  collides('kaboom', 'skeletor', (k, s) => {
    camShake(4)
    wait(1, () => {
      destroy(k)
    })
    destroy(s)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
  })
  const SLICER_SPEED = 100

  action('slicer', (s) => {
    s.move(s.dir * SLICER_SPEED, 0)
  })

  collides('slicer', 'wall', (s) => {
    s.dir = -s.dir
  })

  const SKELETOR_SPEED = 60

  action('skeletor', (s) => {
    s.move(0, s.dir * SKELETOR_SPEED)
    s.timer -= dt()
    if (s.timer <= 0 ) {
      s.dir =- s.dir
      s.timer = rand(5)
    }
  })

  collides('skeletor', 'wall', (s) => {
    s.dir = -s.dir
  })

  player.overlaps('dangerous', () => {
    go('lose', { score: scoreLabel.value})
  })
})

scene('lose', ({ score }) => {
  add([text(score, 32), origin('center'),  pos(width() / 2, height() / 2)])
})

start("game", { level: 0, score:0})