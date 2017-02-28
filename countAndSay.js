module.exports = { 
	//param A : integer
	//return a strings
	countAndSay : function(A){
        if(A === 1){
            return '1'
        }
        if(A === 2){
            return '11'
        }
        var prevNums = ['1', '11']
        
        while(prevNums.length !== A){
            var newWord = ''
            var pLength = prevNums.length
            var val = prevNums[pLength-1][0]
            var prev = prevNums[pLength-1]
            var count = 1;
            
            for(var i = 1; i < prev.length; i++) {
                if(prev[i] === val){
                    count ++
                }else{
                    str = '' + count + val
                    newWord += str
                    count = 1;
                    val = prev[i]
                }
            }
            str = '' + count + val
            newWord += str
            prevNums.push(newWord)
        }
        return prevNums[prevNums.length-1]
	}
};
