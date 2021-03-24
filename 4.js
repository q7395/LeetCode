/**
 * 4. 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let Loc = Math.floor((nums1.length+nums2.length)/2)//两数组合并后的中位数位置
    let median = 0      //中位数

    let Loc1 = 0    //num1中的断点
    let Loc2 = 0    //num2中的断点

    let a = 0   //num1二分首
    let b = nums1.length-1    //num1二分尾

    // 把nums2[0]插入到nums1中
    while(a <= b){
        if(nums1[b] === nums2[Loc2] ||( nums1[b-1] <= nums2[Loc2]&&nums1[b] > nums2[Loc2])){
            nums1.splice(b,0,nums2[Loc2])
            Loc2++
            Loc1 = b+1
            break
        }else if(nums1[a] === nums2[Loc2] ||( nums1[a+1] > nums2[Loc2]&&nums1[a] <= nums2[Loc2])){
            nums1.splice(b,0,nums2[Loc2])
            Loc2++
            Loc1 = a+1
            break
        }else if (nums1[Math.floor(b/2)] > nums2[Loc2]){
            b = Math.floor(b/2)
        }else {
            a = Math.floor(b/2)
        }
        
        if (a > Loc){
            Loc1= a
            break
        }
    }
    // console.log("Loc1",Loc1,b)
    if (Loc1 = 0){
        nums1.splice(b,0,nums2[Loc2])
        Loc1 = b
    }
    // console.log("插入第一个数",nums1,Loc1,Loc2)
    while(Loc1 < Loc){
        Loc1++

        if(nums1[Loc1] >= nums2[Loc2]&&Loc1<nums1.length){
            nums1.splice(Loc1,0,nums2[Loc2])
            Loc2++
            // console.log("Loc2",Loc2)
        }else if(Loc1<nums1.length){
            Loc1++
        }else{
            break
        }
    }

    if((nums1.length+nums2.length)%2 === 0){
        median = (nums1[Loc]+nums1[Loc+1])/2
    }else{
        median = nums1[Loc]
    }

   
    console.log('结果',nums1,median)
    return median
};

findMedianSortedArrays([1,2],[3,4])