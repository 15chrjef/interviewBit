// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

module.exports = { 
	//param A : root node of tree
	//return a array of integers
	preorderTraversal : function(A){
	    var cur = A;
	    var stack = [];
	    var returnArray = [];
	    while( cur !== null || stack.length > 0){
            while(cur !== null){
                returnArray.push(cur.data)
                if(cur.right){
                    stack.push(cur.right)
                }
                cur = cur.left
            }
            while(stack.length > 0 && cur === null){
                cur = stack.pop()
                if(cur.left === null & cur.right === null) {
                    returnArray.push(cur.data)
                    cur = null;
                }
            }
	    }
        return returnArray
	}
};
