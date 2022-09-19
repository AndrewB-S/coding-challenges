// https://www.codewars.com/kata/56b29582461215098d00000f


function pipeFix(numbers){
    let fixedArray = numbers
    for(i = 0; i < numbers.length - 1; i++){
      if((numbers[i] + 1 != numbers[i + 1])){
        fixedArray.splice(i + 1, 0, (numbers[i] + 1) )
      }
    }
    return fixedArray
  }