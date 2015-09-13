//CODE GOES HERE
var ship;
var crewNames;
var trainCrewmate;
var loadCrew;
var rocket;
var countdown;

rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel--;
      console.log("Engines fired. Remaining tacos: " + this.fuel);
    } else {
      console.log("Engine failed.");
    };
  }
};

ship = {
  name: "Seabiscut",
  crew: [],
  propulsion: null,
  captain: function() {
    var randomCaptain = Math.floor(Math.random()*this.crew.length);
    return this.crew[randomCaptain];
  },
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion;
  },
  fuelShip: function(amountFuel){
    rocket.fuel = rocket.fuel + amountFuel;
    console.log("We are adding " + amountFuel + " tacos");
  },
  takeoff: function(){
    rocket.fire();
    console.log("munchmunchmunchmunchmunchmunchmunchmunchmunchmunchBOOM! ...tacos...");
  }
};

crewNames = ["MLG", "Drake", "James", "Tim", "Phillip", "Nick", "Stacy", "Brendan", "Aja", "Jorge"];
trainCrewmate = function(name) {
  return {name : name}
};

loadCrew = function(array, ship){
  for(var i = 0; i < array.length; i++){
    var crewmate = trainCrewmate(array[i])
    ship.crew.push(crewmate);
  }
};

countdown = function(num, ship){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1, ship);
    }, 1000);
  }else{
    console.log("Blastoff!!!!!!!!!");
    ship.takeoff();
  };
}

var launchpad = function(ship, crewNames) {
  console.log("Hold on to your butts, Javanauts!");
  console.log("Let's get it going, " + ship.name + "!");
  loadCrew(crewNames, ship);
  console.log("The captain is: " + ship.captain().name);
  ship.fuelShip(10);
  countdown(10, ship);
};
launchpad(ship, crewNames);
