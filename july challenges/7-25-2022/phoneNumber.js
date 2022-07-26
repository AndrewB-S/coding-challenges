//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript


//refactored using replace
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx"
    
    
    for(i = 0; i < numbers.length; i++){
      
        //replace takes the FIRST time a string occurs and replaces.
        //We iterate through ONCE and replace all letters.
        
        format = format.replace('x', numbers[i])
      
    }
    
    return format
    
  }


  //original solution 

  function createPhoneNumber(numbers){
    let area = numbers.slice(0, 3).join('')
    let group1 = numbers.slice(3, 6).join('')
    let group2 = numbers.slice(6).join('')
    
    return `(${area}) ${group1}-${group2}`
  }