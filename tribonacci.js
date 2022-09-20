//https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
  
    //quick check for 0 or small values
    if (n == 0){
      return []
    }
    
    //build the trib array to return. Signature.length ALWAYS === 3
    //thereforce index starts at 3.
    for(i = 3; i < n; i++){
      signature.push((signature[i - 1] + signature[i - 2] + signature[i - 3]))
    }
    
    return signature.slice(0,n)
    
}
  