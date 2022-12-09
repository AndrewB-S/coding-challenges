//Testing if a value is "narcissistic"
//narcissistic numbers are numbers that are equal to the sum of all of the individual digits,
//     raised to the power of the number of digits. 

function narcissistic(value) {
    //get the base by looking at the number of digits.
    let base = value.toString().length
    
    //This function splits the integer into digits, then uses reduce to convert the values back to a number and add them together. 
    let narcTest = value.toString().split('').reduce((sum, currValue) => {
      return Math.pow(parseInt(currValue), base) + sum
    }, 0)
    //if the number we get from splitting up the digits, raising them to the power of the given base, and adding is equal to the initial value, we got it. 
    return narcTest == value
  }