module.exports = { 
	//param A : array of integers
	//return an integer
	countInversions : function(A){
	   var inversions = 0;
       A = A.map(function(num) { return  [num] })
       //console.log('start',A)
       while(A.length > 1){
           var newArr = []
           for(var i = 0; i < A.length; i+=2){
               if(i <= A.length -2){
                  var miniArr = [];
                  var first = A[i]
                  var second = A[i+1]
                  //console.log('second', second)
                  while(first.length > 0 || second.length > 0){
                      if(first.length < 1){
                         miniArr.push(second.shift())
                      } else if( second.length < 1){
                         miniArr.push(first.shift())
                      } else if(first[0] > second[0]){
                        inversions += first.length
                        miniArr.push(second.shift())
                      } else {
                        miniArr.push(first.shift())
                      }
                  }
               }else if(i === A.length -1){
                  miniArr = A[i]
               }
               newArr.push(miniArr)
               //console.log('miniArr',miniArr)
           }
           //console.log('new A', newArr)
           A = newArr
       }
       return inversions
	}
};

//time O(nlogn)
//space O(n)
