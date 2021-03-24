/**
 * 35. 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    if (target <= nums[0]){
        return 0
    }
    if(target > nums[nums.length-1]){
        return nums.length
    }

    let min = 0
    let max = nums.length-1
    while(min<=max){
        
    }

};

searchInsert([1,3,5,6], 5)