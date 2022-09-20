//https://www.codewars.com/kata/57a083a57cb1f31db7000028/


function powersOfTwo(n){
  
    
    let solution = [];
    
    //iterate from 0 - n, inclusive
      for(let i = 0; i <= n; i++){
        solution.push(2 ** i)
      }
      
      return solution
    }