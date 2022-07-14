//https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    //add one to the end, then iterate back through. 
    digits[digits.length - 1] += 1
    
    for(i = digits.length - 1; i > 0; i--){
        if(digits[i] === 10){
            digits[i] = 0;
            digits[i - 1] += 1
        }
    }
    //if digits[0] is 10, push 1 and set 2nd digit to 0. 
    if(digits[0] === 10){
        digits.unshift(1);
        digits[1] = 0;
    }
    
    return digits
};