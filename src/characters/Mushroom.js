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
  }

  // if (Mode == 0) Defensive Mode

  // if (Mode == 1) Agressive Mode
}

export default Mushroom
