/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
      return false
    }
    return Number.parseInt(x.toString().split('').reverse().join('')) === x
};