## A Gaming database and collections

The database will have the monster collection. 

A document will have the following data schema:
```
{
	"name": "Bat",
	"Level": 4,
	"health": 25,
	"type": "Flying",
	"attacks": ["scratch", "bite"],
	"stats": {
		"attack": 5,
		"defense": 2
	}
	"style": "cool"
}
```
In the file called mongo.js will have the following commands:
- finds all monsters with an attack lower than 10
- finds all monsters with a level above 5 but below 15 inclusive
- finds monsters that do not have the “bite” attack.
- finds monsters with levels less than 6 but only return the name, level and health attributes
- finds all monsters who attack is between 10 and 20 but do not include the monsters health or style
- finds out how many monsters are in the collection.
- to sort the collection by the monsters level with the highest level at the top and the lowest at the bottom


A file with syntax that look like this:
```
var mongo = function(db) {

};
```
