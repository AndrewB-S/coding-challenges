//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

String.prototype.toJadenCase = function() {
    let string = this.toString()
                      .split(' ')
                      .map((element) => element.slice(0, 1).toUpperCase() + element.slice(1))
                      .join(' ')
    return string
  };