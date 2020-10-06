import Phaser from 'phaser'

import Character from './Character.js'
import CONFIG from '../config.js'

class Knight extends Character {
  // stat setup
  constructor () {
    this.Attack = CONFIG.KNIGHT_BASE_ATTACK
    this.Defense = CONFIG.KNIGHT_BASE_DEFENSE
    this.HP = CONFIG.KNIGHT_BASE_MAX_HEALTH
    this.MaxHP = CONFIG.KNIGHT_BASE_MAX_HEALTH
    this.Initiative = CONFIG.KNIGHT_BASE_INITIATIVE
    this.BlockAmount = CONFIG.KNIGHT_BASE_BLOCK
    this.BlockTarget = null
  }
  // interaction with ui
    //wait for turn to activate UI
    //disable previous block (if any) 
    //  if (this.BlockTarget != null) {
    //      BlockTarget.Character.removeBlock (this.BlockAmount)'
    //      this.BlockTarget = null
    //  }
    //activate UI
    //choose action
    //choose target
    //tell combat system next in initiative 
      //disable this ui

  //block (self or ally) reference passed through ui
  knightBlock (otherCharacterRef) {
      this.BlockTarget = otherCharacterRef
      this.BlockTarget.Character.addBlock (this.BlockAmount)
  }
  
  // damage other character reference passed by UI
  knightDamage (otherCharacterRef) {
      otherCharacterRef.Character.takeDamage (this.getAttack())
  }
}

export default Knight