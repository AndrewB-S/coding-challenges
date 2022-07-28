// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript

//we're filtering out the letters and reversing them. 

function reverseLetter(str) {
    return str.match(/[a-z]/gi).reverse().join('')
  }