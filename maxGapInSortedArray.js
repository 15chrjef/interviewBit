	maximumGap : function(A){
	    var h = true
	    for(var x = 1; x < A.length; x++){
	        if(!(A[x] < A[x-1])){
	            x = Infinity;
	            h = false
	        }
	    }
	    if(h){
	        return 0
	    }
        var lMin = []
        var rMax = []
        var maxGap = 0;
        for(var i = 0; i < A.length; i++){
            if(i === 0){
                lMin[0] = A[0]
            } else {
                lMin[i] = Math.min(lMin[i-1], A[i])
            }
        }
        for(var j = A.length -1; j >= 0; j--){
            if(j === A.length -1) {
                rMax[j] = A[j]
            }else {
                rMax[j] = Math.max(rMax[j + 1], A[j])
            }
        }
        j = 0;
        i = 0;
        while( i < lMin.length && j < rMax.length){
            if(lMin[i] > rMax[j]){
                i++
            }else if(j < rMax.length){
                j++
                if(j < rMax.length && i < lMin.length && rMax[j] >= lMin[i]){
                    maxGap = Math.max(j - i, maxGap)
                    if(maxGap> 50){
                    }
                }
            }
        }
        return maxGap
	}
