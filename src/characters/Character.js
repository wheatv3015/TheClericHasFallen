import Phaser from 'phaser'

class Character {
  constructor (baseDamage, baseDefense, currentHealth, maxHealth, baseInitative) {
    this.Attack = baseDamage
    this.Defense = baseDefense
    this.HP = currentHealth
    this.MaxHP = maxHealth
    this.Initiative = baseInitative
  }

  getAttack () {
    return this.Attack
  }

  getDefense () {
    return this.Defense
  }

  getHP () {
    return this.HP
  }

  getMaxHP () {
    return this.MaxHP
  }

  getInitiative () {
    return this.Initiative
  }

  takeDamage (damageToTake) {
    if (damageToTake - this.Defense > 0) {
      this.HP = this.HP - (damageToTake - this.Defense)
    }
    if (this.HP <= 0) {
      // destroy this character
    }
  }

  heal (amountToHeal) {
    if (amountToHeal + this.HP >= this.MaxHP) {
      this.HP = this.MaxHP
    }
    else {
      this.HP = this.HP + amountToHeal
    }
  }

  addBlock (amountToBlock) {
    this.Defense += amountToBlock
  }

  removeBlock (amountToBlock) {
    this.Defense -= amountToBlock
  }
}

export default Character
