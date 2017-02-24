module.exports = { 
	//param A : array of integers
	//return an integer
	repeatedNumber : function(A){
        for(var i = 0; i < A.length ; i++) {
            var selectedInt = A[Math.abs(A[i])]
            if(selectedInt > 0){
                A[Math.abs(A[i])] *= -1
            } else {
                return Math.abs(A[i])
            }
            console.log(A)
        }
        return -1
	}
};

//time O(n)
//space O(1)
