/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negative = x < 0 ? true : false;
  if(x < 10 && x >= 0) {
      return x;
  }
  let number = Number.parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if(Math.pow(2,31)-1 < number ||Math.pow(-2,31) > number){
      return 0
  }
  return negative ? -1 * Number.parseInt(Math.abs(x).toString().split('').reverse().join('')) : Number.parseInt(Math.abs(x).toString().split('').reverse().join(''))
};

console.log(reverse(-230))
