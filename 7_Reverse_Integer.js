/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let number = Number.parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if(Math.pow(2,31)-1 < number ||Math.pow(-2,31) > number){
      return 0
  }
  return Math.sign(x) * Number.parseInt(Math.abs(x).toString().split('').reverse().join(''))
};

console.log(reverse(-230))
