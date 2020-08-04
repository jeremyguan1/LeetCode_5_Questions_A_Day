/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let dictionary = {}
  for(let i = 0; i < nums.length; i++){
    if(target - nums[i] in dictionary){
      return [i , dictionary[target - nums[i]]]
    }else{
      dictionary[nums[i]] = i;
    }
  }
};

// console.log(twoSum([2,7,11,15], 9));