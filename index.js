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
function temp () {                   //Checks temp of moster energy drink
  return currentTemp <= 5 ? "Chilled to perfection!": "Needs a cooler!";
} 
console.log(temp());


// #### Challenge 5: Late Night Coding Session

let currentHour = 4; 
 function studySesh () {                 //Checks if you should have another monster
  return currentHour >= 7 && currentHour <= 24 ? "Unleash the beast!": "Better stick to water!";
 }
 console.log(studySesh())

