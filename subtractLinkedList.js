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
//O(n) space but alos O(n) time
function(A){
	    var arr = [];
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
        var startingGrabbedNode = initialCounter % 2 === 0 ? nodesToMap : nodesToMap + 1;
        var headToUse = A;
        for(var i = 0; i <= initialCounter; i++){
            if(i >= startingGrabbedNode){
                arr.unshift(headToUse.data)
            }
            headToUse = headToUse.next;
        }
        var anotherHead = A;
        for(var i = 0; i < startingGrabbedNode; i++){
            anotherHead.data = arr[i] - anotherHead.data
            anotherHead = anotherHead.next
        }
        return A
	}
