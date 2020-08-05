/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let maxStr = '';
  for(let i = 0; i < s.length; i++){
      for(let z = 0; z < 2; z++){
          let left = i;
          let right = i + z;
          if(s[left] && s[left] === s[right]){
              left--;
              right++;
          }
          if((right - left - 1) > maxStr.length){
              maxStr = s.substring(left + 1, right);
          }
      }
  }
  return maxStr;
};


longestPalindrome("babad")