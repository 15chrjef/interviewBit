module.exports = { 
	//param A : array of integers
	//param B : array of integers
	//param C : integer
	//return an integer
	hotel : function(A, B, C){
        function sort (arr){
            return arr.sort(function(a,b){
                return a - b;
            })
        }
        A = sort(A)
        B = sort(B)
        a = 0;
        b = 0;
        var cur = 0; 
        var end = B[B.length-1]
        for(var i = 0; i <= end; i++) {
            while(B.length > b && i === B[b]){
                cur--
                b++
            }
            while( A.length > a && i === A[a]){
                cur ++
                a++
            }
            if(cur > C){
                return 0
            }
        }
        return 1
	}
};
