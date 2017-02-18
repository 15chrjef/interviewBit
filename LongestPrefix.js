module.exports = { 
	//param A : array of strings
	//return a strings
	longestCommonPrefix : function (A){
        var myStr = '';
        if(A.length === 1) {
            return A[0]
        }
        for(var i = 0; i < A[0].length; i++) {
            var chat = A[0][i]
           for(var j = 0; j < A.length; j++){
             var str = A[j]
             //console.log(str[i], chat, str[i] === chat)
                if( str[i] !== chat){
                    //console.log('shit')
                    return myStr
                }
            }
            myStr += A[0][i]
        }
        return myStr
	}
};
