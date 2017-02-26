module.exports = { 
	//param A : string
	//return a array of integers
	flip : function(A){
	   var longVal = 0;
	   var curVal = 0;
	   var longI = 0;
	   var curI = 0;
	   var greatestI = 0;
	   var greatest = 0;
	   var end = 0;
	   for(var i = 0; i < A.length; i++){
           if(A[i] === '0'){
               longVal ++
               curVal++
               if(curVal > longVal){
                   longVal = curVal
                   longI = curI
               }
               if(greatest  < curVal){
                   greatest = curVal
                   greatestI = curI
                   end = i;
               }
                if(greatest  < longVal || (greatest === longVal && greatestI > longI)){
                   greatest = longVal
                   greatestI = longI
                   end = i;
               }
	       }else {
	           longVal --
	           curVal = 0;
	           curI = i+1;
	       }
	   }
	   return greatest === 0? [] : [greatestI+1,end+1]
	}
};

//space O(1)
//time O(n)
