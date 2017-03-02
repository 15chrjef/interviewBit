module.exports = { 
	//param A : array of integers
	//return a array of array of integers
	threeSum : function(A){
	    var solutions = []
	    var obj = {}
	    A = A.sort(function(a,b){ return a - b})
        for(var i = 0; i <A.length; i++){
            var j = i + 1;
            var k = A.length -1
            while(j < k){
                var possible = A[i] + A[j] + A[k]
                if(possible === 0){
                    if(!obj[JSON.stringify([A[i], A[j] , A[k]])])
                    solutions.push([A[i], A[j] , A[k]])
                    obj[JSON.stringify([A[i], A[j] , A[k]])] = true
                    j++
                }else if(possible > 0){
                    k--
                }else {
                    j++
                }
            }
        }
        return solutions
	}
