var five = require("johnny-five");

five.Board().on("ready", function() {
  var piezo = new five.Piezo(3);
  this.pinMode(0, five.Pin.ANALOG);
  var LEVEL = 1020;
  this.analogRead(0, function(l) {

    if(l>=LEVEL)
    {
      piezo.play({tempo: 150,song: [[ "c4", 1 ],]});
      console.log("C");
    }
  });

  this.analogRead(1, function(l) {
    if(l>=LEVEL)
    {
      piezo.play({tempo: 150,song: [[ "d4", 1 ],]});
      console.log("D");
    }
  });

  this.analogRead(2, function(l) {
    if(l>=LEVEL)
    {
      piezo.play({tempo: 150,song: [[ "e4", 1 ],]});
      console.log("E");
    }
  });

  this.analogRead(3, function(l) {
    if(l>=LEVEL)
    {
      piezo.play({tempo: 150,song: [[ "f4", 1 ],]});
      console.log("G");
    }
  });

  this.analogRead(4, function(l) {
    if(l>=LEVEL)
    {
      piezo.play({tempo: 150,song: [[ "g4", 1 ],]});
      console.log("G");
    }
  });


});
