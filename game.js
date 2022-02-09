kaboom({
  global:true,
  fullscreen: true,
  scale: 1,
  debug: true,
  clearColor: [0,0,0,1]
})

const MOVE_SPEED = 120

loadRoot('https://i.imgur.com/')
loadSprite('link-going-left', 'eiY5zyX.png')
loadSprite('link-going-right', 'yZIb8O2.png')
loadSprite('link-going-down', 'tVtlP6y.png')
loadSprite('link-going-up', 'UkV0we0.png')
loadSprite('bg', 'xBEU9c3.png')

loadSprite('grass-1', 'T9tpXI4.png')
loadSprite('grass-2', 'wzBKZcm.png')
loadSprite('grass-3', 'zm2ZwLa.png')
loadSprite('grass-4', 'EQyXHzF.png')
loadSprite('grass-2', 'wzBKZcm.png')
loadSprite('tall-grass-1', 'rCoOsRa.png')
loadSprite('tall-grass-2', 'pSXKOGT.png')
loadSprite('tree-1', 'UOfA0pM.png')
loadSprite('tree-2', '2GQojWF.png')
loadSprite('tree-3', 'kaq8Cq5.png')
loadSprite('tree-4', 'UFHFl1h.png')
loadSprite('tree-5', 'OlhP0OY.png')
loadSprite('flower-1', 'Yzxr9Jr.png')
loadSprite('flower-2', 'cy7pfxE.png')
loadSprite('flower-3', 'Nr43Xyq.png')
loadSprite('flower-4', 'tkokRhJ.png')
loadSprite('mushroom-1', 'fUaiv4U.png')

loadSprite('wall-left', 'PhbwlZI.png')
loadSprite('wall-right', 'qNJFgeA.png')
loadSprite('wall-top-left', 'j2gzIbx.png')
loadSprite('wall-top-right', 'LTUQhS4.png')
loadSprite('wall-top', 'oqMjbxr.png')
loadSprite('wall-bottom', 'oqMjbxr.png')
loadSprite('wall-bottom-left', 'OkRvV6v.png')
loadSprite('wall-bottom-right', '5G4Slsi.png')
loadSprite('fence-1', 'QKLh2QM.png')
loadSprite('fence-middle-connect', 'ERfxMOn.png')
loadSprite('fence-bottom-left', '6aslZqt.png')
loadSprite('fence-left-connect', 'HhNYOyv.png')
loadSprite('fence-top-end', 'OGMRp1y.png')
loadSprite('fence-right-end', 'mzHvCbp.png')
loadSprite('kaboom', 'o9WizfI.png')


scene("game", ({ level, score }) => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const maps = [
    [
      'dcccccccccccccccccccccccccccce',
      'a  ]]]]]]]]]]]]]]]]]]]]]]]   a',
      'a       ,[[[[[]]],,]]]]],    a',
      'a                ,,          a',
      'a                            a',
      'a                            a',
      'a                            a',
      'a   s                        a',
      'a   v       x^               a',
      'a   v                        a',
      'a   v                        a',
      'a   zyyyyyyyyyyyyyyyyyyyym   a',
      'a   ^]]]]]^      ^^     ^    a',
      'a                            a',
      'a                 {{         a',
      'a         2                  a',
      'a    22                      a',
      'a     2       `              a',
      'a  2        2                a',
      'a      2              ´      a',
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
    '^': [sprite('tree-1'), 'wall'],
    '´': [sprite('tree-2'), 'wall'],
    '`': [sprite('tree-3'), 'wall'],
    '2': [sprite('tree-5'), 'wall'],
    '{': [sprite('mushroom-1'), 'wall'],
    '1': [sprite('grass-1')],
  }

  addLevel(maps[level], levelCfg)

  add([sprite('bg'), layer('bg')])

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