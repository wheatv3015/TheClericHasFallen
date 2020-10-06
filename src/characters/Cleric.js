import Phaser from 'phaser'

import Character from './Character.js'
import CONFIG from '../config.js'

class Cleric extends Character {
  // stat setup
  constructor () {
    this.Attack = CONFIG.CLERIC_BASE_ATTACK
    this.Defense = CONFIG.CLERIC_BASE_DEFENSE
    this.HP = CONFIG.CLERIC_MAX_HEALTH
    this.MaxHP = CONFIG.CLERIC_MAX_HEALTH
    this.Initiative = CONFIG.CLERIC_INITIATIVE
  }
  // interaction with ui
    //wait for turn to activate UI
    //activate UI
    //choose action
    //choose target
    //tell combat system next in initiative 
      //disable this ui

  // heal other character reference passed by UI
  clericHeal (otherCharacterRef) {
    otherCharacterRef.Character.heal (CONFIG.CLERIC_HEAL)
  }
  // damage other character reference passed by UI
  clericDamage (otherCharacterRef) {
      otherCharacterRef.Character.takeDamage (this.getAttack())
  }
}

export default Cleric
