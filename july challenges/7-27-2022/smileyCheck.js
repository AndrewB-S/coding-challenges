//https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let counter = 0;
    
    //iterate through 
    for(i = 0; i < arr.length; i++){
        //look at the first character and check if it's valid of the two options. If so, check last character.
        if(arr[i][0] === ':' || arr[i][0] === ';') {
          
          //look at the last character and determine if valid
          if(arr[i][arr[i].length - 1] === ')' || arr[i][arr[i].length - 1] === 'D') {
            
            //if the string length is 2, increment. else check for the middle. 
            if(arr[i].length === 2){
              counter++
              
            //check middle of 3
            } else if (arr[i].length === 3){
              if(arr[i][1] === '-' || arr[i][1] === '~'){
                counter++
              }
            }
          }
        }
      }
    //time/space --- 1 for loop, up to 3 nested if statements
    return counter
  }