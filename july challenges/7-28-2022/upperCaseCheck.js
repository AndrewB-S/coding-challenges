//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

//Needs to see if our string is all caps, we can check via toUpperCase method. 

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this
  }