//https://www.codewars.com/kata/5aff237c578a14752d0035ae


//given a bunch of ages (passed in as a series of parameters in the challenge......) implement the given formula, rounding down (since you dont turn 86 and a half!)
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

    //make into array for easier time
    let array = [age1, age2, age3, age4, age5, age6, age7, age8]
    
    //return, rounded down, the square root of the ages in the array squared and then added together and divided by two.
    return Math.floor(Math.sqrt(array.reduce((sum, value) => {
      return sum + (value * value)
    }, 0)) / 2)
  }