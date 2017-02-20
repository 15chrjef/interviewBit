// Definition for a  binary tree node
//			function TreeNode(data){
//				this.data = data
//				this.left = null
//				this.right = null
//			}

function balanced(A) {
    if(A === null){
        return 0
    }
    var right = balanced(A.right)
    if(right === -1){
        return -1
    }
    var left = balanced(A.left)
    if(left === -1){
        return -1
    }
    if(Math.abs(right - left) <= 1){
        return Math.max(right,left) + 1
    } else {
       return -1
    }
}

module.exports = { 
	//param A : root node of tree
	//return an integer
	isBalanced : function(A){
	   var result = balanced(A)
	   return result > -1 ? 1 : 0;
	}
};
