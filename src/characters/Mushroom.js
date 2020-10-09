// import Phaser from 'phaser'

import Character from './Character.js'
import CONFIG from '../config.js'

class Mushroom extends Character {
  super () {
    this.Attack = CONFIG.MUSH_BASE_ATTACK
    this.Defense = CONFIG.MUSH_BASE_DEFENSE
    this.HP = CONFIG.MUSH_MAX_HEALTH
    this.MaxHP = CONFIG.MUSH_MAX_HEALTH
    this.Initiative = CONFIG.MUSH_INITIATIVE
    this.Mode = CONFIG.MUSH_MODE
    this.tempHP = this.HP
  }

  mode () {
    this.removeBlock(this.Defense)

    if (this.tempHP < this.HP) {
      // if hit move to agressive
      this.Mode = 1
    }

    // Defensive Mode
    if (this.Mode === 0) {
      // DEFENSE HOO HOO
      this.defend()
    }

    // Agressive Mode
    if (this.Mode === 1) {
      // choose target
      this.attack(this.target)
      // if not hit, move back to defensive
      this.Mode = 0
    }

    this.tempHP = this.HP
  }

  attack (otherCharacterRef) {
    otherCharacterRef.takeDamage(this.Attack, this)
  }

  defend () {
    this.addBlock(this.Defense)
  }
}

export default Mushroom
