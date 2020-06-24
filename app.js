// console.log("Working")

// PSEUDOCODE STARTS HERE MY FRIEND 
// STEPS: 
// 1. CREATE AN ALIEN SHIP OBJECT; CREATE A CONSTRUCTOR FOR NEW ALIEN SHIPS WITH PROPERTIES OF HULL(3-6), FIREPOWER(2-4), AND ACCURACY(.6-.8) 
// 2. CREATE AN OBJECT FOR THE USS SCHWARZNEGGER WITH PROPERTIES OF HULL, FIREPOWER, AND ACCURACY 
// 3. CREATE METHODS/FUNCTIONS FOR ATTACKING (TESTING IF THE RANDOM NUMBER IS HIGHER/LOWER THAN THE ALIEN SHIP'S ACCURACY) AND RETREATING (ENDING THE GAME) 
// 4. CREATE AN IF THAT WILL TEST WHETHER THE CURRENT SHIP HAS BEEN DEFEATED, AND IF SO, SEND IN THE NEXT SHIP 
// 5. TEST WHETHER EVERY SHIP HAS BEEN DEFEATED, AND IF SO, SEND A WINNING STATEMENT; IF THE PLAYER DOES NOT DEFEAT EVERY SHIP, SEND A LOSING STATEMENT



// Creating a constructor class to make the alien ship creation more efficient
class Alien {
    constructor(hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

// Using the constructor above to create 6 alien ships w/ increasingly higher stats
let alien1 = new Alien(3.4, 2.1, .65);
let alien2 = new Alien(3.8, 2.3, .68);
let alien3 = new Alien(4.0, 2.5, .71);
let alien4 = new Alien(4.5, 3.0, .74);
let alien5 = new Alien(5.0, 3.5, .77);
let alien6 = new Alien(6.0, 4.0, .80);


// Creating player's ship Object
const playerShip = {
   hull: 20.0,
   firepower: 5.0,
   accuracy: .70
}


// Creating a function for player attacks
playerAttack = (alien) => {
    // Checking for the accuracy of the attack
    attackValue = Math.random();
    // This statement tests the attackValue vs the alien ship's accuracy and shows alerts accordingly, as well as decreasing the alien's hull value, if needed.
    if (attackValue > alien.accuracy) {
        console.log("Your attack hit!");
        alien.hull -= playerShip.firepower;
        // This statement lets the player know if this particular ship has been defeated, and if not, how much HP(hull) is has remaining.
        if (alien.hull <= 0) {
            console.log("You've defeated this alien's ship!");
        } else {
            console.log(`This ship has ${alien.hull} HP left!`);
        }
    } else {
        console.log("Your attack missed!");
        console.log(`This ship has ${alien.hull} HP left!`);
    }
}


// Testing the playerAttack function
playerAttack(alien4);
// playerAttack();
// playerAttack();
// playerAttack();


// Creating a function to ask the player if they really want to retreat/end the game and sending alerts based on their input
playerRetreat = (input) => {
    console.log("Are you sure you want to retreat Captain? This will end the battle...");
    if (input === "yes" || input === "y" || input === "Yes") {
        console.log("It has been an honor fighting with you. We'll get 'em next time.");
    } else {
        console.log("Let's keep going!")
    }
}

// Testing the playerRetreat function
playerRetreat("no")

