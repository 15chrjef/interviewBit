function(A){
        //console.log(A)
        A[A.length -1] ++
        var i = A.length -1
        //console.log(A, i)
        while(A[i] % 10 === 0){
            A[i] = 0
            if(i !== 0){
                A[i - 1] ++
            } else {
                A.unshift(1)
            }
            i--
            //console.log(A)
        }
        while(A[0] === 0) {
            A.shift()
        }
        return A
    }
