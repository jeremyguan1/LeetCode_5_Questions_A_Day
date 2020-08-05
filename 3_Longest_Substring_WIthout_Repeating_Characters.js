/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0;
  let n = s.length;
  let answer = 0;
  let lib= {};
  while(i < n && j < n){
    if(!lib[s[j]]){
      lib[s[j]] = true;
      answer = Math.max(answer, j - i)
      j++
    }else{
      delete lib[s[i]]
      i++
    }
  }
  return answer;
};

lengthOfLongestSubstring("abcabcbb")