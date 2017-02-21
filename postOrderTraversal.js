module.exports = { 
	//param A : root node of tree
	//return a array of integers
	postorderTraversal : function(A){
        var cur = A;
        var temp;
        var stack = [];
        var returnArr = [];
        while(stack.length > 0 || cur !== null) {
            while( cur !== null){
                if(cur.right){
                    stack.push(cur.right)
                }
                stack.push(cur)
                cur = cur.left
            }
            while( stack.length > 0 && cur === null) {
                cur = stack.pop()
                if(stack[stack.length -1] === cur.right){
                    temp = stack.pop()
                    stack.push(cur)
                    cur = temp
                    if(cur.left === null && cur.right === null){
                        returnArr.push(cur.data)
                        cur = null;
                    }
                }else {
                    returnArr.push(cur.data)
                    cur = null;
                }
                
            }
        }
        return returnArr
	}
};
