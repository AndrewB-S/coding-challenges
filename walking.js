function isValidWalk(walk) {
    if(walk.length != 10){
      return false
    }
    
    let steps = {
      n: 0,
      e: 0,
      s: 0,
      w: 0
    }
    
    for(let i = 0; i < walk.length; i++)
        if(walk[i] == 'n'){
          steps['n']++
        } else if(walk[i] == 'e'){
          steps['e']++
        } else if(walk[i] == 's'){
          steps['s']++
        } else if(walk[i] == 'w'){
          steps['w']++
        }
    
    return steps.n == steps.s && steps.e == steps.w
    
  }