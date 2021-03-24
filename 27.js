/**
 * 27. 移除元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1)
            // delete nums[i]  //数组长度不变
            i--
        }
        console.log(i)
    }
    console.log(nums,nums.length)
    return nums.length
};

removeElement([0,1,2,2,3,0,4,2],2)