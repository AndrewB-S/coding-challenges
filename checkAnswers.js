//https://www.codewars.com/kata/5a3dd29055519e23ec000074

function checkExam(key, student) {
    let score = 0
    
    //loop through both indexes same time by using for loop as a counter
    for(i = 0; i < key.length; i++){
      //if the student's answer is an empty string
      if(student[i] === ''){
        score += 0
        
      //if they got the right answer
      }else if(student[i] === key[i]){
        score += 4
      //if they didn't get the right answer, but submitted something.
      }else if (student[i]){
        score -= 1
      }
    }
    
    return score < 0 ? 0 : score
  }