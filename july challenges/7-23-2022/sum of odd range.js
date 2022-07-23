//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
	//n = row on the triangle structure of odd numbers ref in link
  let startValue = (n * (n - 1) + 1)
  let answer = []
  if(n === 1){
    return 1
  } else {
    for(i = 0; i < n; i++){
      answer.push(startValue)
      startValue += 2;
    }
    return answer.reduce((sum, value) => {
      return value + sum
    }, 0)
  }
}