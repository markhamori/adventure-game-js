import k from "./kaboom";
import { CharacterMovement } from './scenes/CharacterMovement';

const {
  scene,
  go,
  loadSprite,
  loadSpriteAtlas
} = k;

loadSprite('arrow-up', './assets/keys/arrowUp.png')
loadSprite('arrow-down', './assets/keys/arrowDown.png')
loadSprite('arrow-left', './assets/keys/arrowLeft.png')
loadSprite('arrow-right', './assets/keys/arrowRight.png')

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

scene('char-movement', CharacterMovement)
go('char-movement')