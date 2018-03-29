import deck from '../resources/deck.json';
import cities from '../resources/cities.json';
const exports = module.exports = {};

/************************
  Exercise 1: Return the age of your pup in dog years
  Given the human years of a dog, return the dog years of a dog with a number
************************/

exports.pupCalc = (humanYears) => {
  let pupYears = humanYears * 7;
  return pupYears;
}

/***********************
  Exercise 2: This function takes 4 arguments: age, average age at death,
  amount per day, type of snack
    calculates the amount consumed for rest of the life
    you returned value should be an object that holds years of life left as
    "years", amount of total snacks consumed as "total",
    and a user output as "readable" that equals:
       "You will need N of T to last you until the ripe old age of X"
***********************/

exports.lifetimeSupply = ( age, avgAgeDeath, amt, type ) => {
  // subtract our age of death from the age we are
  let daysTilDeath = (avgAgeDeath - age) * 365;
  let total = daysTilDeath * amt;
  let retVal = {
    years: avgAgeDeath - age,
    total: daysTilDeath * amt,
    readable: "You will need " + total + " of " + type + " to last you until the ripe old age of " + avgAgeDeath + ".",
  };

  return retVal;
}

/***********************
  Exercise 3: Write a function that accepts a string, and returns true if the string is a palindrome
***********************/

exports.isPalindrome = (word) => {
  return word === word.split("").reverse().join("");
  // word is being compared to itself after it has ben split into strings
  // string .split has no default and splits at the compared string
  // join has a default of , and will use it unless you pass it something else
  // reversed, and then joined back together.
}
