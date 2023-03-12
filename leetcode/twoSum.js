`
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
`;

const twoSum = function (nums, target) {
  const map = new Map();
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const complement = target - element;
    // map에 complement가 있으면,
    if (map.has(complement)) {
      return [map.get(complement), index];
      // map에 complement가 없으면,
    } else {
      map.set(element, index);
    }
  }
  return [];
};
