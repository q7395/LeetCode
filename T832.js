// 832. 翻转图像
// 给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

// 水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

// 反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。

 

// 示例 1：

// 输入：[[1,1,0],
     //  [1,0,1],
     // [0,0,0]]
// 输出：[[1,0,0],
//      [0,1,0],
//      [1,1,1]]
// 解释：首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
//      然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
// 示例 2：

// 输入：[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// 输出：[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// 解释：首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
//      然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let img = []
    for(let a in image){
        img.push(image[a].reverse())
        // console.log(image[a].reverse())
        for(let b in image[a]){
            img[a][b] == 0?img[a][b] = 1:img[a][b] = 0
        }
    }
    console.log(img)
    return img
};

flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])