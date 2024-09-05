// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection

let userPreference = ''; // Possible values: 'Regular', 'Sugar-free', or undefined
  function flavourSelection () {                //checks flavour selection of user. 
    return userPreference ? 'Sugar-free': 'Regular';
  }
  console.log(flavourSelection())

  // #### Challenge 2: Stock Check

let cansLeft = 3;
   function stockCheck () {               //Checks the number of monster cans in fridge.
    return cansLeft < 5 ? "Time to restock!": "We're stocked!"
   }
  
console.log(stockCheck());


// #### Challenge 3: Workout Intensity

let heartRate = 105; // Current heart rate in bpm
function workoutIntensity () {               //Checks the number of monster cans in fridge.
  return heartRate < 100 ? "Boost needed!": "Energy levels are high!";
 }
console.log(workoutIntensity());


// #### Challenge 4: Temperature Suitability

let currentTemp = 5; // Current temperature in °C
function temp () {
  return currentTemp <= 5 ? "Chilled to perfection!": "Needs a cooler!";
} 
console.log(temp());


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.