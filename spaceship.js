function Spaceship(name, crew, phasers, shields){
  this.name = name;
  this.phasers = phasers;
  this.shields = shields;
  this.cloaked = false;
  this.warpDrive = "disengaged";
  this.docked = function(){
    if (crew.length >= 1){
      false;
    }
    else {
      true;
    }
  }
  this.phasersCharge = 'uncharged';
 // var ship = this
  var assignCrew = function(){
    var that = this
    debugger;
    this.crew.forEach(function(crewMember){
      crewMember.currentShip = that;
    });
  }.bind(this)();

}
