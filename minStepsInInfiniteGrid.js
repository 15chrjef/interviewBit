function(A, B){
	    if(A.length === 1) {
	        return 0;
	    }
	    var curA = A[0]
	    var curB = B[0]
	    var counter = 0;
	    for(var i = 1; i < A.length; i++) {
	        while(A[i] !== curA || B[i] !== curB) {
	            var aMove = 0;
	            var bMove = 0;
	            
	            if(curA < A[i]) {
	                aMove = 1;
	            } else if( curA > A[i]) {
	                aMove = -1
	            }
	            
	            if(curB < B[i]) {
	                bMove = 1;
	            } else if( curB > B[i] ){
	                bMove = -1;
	            }
	            
	            curA += aMove;
	            curB += bMove
	            counter++; 
	        }
	    }
        //console.log(A,B)
        return counter
	}
