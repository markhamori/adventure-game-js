import k from "./kaboom";
import { CharacterMovement } from './scenes/CharacterMovement';

const {
  scene,
  go,
  loadSprite,
  loadSpriteAtlas
} = k;

// Keyboard arrows load
loadSprite('arrow-up', 'https://i.imgur.com/SF656CE.png')
loadSprite('arrow-down', 'https://i.imgur.com/MaIRmau.png')
loadSprite('arrow-left', 'https://i.imgur.com/EjWmZs8.png')
loadSprite('arrow-right', 'https://i.imgur.com/GeZiBRT.png')

// Character load
loadSpriteAtlas('https://i.imgur.com/V1rfdZM.png', {
  'faune': {
    x: 0,
    y: 0,
    width: 816,
    height: 34,
    sliceX: 24,
    anims: {
      'walk-down': { from:0, to: 7, loop: true, speed: 15},
      'walk-side': { from:8, to: 15, loop: true, speed: 15},
      'walk-up': { from:16, to: 23, loop: true, speed: 15},
      'idle-down': { from:1, to: 1},
      'idle-side': { from:10, to: 10},
      'idle-up': { from:19, to: 19},
    }
  }
})

// Map load
loadRoot('https://i.imgur.com/')
loadSprite('bg', "xBEU9c3.png")
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

loadSprite('floor-1', 'kjiVSiw.png')

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
loadSprite('fence-bottom-right', 'w8ZBIBh.png')
loadSprite('fence-left-connect', 'HhNYOyv.png')
loadSprite('fence-top-end', 'OGMRp1y.png')
loadSprite('fence-top-left', 'sYpMQvb.png')
loadSprite('fence-top-right', 'gBZi7ze.png')
loadSprite('fence-right-end', 'mzHvCbp.png')
loadSprite('kaboom', 'o9WizfI.png')
loadSprite('bucket', 'CaSTkhF.png')
loadSprite('wood-cut', 'LI1pEvj.png')
loadSprite('wood-pile', 'nhJPa8L.png')
loadSprite('down-stairs', 'G4kZK5G.png')
loadSprite('teddy', 'bC25cuC.png')
loadSprite('pumpkin', 'dBzZLg5.png')

loadSprite('kaboom', 'o9WizfI.png')

scene('char-movement', CharacterMovement)

go('char-movement')