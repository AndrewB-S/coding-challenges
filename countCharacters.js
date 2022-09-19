
//original solution I came up with. 
//Make an object, and if the key isn't in there (via hasOwnProperty), put it in and set the count to 1. Then if it is, increment the counter.
function count (string) {  
    let object1 = {}
    string = string.split('')
    
    for(i = 0; i < string.length; i++){
      if(!object1.hasOwnProperty(string[i])){
        object1[string[i]] = 1
      } else{
        object1[string[i]] += 1
      }
    }
    
      
    return object1
  }


  //I saw this solution using reduce and thought it was cool. 

  function count1(string) {
    let count = {};
    string.split('').forEach(function(s) {
      count[s] ? count[s]++ : count[s] = 1;
    });

    return count;
  }