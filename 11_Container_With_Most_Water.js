/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let leftMark = 0;
  let rightMark = height.length - 1;
  let max = 0;
  while(leftMark < rightMark){
    let area = 0;
    if(height[leftMark] < height[rightMark]){
      area =  height[leftMark] * (rightMark - leftMark) 
      leftMark++;
    }else {
      area =  height[rightMark] * (rightMark - leftMark)
      rightMark--; 
    }
    max = Math.max(max, area);
  }
  return max;
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))