//https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
  //evaluate if conditions are met
  if(h > 0 && bounce > 0 && bounce < 1 && window < h){
    let counter = 0

    function recursiveBounce(height, lessHeight, targetHeight){
      //ball drops past window, +1
      counter++
      //if the bounce goes above or meets the window, +1 and call the bounce again
      if((height * lessHeight) > targetHeight){
        //ball goes back up, +1
        counter++
  
        //we bounce again
        return recursiveBounce((height * lessHeight), lessHeight, targetHeight)
        
        //if the bounce is equal to or less than window, no more bounces
      } else if((height * lessHeight) <= targetHeight){
        //no more bounces.
        return counter
      }
    }
    
    return recursiveBounce(h, bounce, window)
    
  } else {
    //if conditions are not met, return -1.
    
    return -1
  }
}