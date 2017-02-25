module.exports = { 
	//param A : array of integers
	//param B : array of integers
	//return an integer
	canCompleteCircuit : function(A, B){
        //try every starting point
        for(var i =0 ; i < A.length; i++){
            var rem = 0;
            var j = i;
            var stop = false
            //go to the end of the circle
            while(j < A.length && !stop){
                rem += A[j]
                //if cost <= rem
                if(B[j] <= rem){
                    rem -= B[j]
                }else {
                    stop = true
                }
                j++
            }
            if(stop){
                //console.log('failed first')
                continue;
            }
            //complete the circle starting at the first value
            j = 0
            while( j < i && !stop){
                rem += A[j]
                if(B[j] <= rem){
                    rem -= B[j]
                } else {
                    stop = true
                }
                j++
            }
            if(!stop){
                return i
            }
            //console.log('failed second')
        }
        return -1
	}
};
