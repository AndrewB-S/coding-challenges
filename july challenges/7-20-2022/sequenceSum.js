//https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => {
    //create data bucket, and control for if begin is bigger than end
    let sum = 0;

    //iterate through, increasing by step. if i <= end, keep going. 
    for(i = begin; i <= end; i+= step){
        //increase the bucket. 
        sum += i
      }
    return sum
  }