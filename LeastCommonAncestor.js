// Definition for a  binary tree node
			function TreeNode(data){
				this.data = data
				this.left = null
				this.right = null
			}
            
module.exports = { 
	//param A : root node of tree
	//param B : integer
	//param C : integer
	//return an integer
	lca : function(A, B, C){
        var path1, path2;
        function findPath(curPath, curNode){
            if( curNode === null){
                return
            } else {
                var newCurPath = curPath.slice()
                newCurPath.push(curNode)
                if(curNode.data === B || curNode.data === C){
                    if(curNode.data === B) {
                            path1 = newCurPath
                    }
                    if(curNode.data === C) {
                            path2 = newCurPath
                    }
                } 
                    findPath(newCurPath, curNode.right)
                    findPath(newCurPath, curNode.left)
            }    
        }
        findPath([], A)
        
        if(!path1 || !path2){
            return -1;
        } else if(B === C && path1.length > 0 && path2.length > 0){
            return path1[path1.length -1].data
        }
        var path = path1.length < path2.length? path2 : path1;
        for(var i = 0; i < path.length; i++){
            var node1 = path1[i]
            var node2 = path2[i]
            if((i > path1.length -1 || i > path2.length -1 || node1.data !== node2.data)){
                return path[i -1].data
            }else if( i === 0 && node1.data !== node2.data){
                return false
            }

        }
        return -1
	}
};
