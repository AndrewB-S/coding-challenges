function domainName(url){
    //given a url, parse the domain name.
    //either has www. or not.
    //if it doesn't have www., you can split by ://
    //if it's neither of those, just split by '.' and take the 0th index. 
    
    if(url.includes('www.')){
      return url.split('www.')[1].split('.')[0]
    }else if (url.includes('://')){
      return url.split('://')[1].split('.')[0]
    }else{
      return url.split('.')[0]
    }
  }