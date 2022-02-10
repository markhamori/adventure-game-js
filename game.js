import k from "./kaboom";
import { CharacterMovement } from './scenes/CharacterMovement';
import { TILE_SIZE, Tile, TileSymbol, tileToSymbol } from './shared'

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
loadSpriteAtlas('https://i.imgur.com/qBiNpV0.png', {
  [TileSymbol.Grass]: {
		x: 144,
		y: 64,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.Grass2]: {
		x: 144,
		y: 48,
		width: TILE_SIZE,
		height: TILE_SIZE
	} ,
	[TileSymbol.WallBody]: {
		x: 64,
		y: 80,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBody2]: {
		x: 48,
		y: 192,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBody3]: {
		x: 64,
		y: 96,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallLeft]: {
		x: 48,
		y: 64,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallLeft2]: {
		x: 48,
		y: 80,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallRight]: {
		x: 112,
		y: 64,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallRight2]: {
		x: 112,
		y: 80,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallRight3]: {
		x: 112,
		y: 48,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallTop]: {
		x: 80,
		y: 32,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallTop2]: {
		x: 64,
		y: 32,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBottom]: {
		x: 48,
		y: 240,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBottom2]: {
		x: 48,
		y: 208,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBottom3]: {
		x: 64,
		y: 112,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallTopLeft]: {
		x: 48,
		y: 32,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallTopRight]: {
		x: 112,
		y: 32,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBotLeft]: {
		x: 48,
		y: 112,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
	[TileSymbol.WallBotRight]: {
		x: 112,
		y: 112,
		width: TILE_SIZE,
		height: TILE_SIZE
	},
})

scene('char-movement', CharacterMovement)
go('char-movement')