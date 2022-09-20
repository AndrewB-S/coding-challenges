//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

//This is a "zero-width positive lookahead assertion" in regex. Google it. It stops inbetween the lowercase letter and sees the capital looking ahead ---that's the ?= part. Zero-width means it's not stopping at the lowercase right before. This allows me to break up the zero-width space in the string and replace that 0-width space with an actual real space. 

function solution(string) {
    return string.replace(/(?=[A-Z])/g, ' ')
}