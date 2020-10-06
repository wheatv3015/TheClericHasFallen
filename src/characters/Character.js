// import Phaser from 'phaser'

class Character {
  constructor (baseDamage, baseDefense, currentHealth, maxHealth, baseInitative) {
    this.Attack = baseDamage
    this.Defense = baseDefense
    this.HP = currentHealth
    this.MaxHP = maxHealth
    this.Initiative = baseInitative
    this.Counterattack = false
  }
  // getters are needed for scene and ui access to character class stats

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

  takeDamage (damageToTake, attackerRef) {
    if (damageToTake - this.Defense > 0) {
      this.HP = this.HP - (damageToTake - this.Defense)
    }
    if (this.Counterattack === true) {
      attackerRef.takeDamage(this.getAttack()) // NOTE: this will cause an infinite loop between 2 counter attackers as is - debug later, may not be an issue
      // potential fixes includes letting counterattack only hit one target, extra boolean that checks against hitting the same target multiple times, a separate take damage function specifically for counterattacks that doesnt have this check
    }
    if (this.HP <= 0) {
      // destroy this character
    }
  }

  heal (amountToHeal) {
    if (amountToHeal + this.HP >= this.MaxHP) {
      this.HP = this.MaxHP
    } else {
      this.HP = this.HP + amountToHeal
    }
  }

  addBlock (amountToBlock) {
    this.Defense += amountToBlock
  }

  removeBlock (amountToBlock) {
    this.Defense -= amountToBlock
  }

  addCounterattack () {
    this.Counterattack = true
  }

  removeCounterattack () {
    this.Counterattack = false
  }
}

export default Character
