// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }
  attack(){

return this.strength
  
  }

  receiveDamage(damage){
    this.health = this.health - damage
  }

}


// Viking
class Viking  extends Soldier {
constructor (health,strength, name){
  this.name = name
}
receiveDamage (damage){
  this.health = this.health - damage
  if(this.health > 0){
    return `${this.name} has received ${this.damage} points of damage`
  }  else {
    return `${this.name} has died in act of combat`
  }
  }
battleCry(){
  return "Odin Owns You All!"
}

}


// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
