import k from "./kaboom";
import { MenuScene } from './scenes/MenuScene';

const {
  scene,
  go,
  loadSprite,
  loadSpriteAtlas,
} = k;

// Keyboard arrows load
loadSprite('arrow-up', 'https://i.imgur.com/SF656CE.png')
loadSprite('arrow-down', 'https://i.imgur.com/MaIRmau.png')
loadSprite('arrow-left', 'https://i.imgur.com/EjWmZs8.png')
loadSprite('arrow-right', 'https://i.imgur.com/GeZiBRT.png')

// Character load
loadSpriteAtlas('https://i.imgur.com/ilrhTPm.png', {
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
loadSprite('bg', "OyVnWGV.png")
loadSprite('menu-bg', "mA2na29.png")
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

// Tiles load
loadSprite('tiles-1', 'kjiVSiw.png')
loadSprite('tiles-2', 'kjiVSiw.png')

// Wall and fence load
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
loadSprite('fence-left-end', 'TnPeYsc.png')
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

//TABLE
loadSprite('table-1', 'QPwAagu.png')
loadSprite('table-2', '6y9ciWy.png')
loadSprite('table-3', 'ofURkvi.png')
loadSprite('table-4', 'kBnpuBK.png')

//ROOF-1
loadSprite('roof-1', 'c1lJtSK.png')
loadSprite('roof-2', '2wV7dDl.png')

//FLOOR
loadSprite('floor-1', 'rz0gmUd.png')
loadSprite('floor-2', 'AHmV9Yw.png')
loadSprite('floor-3', 'qU8qiOJ.png')

//GEMS
loadSprite('gem-1', 'NJzgV3c.png')
loadSprite('gem-2', 'yTKYP7A.png')
loadSprite('gem-3', 'zHjxHh5.png')
loadSprite('gem-4', 'VMWH4be.png')
loadSprite('gem-5', 'ctS0f09.png')
loadSprite('gem-6', 'qOYZq7y.png')
loadSprite('gem-7', '0e8PleJ.png')
loadSprite('gem-8', 'UU6tVJF.png')
loadSprite('gem-9', 'fRcJKJt.png')
loadSprite('gem-10', '0pgnZRE.png')
loadSprite('gem-11', 'qDP8vw1.png')
loadSprite('gem-12', '2W3TzuB.png')

//WALL
loadSprite('house-floor-1', 'TWa6h7y.png')

//TREE 1
loadSprite('tree-left-top-1', 'GrXDM5P.png')
loadSprite('tree-left-bottom-1', 'A5YlEvj.png')
loadSprite('tree-right-top-1', 'yTHXGcr.png')
loadSprite('tree-right-bottom-1', 'GIDxRYK.png')

//TREE 2
loadSprite('tree-left-top-2', '1CTzivC.png')
loadSprite('tree-left-bottom-2', 'p39lQls.png')
loadSprite('tree-right-top-2', '7oP58ES.png')
loadSprite('tree-right-bottom-2', 'Vta3BUZ.png')

//HOUSE
loadSprite('house-left-top-1', 'PBNoCws.png')
loadSprite('house-right-top-1', '57dhjCR.png')
loadSprite('house-roof-left-1', 'F036Emu.png')
loadSprite('house-roof-right-1', '0d3NkWH.png')
loadSprite('house-front-left-1', 'Qaahz6M.png')
loadSprite('house-front-right-1', 'OSJzrRQ.png')
loadSprite('house-front-middle-1', 'Rt6HYF2.png')
loadSprite('house-front-middle-2', 'pRjyWKV.png')
loadSprite('house-front-bottom-1', 'RSf9KBx.png')
loadSprite('house-front-bottom-2', 'MwsdqD7.png')

//POTIONS
loadSprite('potion-white', 'pQaO9jf.png')
loadSprite('potion-blue', 'XGMFw7M.png')
loadSprite('potion-brown', 'sc8fj1t.png')
loadSprite('potion-purple', '1Zkrupo.png')
loadSprite('potion-orange', 'P9iyFoJ.png')
loadSprite('potion-beige', '9uA8cJS.png')
loadSprite('potion-green', 'lJkAlhD.png')

//FOUNTAIN
loadSprite('fountain-b-right', 'Zu0vLPC.png')
loadSprite('fountain-b-left', 'rcWd830.png')
loadSprite('fountain-b-center', 'AjQEOYW.png')
loadSprite('fountain-m-left', 'DRIOQCT.png')
loadSprite('fountain-m-right', 'PU8VRXV.png')
loadSprite('fountain-m-center', '0uZx7M7.png')
loadSprite('fountain-t-left', 'ZS3Gg1w.png')
loadSprite('fountain-t-right', 'hi7bqdC.png')
loadSprite('fountain-t-center', 'QAxPK4C.png')

loadSprite('full-bag', '9DKAnQZ.png')
loadSprite('bag-of-greens', 'Lqah7GH.png')
loadSprite('bag-of-apples', 'i9o72Pn.png')
loadSprite('bag-of-mushrooms', 'kY9Up2J.png')
loadSprite('empty-bag', 'MEQhK0G.png')
loadSprite('wooden-barrel', 'PDwRAxj.png')
loadSprite('vase-1', '9cuEcDN.png')
loadSprite('vase-2', 'ilzidZa.png')
loadSprite('simple-box', 'jVIp5td.png')

loadSprite('zeroText', 'R09VOrp.png')
loadSprite('firstText', '8DBaYp5.png')
loadSprite('secondText', 'Qam9yND.png')
loadSprite('thirdText', 'zFegSQH.png')
loadSprite('forthText', 'Ym8JasZ.png')

// Menu border
loadSprite("border", "g3Y69Nq.png");

// Floor
loadSpriteAtlas("lu5PJXh.png", {
	"floor": {
		"x": 16,
		"y": 64,
		"width": 48,
		"height": 48,
		"sliceX": 3,
		"sliceY": 3
	},
	"chest": {
		"x": 304,
		"y": 304,
		"width": 48,
		"height": 16,
		"sliceX": 3,
		"anims": {
			"open": {
				"from": 0,
				"to": 2,
				"speed": 20,
				"loop": false
			},
			"close": {
				"from": 2,
				"to": 0,
				"speed": 20,
				"loop": false
			}
		}
	},
  "sword": {
		"x": 322,
		"y": 81,
		"width": 12,
		"height": 30
	},
})

loadSprite('kaboom', 'o9WizfI.png')

go('menu-scene', MenuScene)