//https://www.codewars.com/kata/5552101f47fc5178b1000050


function digPow(n, p){
    //make nArray, split copy n into an array of digits. 
    nArray = n.toString().split('').map(element => Number(element))
    
    //map array, power of p - 
    nArray = nArray.map((element, index) => {
      return Math.pow(element, (index + p))
    })
    
    //sum the array total
    sumArray = nArray.reduce((x, y) => x + y, 0)
    

    //if no remainder, it's a factor. divide sumArray/n.
    if(sumArray % n > 0){
      return -1
      } else {
        return sumArray/n
      }
  }