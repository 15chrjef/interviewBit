module.exports = { 
	//param A : string
	//param B : string
	//return a strings
	addBinary : function(A, B){
        A = A.split('')
        B = B.split('')
        var newArr = []
        function testBinary(arr){
            for(var i = 0; i < arr.length; i++){
                if(arr[i] > 1){
                    return true
                }
            }
            return false
        }
        while(A.length > 0 || B.length > 0){
            var f = A.length > 0 ? A.pop() : 0;
            var s = B.length > 0 ? B.pop() : 0;
            newArr.unshift(Number(f) + Number(s))
        }
        //console.log(newArr)
        var j = newArr.length -1
        while(testBinary(newArr)){
            while(newArr[j] > 1){
                newArr[j] -= 2
                if(j > 0){
                    newArr[j-1] += 1
                } else {
                    newArr.unshift(1)
                }
            }
            j--
        }
        return newArr.join('')
	}
};
