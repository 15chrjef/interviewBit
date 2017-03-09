	black : function(A){
	    A = A.map(function(row){
	        return row.split('')
	    })
	    var count = 0;
	    function recurse(i, j){
	        //console.log('before',A)
	        A[i][j] = 'O'
	        //console.log('after',i,j, A)
	        if(i + 1< A.length && A[i+1][j] === 'X'){
	            flag = true
	            recurse(i+1,j)
	        }
	        if(j + 1< A[0].length && A[i][j+1] === 'X'){
	            flag = true
	            recurse(i, j+1)
	        }
	        if(i -1>= 0 && A[i-1][j] === 'X'){
	            flag = true
	            recurse(i-1, j)
	        }
	        if(j -1>= 0 && A[i][j-1] === 'X'){
	            flag = true
	            recurse(i, j-1)
	        }
	    }
        for(var i = 0; i < A.length; i++){
            for(var j =0; j < A[0].length; j++){
                if(A[i][j] === 'X'){
                    recurse(i,j)
                    count ++
                                    //console.log(A, i , j)

                }
            }
        }
        return count
	}
