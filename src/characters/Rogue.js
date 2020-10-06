// import Phaser from 'phaser'

import Character from './Character.js'
import CONFIG from '../config.js'

class Rogue extends Character {
  // stat setup
  super () {
    this.Attack = CONFIG.ROGUE_BASE_ATTACK
    this.Defense = CONFIG.ROGUE_BASE_DEFENSE
    this.HP = CONFIG.ROGUE_BASE_MAX_HEALTH
    this.MaxHP = CONFIG.ROGUE_BASE_MAX_HEALTH
    this.Initiative = CONFIG.ROGUE_BASE_INITIATIVE
    this.Counterattack = CONFIG.ROGUE_COUNTER
  }
  // interaction with ui
  // wait for turn to activate UI
  // disable previous dodge (if any)
  //    if (this.Counterattack != false) {
  //        this.Character.removeCounterattack (this.Rogue)
  //        this.Counterattack = false
  //    }
  // activate UI
  // choose action
  // choose target
  // tell combat system next in initiative
  // disable this ui

  // block (self or ally) reference passed through ui
  rogueCounterattack () {
    this.Character.addCounterattack()
  }

  // damage other character reference passed by UI
  rogueDamage (otherCharacterRef) {
    otherCharacterRef.Character.takeDamage(this.getAttack(), this.Character)
  }
}

export default Rogue
