// Import the entire 'phaser' namespace
import Phaser from 'phaser'

import CONFIG from '../config.js'

class GameScene extends Phaser.Scene {
  // Queue up assets to load from our local assets directory
  // Note: these are loaded asynchronously after preload() completes
  // and before 'create()' is run.
  preload () {
    this.load.image('sky', 'assets/skies/space3.png')
    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }

  create () {
    // Add background image
    const sky = this.add.image(CONFIG.SCENE_WIDTH / 2, CONFIG.SCENE_HEIGHT / 2, 'sky')
    sky.setScale(
      CONFIG.SCENE_WIDTH / sky.width,
      CONFIG.SCENE_HEIGHT / sky.height
    )

    // Create and configure a particle emitter
    const particles = this.add.particles('red')
    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
    })
    // Create and animate the logo
    const logo = this.physics.add.image(400, 100, 'logo')
    logo.setScale(0.5, 0.5)
    logo.setVelocity(100, 200)
    logo.setBounce(1, 1)
    logo.setCollideWorldBounds(true)

    // Make the particle emitter follow the logo
    emitter.startFollow(logo)
  }
}

export default GameScene
