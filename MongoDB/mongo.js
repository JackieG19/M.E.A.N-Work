// Level 1

var db = "use myGame";
function monsters(name, level, health, attacks, stats, lastFought, db) {

db.monsters.insert({ 
"name" : "Fire Bender", 
"level": 10,
"health" : 150, 
"attacks" : [ "blaze", "burn", "erupt" ], 
"stats" : { "attack" : 8, "defense" : 3 },
"lastFought" : new Date(2018, 01, 15), 
});
 

db.monsters.insert({ 
"name" : "Ice Wielder",
"level": 8,
"health" : 100, 
"attacks" : [ "frost bite", "spears", "shatter" ], 
"stats" : { "attack" : 7, "defense" : 10 }, 
"lastFought" : new Date(2018, 6, 20), 
});

db.monsters.insert({
"name" : "Thunder Master", 
"level": 9,
"health" : 150, 
"attacks" : [ "fireworks", "shocker", "boom-blast" ], 
"stats" : { "attack" : 9, "defense" : 14 }, 
"lastFought" : new Date(2018, 03, 17), 
});

db.monsters.find();

db.monsters.find({"name": "Ice Wielder"});

db.monsters.find({"attacks": "frost bite"});

db.monsters.find({"stats.defense": 200});
}


// Level 3

var mongo = function(db)  {
    db.monsters.find({ "stats.attack": { $lt: 10 }});
    // returns an attack lower than 10
      
    db.monsters.find({ level: { $gte: 5, $lte: 15 } });  
    // returns monsters with a level above 5 but below 15
  
    db.monsters.find({ attacks: { $ne: "bite" }});
    // returns monsters that do not have the “bite” attack
    
    db.monsters.find({ level: { $lt: 6 }}, 
    { name: true, level: true, health: true });
    // returns monsters the name, level and health attributes with levels less than 6 
    
    db.monsters.find({ "stats.attack": { $gt: 10, $lt: 20}},
    { health: false, style: false });
    // returns monsters who attack is between 10 and 20 but do not include the monsters health or style
    
    db.monsters.find();
    // returns monsters in the collection
    
    db.monsters.find().sort({ level: -1 });
    // sort the collection by the monsters from the highest level to the lowest level
};