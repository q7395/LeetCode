/**
 * 867. 转置矩阵
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {

    let flipA = []
    for(let i = 0; i < A[0].length;i++){
        let temp = []
        for(j in A){
            temp.push(A[j][i]) 
        }  
        flipA.push(temp)
    }
    console.log(flipA)
    
};
transpose([[1,2,3],[4,5,6]])