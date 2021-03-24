// 1. 两数之和
var addTwoNumbers = function(l1, l2) {
        // console.log(l1[0])
        let a1 = l1[0]
        let a2 = l2[0]
        //console.log(l1[0])
        for(let i = 1;i < l1.length;i++){
            a1=a1+(l1[i]*Math.pow(10,i))
            //console.log(a1)
        }
        // console.log(a1)
        for(let i = 1;i < l2.length;i++){
            a2=a2+(l2[i]*Math.pow(10,i))
        }
        let sumNum = a1+a2
        let sumL=[]
         console.log(sumNum)
        while(sumNum >= 1){ 
            // console.log(sumNum)
            sumL.push(sumNum%10)
            sumNum = parseInt(sumNum/10)
            
            console.log(sumL,sumNum)
        }
        console.log(sumL,sumNum)
        return sumNum
    };
    addTwoNumbers([2,4,3],[5,6,4])