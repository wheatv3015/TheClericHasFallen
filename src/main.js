// Import the entire 'phaser' namespace
import Phaser from 'phaser'

import GameScene from './scenes/GameScene'
import CONFIG from './config.js'

// Core phaser configuration object
const config = {
  type: Phaser.AUTO,
  scale: {
    width: CONFIG.SCENE_WIDTH,
    height: CONFIG.SCENE_HEIGHT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    mode: Phaser.Scale.FIT
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 }
    }
  }
}

// Start Phaser by making a Phaser.Game object and passing in the
// config object from above.
const game = new Phaser.Game(config)
game.scene.add('main', GameScene, true)
