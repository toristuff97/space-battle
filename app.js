// console.log("Working")

// PSEUDOCODE STARTS HERE MY FRIEND 
// STEPS: 
// 1. CREATE AN ALIEN SHIP OBJECT; CREATE A CONSTRUCTOR FOR NEW ALIEN SHIPS WITH PROPERTIES OF HULL(3-6), FIREPOWER(2-4), AND ACCURACY(.6-.8) 
// 2. CREATE AN OBJECT FOR THE USS SCHWARZNEGGER WITH PROPERTIES OF HULL, FIREPOWER, AND ACCURACY 
// 3. CREATE METHODS/FUNCTIONS FOR ATTACKING (TESTING IF THE RANDOM NUMBER IS HIGHER/LOWER THAN THE ALIEN SHIP'S ACCURACY) AND RETREATING (ENDING THE GAME) 
// 4. CREATE AN IF THAT WILL TEST WHETHER THE CURRENT SHIP HAS BEEN DEFEATED, AND IF SO, SEND IN THE NEXT SHIP 
// 5. TEST WHETHER EVERY SHIP HAS BEEN DEFEATED, AND IF SO, SEND A WINNING STATEMENT; IF THE PLAYER DOES NOT DEFEAT EVERY SHIP, SEND A LOSING STATEMENT
// 6. CREATE A FUNCTION FOR THE ALIEN SHIPS ATTACKING



// Creating a constructor class to make the alien ship creation more efficient
class Alien {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}



// Using the constructor above to create 6 alien ships w/ increasingly higher stats
let alien1 = new Alien("alien1", 3.4, 2.1, .65);
let alien2 = new Alien("alien2", 3.8, 2.3, .68);
let alien3 = new Alien("alien3", 4.0, 2.5, .71);
let alien4 = new Alien("alien4", 4.5, 3.0, .74);
let alien5 = new Alien("alien5", 5.0, 3.5, .77);
let alien6 = new Alien("alien6", 6.0, 4.0, .80);
let totalAliens = (alien1.hull + alien2.hull + alien3.hull + alien4.hull + alien5.hull + alien6.hull)
// console.log(totalAliens)




// Creating player's ship Object
const playerShip = {
   hull: 20.0,
   firepower: 5.0,
   accuracy: .70
}




// Creating a function for player attacks
playerAttack = (alien) => {
    // Cycling through the aliens; the statement is upside down because it makes more sense to me that way and I want to prevent weirdness
    if (alien1.hull <=0 && alien2.hull <=0 && alien3.hull <=0 && alien4.hull <=0 && alien5.hull <=0) {
        alien = alien6
    } else if (alien1.hull <=0 && alien2.hull <=0 && alien3.hull <=0 && alien4.hull <=0) {
        alien = alien5
    } else if (alien1.hull <=0 && alien2.hull <=0 && alien3.hull <=0) {
        alien = alien4
    } else if (alien1.hull <=0 && alien2.hull <=0) {
        alien = alien3
    } else if (alien1.hull <=0) {
        alien = alien2
    }  else {
        alien = alien1
    }    
   // Making sure the function is actually cycling through the aliens
    console.log(`Now fighting ${alien.name}.`)
    // Checking for the accuracy of the attack
    attackValue = Math.random();
    // This statement tests the attackValue vs the alien ship's accuracy and shows alerts accordingly, as well as decreasing the alien's hull value, if needed.
    if (attackValue > alien.accuracy) {
        alert("Your attack hit!");
        alien.hull -= playerShip.firepower;
        // This statement lets the player know if this particular ship has been defeated, and if not, how much HP(hull) is has remaining.
        if (alien.hull <= 0) {
            alert("You've defeated this alien's ship!");
            console.log("Total aliens: ", totalAliens)
        } else {
            alert(`This ship has ${alien.hull} HP left!`);
        }
    } else {
        alert("Your attack missed!");
        alert(`This ship has ${alien.hull} HP left!`);
        console.log("Total aliens:" , totalAliens)
    }
}


// Testing the playerAttack function
// playerAttack(alien4);
// playerAttack();
// playerAttack();
// playerAttack();




// Creating a function to ask the player if they really want to retreat/end the game and sending alerts based on their input
playerRetreat = () => {
   let input = prompt("Are you sure you want to retreat Captain? This will end the battle...");
    if (input === "yes" || input === "y" || input === "Yes") {
        alert("It has been an honor fighting with you. We'll get 'em next time.");
    } else if (input === "no" || input === "n" || input === "No") {
        alert("Let's keep going!")
        playerChoice();
    }
    // } else {
    //     prompt("I didn't quite get that, did you want to retreat or not?")
    // }
}


// Testing the playerRetreat function
// playerRetreat("no")




// Creating a function for if the player's hull value goes below 0
playerLose = () => {
    alert("The USS Schwarznegger has fallen victim to the Zixx. The ship explodes and bits of your crew are cast into the vast darkness of outer space...")
    let restart = prompt("TRY AGAIN?")
    if (restart === "yes" || restart === "y" || restart === "Yes") {
        startGame()
    } else if (restart === "no" || restart === "n" || restart === "No")
        alert("It has been an honor fighting with you. Better luck next time.")
}


// Creating a function for if all of the alien ships are defeated
playerWin= () => {
    alert("The USS Schwarznegger has emerged victorious! Great instincts Captain! That'll teach those Zixx to mess with us!")
    let restart = prompt("PLAY AGAIN?")
    if (restart === "yes" || restart === "y" || restart === "Yes") {
        startGame()
    } else if (restart === "no" || restart === "n" || restart === "No")
        alert("It has been an honor fighting with you. I look forward to following you into our next battle.")
}



// Adding a function for the player's choice; if they choose to attack, the playerAttack function runs; if they choose to retreat, the playerRetreat function runs
playerChoice = () => {
    if (totalAliens >0 && playerShip.hull > 0){
    var input = prompt("Attack or retreat this time, Captain?");
    if (input === "attack" || input === "Attack" || input === "a" || input === "A") {
        playerAttack()
    } else if (input === "retreat" || input === "Retreat" || input === "r" || input === "R") {
        playerRetreat()
    } else {
        console.log("I didn't quite get that. Did you say 'attack' or 'retreat'?")
    }
} else if (totalAliens >0 && playerShip.hull <=0){
    playerLose();
} else {
    playerWin();
}
}



// Testing the playerChoice function
// playerChoice("retreat")

// Adding an intro to the game
startGame = () => {
    confirm("Welcome to the Space Battle!");
    alert("You are the Captain of the USS Schwarznegger. Your journey to the planet X35D75 has been peaceful...so far...")
    alert("Out of hyperspace, 6 hostile Zixx ships appear! It is up to you to guide your ship and crew through what'll surely be an intense battle! Each ship will attack one at a time until it is defeated. Your assistant will let you know how each ship's hull is faring after each attack. Let's go!")
    // playerChoice();
    while (alien6.hull > 0) {
        playerChoice();
    }
    playerChoice();
    // if (totalAliens <= 0 && playerShip.hull >= 0) {
    //     playerWin();
    // } else {
    //     playerLose();
    // }
    } 
    

