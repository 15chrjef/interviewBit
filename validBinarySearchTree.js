// Definition for a  binary tree node
			function TreeNode(data){
				this.data = data
				this.left = null
				this.right = null
			}

module.exports = { 
	//param A : root node of tree
	//return an integer
	isValidBST : function(A){ 
	    function isValidTree(root, max, min) {
	       //if root.value === null
	       if(root === null){
	           return true
	       } else if(root.data < max && root.data > min && isValidTree(root.left, root.data, min) && isValidTree(root.right, max, root.data) ){
	           return true
	       } else {
	           //console.log(root, max, min)
	           return false
	       }
	    }
	    return isValidTree(A, Infinity, -Infinity) === true ? 1 : 0;
	}
};
