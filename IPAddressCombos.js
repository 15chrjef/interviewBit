module.exports = { 
	//param A : string
	//return a array of strings
	restoreIpAddresses : function(A){
        //four slots
        var myArr = [];
        function validateIp(string){
            var flag = true;
            string = string.split('.')
            string.forEach(function(val){
                if(!(val.length > 0 && val.length < 4 && Number(val) >= 0 && Number(val) <= 255)){
                    flag = false
                }
                var count = 0;
                var realV = false
                var firZ = false
                val.split('').forEach(function(char,i){
                    if(firZ){
                        flag = false;
                    }
                    if(char === '0'){
                        if(i === 0){
                            firZ = true
                        }
                        count++
                    }
                })
            })
            return flag
        }
        function subRoutine(cur, i, dCount){
            if(dCount === 3 ){
                if(validateIp(cur)){
                    myArr.push(cur)
                }
                return
            }
            if(!(i > cur.length)){
                var initJ = i+i
                for(var j = 1+ i; j < i + initJ + 4; j++){
                    var newCur = cur.substring(0, j) + '.' + cur.substring(j)
                    subRoutine(newCur, j + 1, dCount + 1)
                }
            }
        }
        subRoutine(A, 0, 0)
        return myArr;
	}
};
