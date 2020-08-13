/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let answer = [];
  if(nums.length < 3){
    return false;
  }

  nums = nums.sort((a, b) => a-b );

  for(let i = 0; i < nums.length - 2; i++){
    let j = i + 1;
    let z = nums.length - 1;
    if(nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue
    while(j < z){
      let sum = nums[i] + nums[j] + nums[z]
      if(sum === 0){
        answer.push([nums[i], nums[j], nums[z]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[z] === nums[z - 1]) z--
        j++;
        z--;
      }
      else if (sum < 0) {
        j++;
      }
      else {
        z--;
      }
    }
    
  }
  return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))