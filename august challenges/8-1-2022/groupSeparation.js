//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript


function rowWeights(array){
    //given an array of integers...
    //evens go to team 1, odds go to team 2
    let team1 = 0
    let team2 = 0
    
    for(i = 0; i < array.length; i++){
      if(i === 0 || i % 2 === 0){
        team1 += array[i]
      }else {
        team2 += array[i]
      }
    }
    
    return [team1, team2]
  }