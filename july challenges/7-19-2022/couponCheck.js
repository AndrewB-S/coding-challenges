//https://www.codewars.com/kata/539de388a540db7fec000642


//pretty chill, just do a double comparison with date.parse
let  checkCoupon =(enteredCode, correctCode, currentDate, expirationDate) => enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)
