console.log("Working")

// PSEUDOCODE STARTS HERE MY FRIEND 
// STEPS: 
// CREATE AN ALIEN SHIP OBJECT; CREATE A CONSTRUCTOR FOR NEW ALIEN SHIPS WITH PROPERTIES OF HULL(3-6), FIREPOWER(2-4), AND ACCURACY(.6-.8) 
// CREATE AN OBJECT FOR THE USS SCHWARZNEGGER WITH PROPERTIES OF HULL, FIREPOWER, AND ACCURACY 
// CREATE METHODS/FUNCTIONS FOR ATTACKING (TESTING IF THE RANDOM NUMBER IS HIGHER/LOWER THAN THE ALIEN SHIP'S ACCURACY) AND RETREATING (ENDING THE GAME) 


class Alien {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

let alien1 = new Alien(3.4, 2.1, .65);
let alien2 = new Alien(3.8, 2.3, .68);
let alien3 = new Alien(4.0, 2.5, .71);
let alien4 = new Alien(4.5, 3.0, .74);
let alien5 = new Alien(5.0, 3.5, .77);
let alien6 = new Alien(6.0, 4.0, .80);
