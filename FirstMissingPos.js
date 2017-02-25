module.exports = { 
	firstMissingPositive : function(A){
        A.forEach(function(val, i){
            if(val > 0 && val < A.length && val !== i + 1 ){
                var temp = A[val -1]
                A[val -1] = val
                A[i] = temp
                while(temp > 0 && temp < A.length && temp !== A[temp - 1]){
                    var newTemp = A[temp -1]
                    A[temp -1] = temp
                    temp = newTemp
                }
            }
        })
        for(var i = 0; i < A.length; i++){
            if(A[i] !== i + 1){
                return i + 1
            }
        }
        return A.length + 1
	}
};
