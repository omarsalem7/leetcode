/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  result = [];
  sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }
  return result;
};