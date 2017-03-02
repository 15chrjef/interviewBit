module.exports = { 
	//param A : array of integers
	//param B : integer
	//return an integer
	threeSumClosest : function(A, B){
	  var result = Infinity;
	  if(A === undefined){
	      return -1
	  }
	  A = A.sort(function(a,b) {return a-b })
	  for(var i = 0; i < A.length -2; i++){
	      if(i == 0 || A[i] > A[i-1]){
	          var j = i + 1
	          var k = A.length -1
	          while(j < k){
	              var possible = A[i] + A[j] + A[k]
	              //console.log(possible, A[i], A[j], A[k])
	              if(Math.abs(possible - B) < Math.abs(result - B)){
	                  result = possible
	                  while(j<k && A[j] === A[j-1]){
	                      j++
	                  }
	                  while(j<k && A[k] === A[k+1]){
	                      k--
	                  }
	              }else if(possible - B < 0){
	                  j++
	              } else {
	                  k--
	              }
	          }
	      }
	  }
	  return result
	}
};
