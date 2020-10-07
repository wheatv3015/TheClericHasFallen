import Phaser from 'phaser'

class CombatController extends Phaser.Scene {
  // preload assets for characters background, enemies, etc
  // generate a fight (either totally random or from a list of possible fights)
  // create everything in the scene
  // check every character in scene for initiative
  // order initiative from highest to lowest
  // tell each character to take thier turn (enable/disable UI as needed)
  // after each turn check if all pcs or enemies are dead, if one is true collect gold from enemies and advance to next scene
}

export default CombatController
