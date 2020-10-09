import Cleric from '../characters/Cleric.js'
import Knight from '../characters/Knight.js'
import Rogue from '../characters/Rogue.js'
import Mushroom from '../characters/Mushroom.js'

class CombatController {
  // generate a fight (either totally random or from a list of possible fights) (currently is a single static encounter)
  constructor () {
    const cleric = new Cleric()
    const knight = new Knight()
    const rogue = new Rogue()
    const mushroom1 = new Mushroom()
    const mushroom2 = new Mushroom()
    const mushroom3 = new Mushroom()
    this.charsInScene = [cleric, knight, rogue, mushroom1, mushroom2, mushroom3]
  }
  // check every character in scene for initiative
  // order initiative from highest to lowest

  orderInitiative () {
    // brute force (for now)
    // get first character in constructor
    //    compare to each other character and find highest initiative
    // get second character
    //    compare with remaining
    // ....
    // return the list order of characters

    this.orderedCharsInScene = new Array(0) // ordered array to be filled
    for (let j = 0; j < 6; j++) { // hardcoded for number of participants, find dynamic way around
      this.highestInit = 0 // default highest initiative to be checked against is first in charsInScene array
      for (let i = 0; i < this.charsInScene.length; i++) { // for each character in charsInScene
        if (this.charsInScene[this.highestInit].getInitiative() < this.charsInScene[i].getInitiative()) { // if highest initiative has less initiative than next character in list
          this.highestInit = this.i // next character in list is now highest initiative
        }
      }
      this.orderedCharsInScene[j] = this.charsInScene[this.highestInit] // next slot in ordered initiative is the highest initiative
      this.charsInScene.slice(this.highestInit) // delete highest initiative from charsInScene
    }
    this.firstTurn(this.orderedCharsInScene) // after ordering initiative call first turn in turn order
  }

  // tell each character to take thier turn (enable/disable UI as needed) //add ui functionality later
  firstTurn (InitiativeOrder) { // pass list of characters from order initiative to firstTurn()
    // tell first in initiative to act (this is ui funtonality)
    // call combatOver () to check if combat is over
    // if not
    // call nextTurn() // pass in current index in list
  }

  nextTurn () {
    // if next in initiative is not dead
    // tell next in initiative to act
    // call combatOver () to check if combat is over
    // if not
    // call nextTurn() // pass in current index in list
  }

  // after each turn check if all pcs or enemies are dead, if one is true collect gold from enemies and advance to next scene
  combatOver () {
    //
  }
}

export default CombatController
