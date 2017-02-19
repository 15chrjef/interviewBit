//in constant space

function(A){
	    //console.log(A)
	    if(A.next === null){
	        return A
	    }
        var head = A;
        var last, second;
        var initialCounter = -1;
        while(head !== null){
            initialCounter ++
            head = head.next
        }
        var nodesToMap = Math.floor(initialCounter/2)
        var startingGrabbedNode = nodesToMap + 1;
        for(var i = startingGrabbedNode; i <= initialCounter; i++){
            var valueToMap;
            var headToUse = A;
            var foundHead = A;
            for(var j = 0; j < i ; j++){
                headToUse = headToUse.next
            }
            valueToMap = headToUse.data
            for(var x =0; x < initialCounter - i; x++){
                foundHead = foundHead.next
            }
            foundHead.data = valueToMap - foundHead.data
            
        }
        return foundHead
	}
