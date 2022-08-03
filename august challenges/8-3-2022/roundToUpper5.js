//https://www.codewars.com/kata/55d1d6d5955ec6365400006d

//Round to the next multiple of 5. 
function roundToNext5(n){
    while(n % 5 != 0){
      n += 1
    }
    return n
  }