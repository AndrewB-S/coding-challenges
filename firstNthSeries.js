function SeriesSum(n)
{
  if(n == 0){
    return n.toFixed(2)
  }
  let answer = 1;
  for(let i = 1; i < n; i++){
    answer += (1 /(1 + (i * 3)))
  }
  
  return answer.toFixed(2)
}