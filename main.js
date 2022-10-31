/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

 

 let imageD6 = document.querySelector('#d6-roll');

 let imageDoubleD61 = document.querySelector('#double-d6-roll-1');

 let imageDoubleD62 = document.querySelector('#double-d6-roll-2');

 let meanDoubleD6 = document.querySelector('#double-d6-rolls-mean');

 let medianDoubleD6 = document.querySelector('#double-d6-rolls-median');

 let modeDoubleD6 = document.querySelector('#double-d6-rolls-mode');

 let meanD6 = document.querySelector('#d6-rolls-mean');
 
 let modeD6 = document.querySelector('#d6-rolls-mode');

 let medianD6 = document.querySelector('#d6-rolls-median');

 let imageD12 = document.querySelector('#d12-roll');

 let meanD12 = document.querySelector("#d12-rolls-mean");

 let modeD12 = document.querySelector("#d12-rolls-mode");

 let medianD12 = document.querySelector('#d12-rolls-median');

 let imageD20 = document.querySelector('#d20-roll');

 let meanD20 = document.querySelector('#d20-rolls-mean');

 let medianD20 = document.querySelector('#d20-rolls-median');

 let modeD20 = document.querySelector('#d20-rolls-mode');

 let resetButton = document.querySelector('#reset-button');
 
 

/*******************
 * EVENT LISTENERS *
 *******************/
 imageD6.addEventListener('click', function(){
    console.log("D6 Clicked!")
    d6RollFunction();
    meanD6.innerText = getMean(sixes);
    medianD6.innerText = median(sixes);
    modeD6.innerText  = getMode(sixes);
 });

 imageDoubleD61.addEventListener('click', function(){
    console.log("Double D6 Clicked!")
    doubleD6RollFunction();
    meanDoubleD6.innerText = getMean(doubleSixes);
    medianDoubleD6.innerText = median(doubleSixes);
    modeDoubleD6.innerText = getMode(doubleSixes);
 });

 imageDoubleD62.addEventListener('click', function(){
    console.log("Double D6 Clicked!")
    doubleD6RollFunction();
    meanDoubleD6.innerText = getMean(doubleSixes);
    medianDoubleD6.innerText = median(doubleSixes);
    modeDoubleD6.innerText = getMode(doubleSixes);
 });

 imageD12.addEventListener('click', function(){
    console.log("D12 Clicked!")
    d12RollFunction();
    meanD12.innerText = getMean(twelves);
    medianD12.innerText = median(twelves);
    modeD12.innerText = getMode(twelves);
 });

 imageD20.addEventListener('click', function(){
    console.log("D20 Clicked!")
    d20RollFunction();
    meanD20.innerText = getMean(twenties);
    medianD20.innerText = median(twenties);
    modeD12.innerText = getMode(twenties);
 });

 resetButton.addEventListener('click', reset);



/******************
 * RESET FUNCTION *
 ******************/
function reset(){
sixes = [];
doubleSixes = [];
twelves = [];
twenties = [];

imageD6.src = "./images/start/d6.png";
imageDoubleD61.src = "./images/start/d6.png";
imageDoubleD62.src = "./images/start/d6.png";
imageD12.src =  "./images/start/d12.jpeg";
imageD20.src =  "./images/start/d20.jpg";

meanD6.innerText = "N/A";
meanDoubleD6.innerText = "N/A";
meanD12.innerText = "N/A";
meanD20.innerText = "N/A";

medianD6.innerText = "N/A";
medianDoubleD6.innerText = "N/A";
medianD12.innerText = "N/A";
medianD20.innerText = "N/A";

modeD6.innerText = "N/A";
modeDoubleD6.innerText = "N/A";
modeD12.innerText = "N/A";
modeD20.innerText = "N/A";

}

reset();
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/


function d6RollFunction(){
    let result = getRandomNumber(6);
    sixes.push(result);
    imageD6.src =`./images/d6/${result}.png`
    console.log(sixes);

}

function doubleD6RollFunction(){
    let result1 = getRandomNumber(6);
    let result2 = getRandomNumber(6);
    doubleSixes.push(result1);
    doubleSixes.push(result2);
    imageDoubleD61.src =`./images/d6/${result1}.png`;
    imageDoubleD62.src =`./images/d6/${result2}.png`;
    console.log(doubleSixes);

}

function d12RollFunction(){
    let result = getRandomNumber(12);
    twelves.push(result);
    imageD12.src =`./images/numbers/${result}.png`
    console.log(twelves);

}

function d20RollFunction(){
    let result = getRandomNumber(20);
    twenties.push(result);
    imageD20.src =`./images/numbers/${result}.png`
    console.log(twenties);

}


/****************
 * MATH SECTION *
 ****************/

function getMean(array){

    let total = 0;

    for(let i =0; i< array.length;i++){
        total += array[i];
    }

    return total/array.length;
}

const median = arr => {
    const mid = Math.floor(arr.length / 2),
      nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  };

  function getMode(array) {
    // count amount of occurences of each number
  
    // create object
    const obj = {};
    // loop over array
    array.forEach(number => {
      // for each number in array,
      // if it doesn't already exist as a key on the
      // object, create one and set its value to 1.
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        // if it already exists as key on the object,
        // increment its corresponding value.
        obj[number] += 1;
      }
    });
    
    // return object key with highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;
  
    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }
  
    // convert key back to number
    return Number(highestValueKey);
  }
  