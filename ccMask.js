// create a credit card mask to replace everything in front of the last 4 digits with #s

/* version 1, not using regex
function maskify(cc) {
  
    if(cc.split('').length <= 4){
      return cc
    }
    
    let mask = ""
    
    cc = cc.toString().split('')
    
    mask = mask.padStart((cc.length - 4), "#")
    
    let end = cc.splice(-4).join('')
    
    return mask += end
  }
  */


  //regex version.... 

  function maskify(){
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
  }
