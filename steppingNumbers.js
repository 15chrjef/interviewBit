module.exports = { 
	//param A : integer
	//param B : integer
	//return a array of integers
	stepnum : function(A, B){
        var verticies = {}
        var steppedNumbers = []
        for(var i =0 ; i<= 9; i++){
            verticies[i] = []
            if(i === 0){
                verticies[i].push(1)
            }else if(i === 9){
                verticies[i].push(8)
            }else {
                verticies[i].push(i-1)
                verticies[i].push(i+1)
            }
        }
        function search(key, val){
            if(Number(val) <= B){
                if(val === '0'){
                    if(val >= A){
                        steppedNumbers.push(0)
                    }
                    return;
                }
                if(key !== '9'){
                    var newKey = (Number((val[val.length-1])) +1).toString()
                    var newVal = val + (Number(key)+1)
                    search(newKey, newVal)
                }
                if(key !== '0'){
                    newKey = (Number(val[val.length-1])-1).toString()
                    newVal = val + (Number(key)-1)
                    search(newKey, newVal)
                }
                if(Number(val) >= A){
                    steppedNumbers.push(Number(val))
                }
            }
        }
        for(var key in verticies){
            var val = key
            search(key, val)
        }
        return steppedNumbers.sort(function(a,b){ return a-b})
	}
};
